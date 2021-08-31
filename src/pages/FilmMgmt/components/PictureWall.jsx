import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

export const PictureWall = ({callbackChange, fileList}) => {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const handleCancel = () => setPreviewVisible(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Kéo thả hình hoặc nhấp vào đây</div>
        </div>
    );
    return (
        <div>
            <Upload
                listType="picture"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={callbackChange}
                maxCount={1}
            >
                {uploadButton}
            </Upload>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </div>
    );
};

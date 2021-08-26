import React, { useState, ChangeEvent, useEffect, EventHandler } from 'react';
import { Modal, Form, Input, Button, Upload } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { InboxOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import TextArea from 'antd/lib/input/TextArea';
import { IFilmInput } from '../../../common/formatTypes/Film';

// Note: dữ liệu trong form này được xác định ở reducer, tùy vào filmDetail như thế nào mà hiển thị add hoặc update
interface IFilmInputModalProps {
    show: boolean;
    callbackCancel?: () => void;
}
export const FilmInputModal: React.FC<IFilmInputModalProps> = ({ show, callbackCancel }) => {
    const dispatch = useDispatch();

    /* -------------------------------- useState -------------------------------- */
    const { filmDetail } = useSelector((root: any) => root.filmStore);
    const [inputFields, setInputFields] = useState<IFilmInput>(filmDetail);
    /* -------------------------------------------------------------------------- */

    /* -------------------------------- useEffect ------------------------------- */
    useEffect(() => {
        setInputFields({ ...filmDetail });
    }, [filmDetail]);
    /* -------------------------------------------------------------------------- */

    /* ------------------------------ Các hàm xử lý ----------------------------- */
    const handleChangeInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setInputFields({
            ...inputFields,
            [name]: value,
        });
    };
    const handleSelectCheckbox = (event: any) => {
        const { name, checked } = event.target;
        setInputFields({
            ...inputFields,
            [name]: checked,
        });
    };
    /* -------------------------------------------------------------------------- */
    return (
        <Modal
            title={filmDetail.maPhim !== 0 ? 'Cập nhật phim' : 'Thêm phim mới'}
            visible={show}
            onCancel={callbackCancel}
            footer={false}
        >
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} layout="horizontal">
                {filmDetail.maPhim !== 0 && (
                    <Form.Item label="Mã phim">
                        <Input value={filmDetail.maPhim} disabled />
                    </Form.Item>
                )}

                <Form.Item label="Tên phim">
                    <Input
                        name="tenPhim"
                        value={inputFields.tenPhim}
                        onChange={handleChangeInput}
                    />
                </Form.Item>
                <Form.Item label="Bí danh">
                    <Input name="biDanh" value={inputFields.biDanh} onChange={handleChangeInput} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input
                        name="trailer"
                        value={inputFields.trailer}
                        onChange={handleChangeInput}
                    />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <Upload.Dragger name="hinhAnh">
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Kéo thả ảnh vào đây</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Upload.Dragger>
                </Form.Item>
                <Form.Item label="Mô tả">
                    <TextArea
                        rows={4}
                        name="moTa"
                        value={inputFields.moTa}
                        onChange={handleChangeInput}
                    />
                </Form.Item>
                <Form.Item label="Hot">
                    <Checkbox
                        type="checkbox"
                        name="hot"
                        checked={inputFields.hot}
                        onChange={handleSelectCheckbox}
                    />
                </Form.Item>
                <Form.Item label="Đang chiếu">
                    <Checkbox
                        checked={inputFields.dangChieu}
                        type="checkbox"
                        name="dangChieu"
                        onChange={handleSelectCheckbox}
                    />
                </Form.Item>
                <Form.Item label="Sắp chiếu">
                    <Checkbox
                        type="checkbox"
                        name="sapChieu"
                        checked={inputFields.sapChieu}
                        onChange={handleSelectCheckbox}
                    />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <Input
                        type="date"
                        name="ngayKhoiChieu"
                        value={inputFields.ngayKhoiChieu}
                        onChange={handleChangeInput}
                    />
                </Form.Item>
                <Form.Item label="Đánh giá">
                    <Input
                        name="danhGia"
                        value={inputFields.danhGia}
                        onChange={handleChangeInput}
                    />
                </Form.Item>
                <div className="flex justify-end">
                    <Button type="default" htmlType="button" onClick={callbackCancel} >
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit" className="ml-1">
                        Submit
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

import { Button, Modal, Form, Input, FormInstance, DatePicker, Upload } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import moment from 'moment';
import { ChangeEvent, createRef, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MA_NHOM } from '../../../config';
import { ManagementContext } from '../../../contexts/ManagementContext';
import { updateFilmAction } from '../../../store/film/filmActions';

interface Props {}

const FilmEditModal = (props: Props) => {
    const dispatch = useDispatch();
    const formRef = createRef<FormInstance>();

    /* --------------------------------- context -------------------------------- */
    const { editModalState, common } = useContext(ManagementContext);
    const { showEditModal, setShowEditModal, inputFields } = editModalState;
    const { reloadFilm } = common;
    /* -------------------------------------------------------------------------- */

    /* -------------------------------- useState -------------------------------- */
    const [image, setImage] = useState<any>(null);
    /* -------------------------------------------------------------------------- */

    /* -------------------------------- useEffect ------------------------------- */
    useEffect(() => {
        formRef.current?.resetFields();
        formRef.current?.setFieldsValue({
            ...inputFields,
            ngayKhoiChieu: moment(inputFields.ngayKhoiChieu),
        });
    }, [inputFields]);
    /* -------------------------------------------------------------------------- */

    const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        if (files) {
            const file = files[0];
            const name = file.name;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                if (typeof e.target?.result === 'string') {
                    imgRef.current?.setAttribute('src', e.target?.result);
                }
                setImage({
                    file,
                    name,
                });
            };
        } else {
            console.log('Khong co file');
        }
    };

    const handleFinish = (values: any) => {
        const formData = new FormData();
        if (image !== null) {
            formData.append('hinhAnh', image.file, image.name);
        }
        formData.append('maNhom', MA_NHOM);
        formData.append('ngayKhoiChieu', moment(values.ngayKhoiChieu).format('DD/MM/YYYY'));
        for (let key in values) {
            formData.append(key, values[key]);
        }
        dispatch(updateFilmAction(formData, reloadFilm));
    };
    const imgRef = createRef<HTMLImageElement>();

    return (
        <Modal
            title="Cập nhật phim"
            visible={showEditModal}
            onOk={() => {}}
            onCancel={() => setShowEditModal(false)}
            footer={false}
        >
            <Form
                name="nest-messages"
                onFinish={handleFinish}
                ref={formRef}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
            >
                <Form.Item label="Mã phim" name="maPhim">
                    <Input disabled />
                </Form.Item>

                <Form.Item
                    label="Tên phim"
                    name="tenPhim"
                    rules={[{ required: true, message: 'Tên phim không được bỏ trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Trailer"
                    name="trailer"
                    rules={[{ required: true, message: 'Trailer không được bỏ trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Mô tả"
                    name="moTa"
                    rules={[{ required: true, message: 'Mô tả không được bỏ trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ngày khởi chiếu"
                    name="ngayKhoiChieu"
                    rules={[{ required: true, message: 'Ngày khởi chiếu không được bỏ trống' }]}
                >
                    <DatePicker format="DD/MM/YYYY" />
                </Form.Item>
                <Form.Item label="Đánh giá" name="danhGia">
                    <Input type="number" />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input type="file" onChange={handleChangeImage} />
                    <img
                        alt="..."
                        style={{ width: 200, height: 200 }}
                        src={inputFields.hinhAnh}
                        ref={imgRef}
                        onErrorCapture={() => {
                            return <div></div>;
                        }}
                    />
                </Form.Item>
                <Form.Item label="Sắp chiếu" name="sapChieu" valuePropName="checked">
                    <Checkbox />
                </Form.Item>
                <Form.Item label="Đang chiếu" name="dangChieu" valuePropName="checked">
                    <Checkbox />
                </Form.Item>
                <Form.Item label="Hot" name="hot" valuePropName="checked">
                    <Checkbox />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Button onClick={() => setShowEditModal(false)}>Cancel</Button>
        </Modal>
    );
};

export default FilmEditModal;

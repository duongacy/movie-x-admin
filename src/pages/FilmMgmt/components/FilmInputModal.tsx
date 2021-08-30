import { Button, Modal, Form, Input, FormInstance, DatePicker, Upload } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { createRef, useContext, useEffect } from 'react';
import { FilmContext } from '../../../contexts/FilmContext';

interface Props {}

const FilmInputModal = (props: Props) => {
    const { formModalState } = useContext(FilmContext);
    const { inputFields, show, setShow } = formModalState;

    const [form] = Form.useForm();
    const formRef = createRef<FormInstance>();
    useEffect(() => {
        formRef.current?.resetFields();
        formRef.current?.setFieldsValue(inputFields);
    }, [inputFields]);

    const handleCancel = () => {
        setShow(false);
    };

    return (
        <Modal
            title="Basic Modal"
            visible={show}
            onOk={() => {}}
            onCancel={handleCancel}
            footer={false}
        >
            <Form
                name="nest-messages"
                onFinish={(values) => {
                    console.log('finish:', values);
                }}
                ref={formRef}
                form={form}
            >
                <Form.Item
                    label="Mã phim"
                    name="maPhim"
                    rules={[{ required: true, message: 'Mã phim không được bỏ trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Tên phim"
                    name="tenPhim"
                    rules={[{ required: true, message: 'Tên phim không được bỏ trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Bí danh"
                    name="biDanh"
                    rules={[{ required: true, message: 'Bí danh không được bỏ trống' }]}
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
                    label="Mã nhóm"
                    name="maNhom"
                    rules={[{ required: true, message: 'Mã nhóm không được bỏ trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ngày khởi chiếu"
                    name="ngayKhoiChieu"
                    rules={[{ required: true, message: 'Ngày khởi chiếu không được bỏ trống' }]}
                >
                    <Input type="datetime-local" />
                </Form.Item>
                <Form.Item
                    label="Đánh giá"
                    name="danhGia"
                    rules={[{ required: true, message: 'Đánh giá không được bỏ trống' }]}
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item
                    label="Hình ảnh"
                    name="hinhAnh"
                    rules={[{ required: true, message: 'Hình ảnh không được bỏ trống' }]}
                >
                    <Upload.Dragger />
                    {/* <Input /> */}
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
            <Button onClick={handleCancel}>Cancel</Button>
        </Modal>
    );
};

export default FilmInputModal;

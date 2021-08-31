import { Button, Modal, Form, Input, FormInstance, DatePicker, Upload } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { ChangeEvent, createRef, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IFilmInput } from '../../../common/formatTypes/Film';
import { FilmContext } from '../../../contexts/FilmContext';
import { addFilmAction } from '../../../store/film/filmActions';
import { PictureWall } from './PictureWall';

interface Props {}

const FilmInputModal = (props: Props) => {
    const { formModalState } = useContext(FilmContext);
    const { inputFields, show, setShow, isEdit } = formModalState;
    const [imgSrc, setImgSrc] = useState<any>('');
    const [imgFile, setImgFile] = useState<string | Blob>('');

    const [form] = Form.useForm();
    const formRef = createRef<FormInstance>();
    useEffect(() => {
        formRef.current?.resetFields();
        formRef.current?.setFieldsValue(inputFields);
    }, [inputFields]);

    const dispatch = useDispatch();
    const handleCancel = () => {
        setShow(false);
    };

    const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        let reader = new FileReader();
        if (event.target.files) {
            const file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target?.result);
                setImgFile(file);
            };
        }
    };

    const handleFinish = (values: any) => {
        console.log(values);

        let formData = new FormData();
        for (let key in values) {
            formData.append(key, values[key]);
        }
        formData.append('hinhAnh', imgFile, imgSrc);
        console.log('form data ne:', formData.get('hinhAnh'));

        dispatch(addFilmAction(formData, setShow));
        // for (let key in values) {
        //     if (key === 'hinhAnh') {
        //         console.log('values.hinhAnh:', values.hinhAnh);
        //         formData.append('hinhAnh', values.hinhAnh, values[key].name);
        //     } else {
        //         formData.append(key, values[key]);
        //     }
        // }
        // console.log('form data:', formData.get('hinhAnh'));
    };

    return (
        <Modal
            title={isEdit ? 'Cập nhật phim' : 'Thêm phim mới'}
            visible={show}
            onOk={() => {}}
            onCancel={handleCancel}
            footer={false}
        >
            <Form name="nest-messages" onFinish={handleFinish} ref={formRef} form={form}>
                {/* <Form.Item
                    label="Mã phim"
                    name="maPhim"
                    rules={[{ required: true, message: 'Mã phim không được bỏ trống' }]}
                >
                    <Input />
                </Form.Item> */}
                <Form.Item
                    label="Tên phim"
                    name="tenPhim"
                    // rules={[{ required: true, message: 'Tên phim không được bỏ trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Bí danh"
                    name="biDanh"
                    // rules={[{ required: true, message: 'Bí danh không được bỏ trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Trailer"
                    name="trailer"
                    // rules={[{ required: true, message: 'Trailer không được bỏ trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Mô tả"
                    name="moTa"
                    // rules={[{ required: true, message: 'Mô tả không được bỏ trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Mã nhóm"
                    name="maNhom"
                    // rules={[{ required: true, message: 'Mã nhóm không được bỏ trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ngày khởi chiếu"
                    name="ngayKhoiChieu"
                    // rules={[{ required: true, message: 'Ngày khởi chiếu không được bỏ trống' }]}
                >
                    <Input type="datetime-local" />
                </Form.Item>
                <Form.Item
                    label="Đánh giá"
                    name="danhGia"
                    // rules={[{ required: true, message: 'Đánh giá không được bỏ trống' }]}
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <Input type="file" onChange={handleChangeImage} />
                    <img style={{ width: 200, height: 200 }} src={imgSrc} alt="..." />
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

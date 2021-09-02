import { Button, Modal, Form, Input, FormInstance, DatePicker, Upload } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import moment from 'moment';
import { ChangeEvent, createRef, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MA_NHOM } from '../../../config';
import { ManagementContext } from '../../../contexts/ManagementContext';
import {
    addFilmAction,
    getAllFilmByNameAction,
    updateFilmAction,
} from '../../../store/film/filmActions';

interface Props {}

const FilmInputModal = (props: Props) => {
    const dispatch = useDispatch();
    const formRef = createRef<FormInstance>();

    /* --------------------------------- context -------------------------------- */
    const { formModalState, searchKeyState, paginationState } = useContext(ManagementContext);
    const { inputFields, show, setShow, isEdit, pushModalStatus, formAlert } =
        formModalState;
    const { page, pageSize } = paginationState;
    const { searchKey } = searchKeyState;
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
    const reloadFilm = () => {
        dispatch(getAllFilmByNameAction(searchKey, page, pageSize));
    };
    const handleFinish = (values: any) => {
        const formData = new FormData();
        if (image !== null) {
            formData.append('hinhAnh', image.file, image.name);
        }
        formData.append('tenPhim', values.tenPhim);
        formData.append('trailer', values.trailer);
        formData.append('moTa', values.moTa);
        formData.append('maNhom', MA_NHOM);
        formData.append('ngayKhoiChieu', moment(values.ngayKhoiChieu).format('DD/MM/YYYY'));
        formData.append('sapChieu', values.sapChieu);
        formData.append('danhGia', values.danhGia);
        formData.append('dangChieu', values.dangChieu);
        formData.append('hot', values.hot);
        if (isEdit) {
            formData.append('maPhim', values.maPhim);
            dispatch(updateFilmAction(formData, pushModalStatus, reloadFilm));
        } else {
            dispatch(addFilmAction(formData, pushModalStatus, reloadFilm));
        }
    };
    const imgRef = createRef<HTMLImageElement>();
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

    return (
        <Modal
            title={isEdit ? 'Cập nhật phim' : 'Thêm phim mới'}
            visible={show}
            onOk={() => {}}
            onCancel={() => setShow(false)}
            footer={false}
        >
            <Form name="nest-messages" onFinish={handleFinish} ref={formRef}>
                {isEdit ? (
                    <Form.Item label="Mã phim" name="maPhim">
                        <Input disabled />
                    </Form.Item>
                ) : (
                    ``
                )}

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
            <Button onClick={() => setShow(false)}>Cancel</Button>
            {formAlert.message}
        </Modal>
    );
};

export default FilmInputModal;

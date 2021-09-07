import { DatePicker, Input, Form, Button } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Modal from 'antd/lib/modal/Modal';
import { MA_NHOM } from 'config';
import { ManagementContext } from 'contexts/ManagementContext';
import moment from 'moment';
import { ChangeEvent, createRef, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilmAction } from 'store/film/filmActions';

interface Props {}
const FilmAddModal = (props: Props) => {
    const dispatch = useDispatch();
    const { addModalState, filmContext } = useContext(ManagementContext);
    const { reloadFilm } = filmContext;
    const { showAddModal, setShowAddModal } = addModalState;
    const [image, setImage] = useState<{
        file: File;
        name: string;
    } | null>(null);

    const imgRef = createRef<HTMLImageElement>();

    const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        const reader = new FileReader();
        if (files) {
            const file = files[0];
            const { name } = file;
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
        }
    };
    const handleFinish = (values: any) => {
        const formData = new FormData();
        if (image !== null) {
            formData.append('hinhAnh', image?.file, image?.name);
        }
        formData.append('maNhom', MA_NHOM);
        formData.append('ngayKhoiChieu', moment(values.ngayKhoiChieu).format('DD/MM/YYYY'));
        console.log('ngay khoi chieu ne:', formData.get('ngayKhoiChieu'));
        console.log('hinhANh ne:', formData.get('hinhAnh'));

        for (let key in values) {
            formData.append(key, values[key]);
        }
        dispatch(addFilmAction(formData, reloadFilm));
    };

    return (
        <Modal
            title="Thêm phim mới"
            visible={showAddModal}
            onCancel={() => setShowAddModal(false)}
            onOk={() => {}}
            footer={false}
        >
            <Form
                name="nest-messages"
                onFinish={handleFinish}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
            >
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
                        ref={imgRef}
                        alt="..."
                        style={{ width: 200, height: 200 }}
                        src="https://fakeimg.pl/200x200/"
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
            <Button onClick={() => {}}>Cancel</Button>
        </Modal>
    );
};

export default FilmAddModal;

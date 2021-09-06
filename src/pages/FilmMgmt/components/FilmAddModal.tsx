import { DatePicker, Input, Form, Button } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Modal from 'antd/lib/modal/Modal';
import { IFilmInput } from 'common/formatTypes/Film';
import { ManagementContext } from 'contexts/ManagementContext';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';

interface Props {}
const FilmAddModal = (props: Props) => {
    const dispatch = useDispatch();
    const { addModalState } = useContext(ManagementContext);
    const { showAddModal, setShowAddModal } = addModalState;

    const handleFinish = (values: any) => {
        console.log(values);
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
                    <input type="file" onChange={() => {}} />
                    <img
                        alt="..."
                        style={{ width: 200, height: 200 }}
                        src="https://fakeimg.pl/200x200/"
                        // ref={imgRef}
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

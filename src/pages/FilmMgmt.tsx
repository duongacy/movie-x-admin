import React, { useState, useContext, ChangeEvent, useEffect, EventHandler } from 'react';
import {
    Table,
    Popconfirm,
    Typography,
    Breadcrumb,
    Modal,
    Form,
    Input,
    DatePicker,
    Switch,
    Slider,
    Button,
    Upload,
} from 'antd';
import { AdminContext } from '../contexts/AdminContext';
import { EditableCell } from '../components/EditTableCell';
import { IFilm, IFilmInput } from '../common/formatTypes/Film';
import { useRef } from 'react';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { InboxOutlined } from '@ant-design/icons';

const originData: IFilm[] = [
    // dữ liệu lấy từ API
    {
        maPhim: 1,
        tenPhim: 'so em di',
        biDanh: 'khong co bi danh',
        trailer: 'no',
        hinhAnh: 'ahihi',
        moTa: 'khong',
        maNhom: 'P01',
        hot: false,
        dangChieu: false,
        sapChieu: true,
        ngayKhoiChieu: '22/08/2021',
        danhGia: 5,
    },
    {
        maPhim: 2,
        tenPhim: 'so em di 1',
        biDanh: 'khong co bi danh 2',
        trailer: 'no 2',
        hinhAnh: 'ahihi 2',
        moTa: 'khong',
        maNhom: 'P01',
        hot: false,
        dangChieu: false,
        sapChieu: true,
        ngayKhoiChieu: '22/08/2021',
        danhGia: 5,
    },
];
type ITableData = IFilm & { key: string };
const tableData: ITableData[] = originData.map((item) => ({
    ...item,
    key: 'filmData-' + item.maPhim,
}));
const FilmMgmt = () => {
    // state
    const { getColumnSearchProps } = useContext(AdminContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [inputFields, setInputFields] = useState<IFilmInput>({
        tenPhim: '',
        biDanh: '',
        trailer: '',
        hinhAnh: undefined,
        moTa: '',
        maNhom: '',
        hot: true,
        dangChieu: false,
        sapChieu: false,
        ngayKhoiChieu: '08/22/2021',
    });

    //

    const handleOk = () => {
        console.log('handleOk');
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        console.log('handleCancel');
        setIsModalVisible(false);
    };

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
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

    useEffect(() => {
        console.log('input field ne:', inputFields);
    }, [inputFields]);

    const columns: any = [
        {
            title: 'Mã phim',
            dataIndex: 'maPhim',
            key: 'maPhim',
            width: '150',
            ...getColumnSearchProps('maPhim'),
        },
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            key: 'tenPhim',
            width: '150',
        },
        {
            title: 'Bí danh',
            dataIndex: 'biDanh',
            key: 'biDanh',
            // sorter: (a: any, b: any) => a.biDanh.length - b.biDanh.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Trailer',
            dataIndex: 'trailer',
            key: 'trailer',
            width: '150',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            key: 'hinhAnh',
            width: '150',
        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            key: 'moTa',
            width: '150',
        },
        {
            title: 'Ma nhom',
            dataIndex: 'maNhom',
            key: 'maNhom',
            width: '150',
        },
        {
            title: 'Hot',
            dataIndex: 'hot',
            key: 'hot',
            width: '150',
            render: (text: string, record: IFilm, index: number) => (
                <span>{JSON.stringify(record.hot)}</span>
            ),
        },
        {
            title: 'Đang chiếu',
            dataIndex: 'dangChieu',
            key: 'dangChieu',
            width: '150',
            render: (text: any, record: IFilm, index: any) => (
                <span>{JSON.stringify(record.dangChieu)}</span>
            ),
        },
        {
            title: 'Sắp chiếu',
            dataIndex: 'sapChieu',
            key: 'sapChieu',
            width: '150',
            render: (text: any, record: IFilm, index: any) => (
                <span>{JSON.stringify(record.sapChieu)}</span>
            ),
        },
        {
            title: 'Ngày khởi chiếu',
            dataIndex: 'ngayKhoiChieu',
            key: 'ngayKhoiChieu',
            width: '150',
        },
        {
            title: 'Danh gia',
            dataIndex: 'danhGia',
            key: 'danhGia',
            width: '150',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_: any, record: ITableData) => (
                <>
                    <Typography.Link onClick={() => setIsModalVisible(true)}>Edit</Typography.Link>
                    <Popconfirm
                        title="Sure to Delete?"
                        onConfirm={() => {
                            console.log('Ban da delete');
                        }}
                        className="ml-1"
                    >
                        <a style={{ color: 'red' }}>Delete</a>
                    </Popconfirm>
                </>
            ),
        },
    ];

    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                <Breadcrumb.Item>Film management</Breadcrumb.Item>
            </Breadcrumb>
            <Table columns={columns} dataSource={tableData} />
            <Modal
                title="Cập nhật phim"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={false}
            >
                <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} layout="horizontal">
                    <Form.Item label="Mã phim" className="text-left">
                        <Input name="maPhim" onChange={handleChangeInput} disabled />
                    </Form.Item>
                    <Form.Item label="Tên phim">
                        <Input
                            name="tenPhim"
                            value={inputFields.tenPhim}
                            onChange={handleChangeInput}
                        />
                    </Form.Item>
                    <Form.Item label="Bí danh">
                        <Input
                            name="biDanh"
                            value={inputFields.biDanh}
                            onChange={handleChangeInput}
                        />
                    </Form.Item>
                    <Form.Item label="Trailer">
                        <Input
                            name="trailer"
                            value={inputFields.trailer}
                            onChange={handleChangeInput}
                        />
                    </Form.Item>
                    <Form.Item label="Hình ảnh">
                        {/* <Input name="hinhAnh"  value={inputFields.hinhAnh} type="file" onChange={handleChangeInput} /> */}
                        <Upload.Dragger name="hinhAnh">
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                                Click or drag file to this area to upload
                            </p>
                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                        </Upload.Dragger>
                    </Form.Item>
                    <Form.Item label="Mô tả">
                        <Input name="moTa" value={inputFields.moTa} onChange={handleChangeInput} />
                    </Form.Item>
                    <Form.Item label="Hot">
                        <Checkbox
                            type="checkbox"
                            name="hot"
                            checked={inputFields.hot}
                            onChange={handleSelectCheckbox}
                        />
                        {/* <Checkbox name="hot" onClick={handleChangeInput} /> */}
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
                        <Input name="danhGia" onChange={handleChangeInput} />
                    </Form.Item>
                    <div className="flex justify-end">
                        <Button type="default" htmlType="button">
                            Cancel
                        </Button>
                        <Button type="primary" htmlType="submit" className="ml-1">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Modal>
        </>
    );
};

export default FilmMgmt;

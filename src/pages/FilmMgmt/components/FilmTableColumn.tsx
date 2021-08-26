import { Popconfirm, Typography } from 'antd';
import { IFilm } from '../../../common/formatTypes/Film';
import { ITableData } from '../FilmMgmt';

// Note: table này chỉ có chức năng hiển thị data, không có ý nghĩa gì nhiều
export const FilmTableColumns = (
    getColumnSearchProps: any,
    onClickEditFilm: (maPhim: number) => void
) => {
    return [
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
            render: (text: string, record: IFilm, index: number) => (
                <p className="truncate w-20">{record.moTa}</p>
            ),
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
                    <Typography.Link onClick={() => onClickEditFilm(record.maPhim)}>
                        Edit
                    </Typography.Link>
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
};

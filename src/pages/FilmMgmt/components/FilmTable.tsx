import { Button, Popconfirm, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import React, { useContext, useEffect } from 'react';
import { ManagementContext } from '../../../contexts/ManagementContext';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFilmAction, getAllFilmByNameAction } from '../../../store/film/filmActions';
import { IFilm } from '../../../common/formatTypes/Film';
import { Link } from 'react-router-dom';
import moment from 'moment';

interface Props {}

const FilmTable = (props: Props) => {
    /* ---------------------------- get from context ---------------------------- */
    const { addModalState, paginationState, searchKeyState, editModalState, common } =
        useContext(ManagementContext);
    const { setShowEditModal, setInputFields } = editModalState;
    const { setShowAddModal } = addModalState;
    const { reloadFilm } = common;
    /* -------------------------------------------------------------------------- */

    /* -------------------------- get from store(redux) ------------------------- */
    const { loading } = useSelector((root: any) => root.parentStore);
    const { filmStore } = useSelector((root: any) => root);
    const { listFilmTable } = filmStore;
    /* -------------------------------------------------------------------------- */

    const dispatch = useDispatch();

    const handleDeleteFilm = (maPhim: number) => {
        dispatch(deleteFilmAction(maPhim, reloadFilm));
    };

    return (
        <div className="my-2">
            <Button onClick={() => setShowAddModal(true)} className="mb-1">
                Them phim moi
            </Button>
            <Table
                loading={loading}
                dataSource={listFilmTable}
                pagination={false}
                onRow={(record: IFilm, rowIndex) => {
                    return {
                        onDoubleClick: (event) => {
                            setShowEditModal(true);
                            setInputFields({ ...record });
                        },
                    };
                }}
            >
                <Column title="Tên phim" dataIndex="tenPhim" key="tenPhim" />
                <Column
                    title="Hình ảnh"
                    dataIndex="hinhAnh"
                    key="hinhAnh"
                    render={(imgSrc: string) => <img src={imgSrc} width={50} />}
                />
                <Column title="Ngày khởi chiếu" dataIndex="ngayKhoiChieu" key="ngayKhoiChieu" />
                <Column
                    title="Action"
                    dataIndex="action"
                    key="action"
                    render={(value: any, record: IFilm) => (
                        <>
                            <Popconfirm
                                title="Are you sure to delete this row?"
                                onConfirm={() => {
                                    handleDeleteFilm(record.maPhim);
                                }}
                                onCancel={() => {}}
                                okText="Yes"
                                cancelText="No"
                            >
                                <a href="#" style={{ color: 'red' }}>
                                    Delete
                                </a>
                            </Popconfirm>
                            <Link to={`/admin/show-time-mgmt/${record.maPhim}`}>Lịch chiếu</Link>
                        </>
                    )}
                />
            </Table>
        </div>
    );
};

export default FilmTable;

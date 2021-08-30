import { Button, Popconfirm, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import React, { useContext, useEffect } from 'react';
import { FilmContext } from '../../../contexts/FilmContext';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFilmByNameAction } from '../../../store/film/filmActions';
import { IFilm } from '../../../common/formatTypes/Film';

interface Props {}

const FilmTable = (props: Props) => {
    /* ---------------------------- get from context ---------------------------- */
    const { formModalState, paginationState, searchKeyState } = useContext(FilmContext);
    const { setShow, setInputFields } = formModalState;
    const { page, pageSize } = paginationState;
    const { searchKey } = searchKeyState;
    /* -------------------------------------------------------------------------- */

    /* -------------------------- get from store(redux) ------------------------- */
    const { loading } = useSelector((root: any) => root.parentStore);
    const { filmStore } = useSelector((root: any) => root);
    const { listFilmTable } = filmStore;
    /* -------------------------------------------------------------------------- */

    const dispatch = useDispatch();
    // chỉ cần gọi dispatch đúng 1 lần, bất cứ khi nào search hay chuyển page sẽ tự động dispatch
    useEffect(() => {
        console.log(searchKey);

        dispatch(getAllFilmByNameAction(searchKey, page, pageSize));
    }, [searchKey, page, pageSize]);

    return (
        <>
            <Button
                onClick={() => {
                    setShow(true);
                    setInputFields({});
                }}
            >
                Them phim moi
            </Button>
            <Table
                loading={loading}
                dataSource={listFilmTable}
                pagination={false}
                onRow={(record: IFilm, rowIndex) => {
                    return {
                        onDoubleClick: (event) => {
                            setShow(true);
                            setInputFields({ ...record });
                        }, // double click row
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
                    render={() => (
                        <Popconfirm
                            title="Are you sure to delete this row?"
                            onConfirm={() => {}}
                            onCancel={() => {}}
                            okText="Yes"
                            cancelText="No"
                        >
                            <a href="#" style={{ color: 'red' }}>
                                Delete
                            </a>
                        </Popconfirm>
                    )}
                />
            </Table>
        </>
    );
};

export default FilmTable;

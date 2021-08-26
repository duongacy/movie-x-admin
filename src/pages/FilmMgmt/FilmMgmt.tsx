import React, { useState, useContext, useEffect } from 'react';
import { Table, Breadcrumb, Button } from 'antd';
import { AdminContext } from '../../contexts/AdminContext';
import { IFilm } from '../../common/formatTypes/Film';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllFilmAction,
    getFilmDetailAction,
    resetFilmModalAction,
} from '../../store/film/filmActions';
import { FilmTableColumns } from './components/FilmTableColumn';
import { FilmInputModal } from './components/FilmInputModal';

export type ITableData = IFilm & { key: string };

const FilmMgmt = () => {
    const dispatch = useDispatch();
    /* --------------------------------- context -------------------------------- */
    const { getColumnSearchProps } = useContext(AdminContext);
    /* -------------------------------------------------------------------------- */

    /* ---------------------------- lấy data từ store --------------------------- */
    const { listFilm } = useSelector((root: any) => root.filmStore);
    const tableData: ITableData[] = listFilm.map((item: IFilm) => ({
        ...item,
        key: 'filmData-' + item.maPhim,
    }));
    /* -------------------------------------------------------------------------- */

    /* -------------------------------- useEffect ------------------------------- */
    useEffect(() => {
        dispatch(getAllFilmAction());
    }, []);
    /* -------------------------------------------------------------------------- */

    /* -------------------------------- useState -------------------------------- */
    const [isModalShow, setIsModalShow] = useState(false);
    /* -------------------------------------------------------------------------- */

    /* ------------------------------ các hàm xử lý ----------------------------- */
    const handleCancel = () => {
        console.log('handleCancel');
        setIsModalShow(false);
    };

    const onClickEditFilm = (maPhim: number) => {
        dispatch(getFilmDetailAction(maPhim));
        setIsModalShow(true);
    };
    const onClickAddFilm = () => {
        dispatch(resetFilmModalAction());
        setIsModalShow(true);
    };
    /* -------------------------------------------------------------------------- */

    const columns: any = FilmTableColumns(getColumnSearchProps, onClickEditFilm);

    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                <Breadcrumb.Item>Film management</Breadcrumb.Item>
            </Breadcrumb>
            <Button type="primary" className="my-1" onClick={onClickAddFilm}>
                Thêm phim mới{' '}
            </Button>
            <Table columns={columns} dataSource={tableData} scroll={{ x: 1500 }} />
            <FilmInputModal show={isModalShow} callbackCancel={handleCancel} />
        </>
    );
};

export default FilmMgmt;

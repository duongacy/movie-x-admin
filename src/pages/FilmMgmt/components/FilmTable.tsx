import { Button, Popconfirm, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import React, { useContext, useEffect } from 'react';
import { ManagementContext } from '../../../contexts/ManagementContext';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFilmAction, getAllFilmByNameAction } from '../../../store/film/filmActions';
import { IFilm } from '../../../common/formatTypes/Film';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props {}

const FilmTable = (props: Props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation(['film-mgmt']);
    /* ---------------------------- get from context ---------------------------- */
    
    const { addModalState, paginationState, searchState, editModalState, filmContext } =
        useContext(ManagementContext);
    const { setShowEditModal, setInputFields } = editModalState;
    const { setShowAddModal } = addModalState;
    const { searchKey } = searchState;
    const { page, pageSize } = paginationState;
    const { reloadFilm } = filmContext;
    /* -------------------------------------------------------------------------- */

    /* -------------------------- get from store(redux) ------------------------- */
    const { loading } = useSelector((root: any) => root.parentStore);
    const { filmStore } = useSelector((root: any) => root);
    const { listFilmTable } = filmStore;
    /* -------------------------------------------------------------------------- */

    /* -------------------------------- useEffect ------------------------------- */
    useEffect(() => {
        reloadFilm();
    }, [searchKey, page, pageSize]);
    /* -------------------------------------------------------------------------- */

    const handleDeleteFilm = (maPhim: number) => {
        dispatch(deleteFilmAction(maPhim, reloadFilm));
    };

    return (
        <div style={{display:"flex", flexDirection:"column", gap:"16px"}}>
            <div>
            <Button type="primary" className="mb-1" onClick={() => setShowAddModal(true)} >
            {t('add-movie')}
            </Button>
            </div>
            <div>
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
                <Column title={t('name-movie')} dataIndex="tenPhim" key="tenPhim" />
                <Column
                    title={t('poster')}
                    dataIndex="hinhAnh"
                    key="hinhAnh"
                    render={(imgSrc: string) => <img src={imgSrc} width={50} />}
                />
                <Column title={t('release-date')} dataIndex="ngayKhoiChieu" key="ngayKhoiChieu" />
                <Column
                    title={t('action')}
                    dataIndex="action"
                    key="action"
                    render={(value: any, record: IFilm) => (
                        <>
                        <div style={{display:"flex", flexDirection:"row", gap:"16px"}}>
                        <div>
                            <Popconfirm
                                title={t('remind-delete')}
                                onConfirm={() => {
                                    handleDeleteFilm(record.maPhim);
                                }}
                                onCancel={() => {}}
                                okText={t('yes')}
                                cancelText={t('no')}
                            >
                                <a href="#" style={{ color: 'red' }}>
                                    {t('delete')}
                                </a>
                            </Popconfirm>
                            </div>
                            <div>
                            <Link to={`/admin/show-time-mgmt/${record.maPhim}`}>{t('running-time')}</Link>
                            </div>
                            </div>
                        </>
                    )}
                />
            </Table>
            </div>
        </div>
    );
};
export default FilmTable;

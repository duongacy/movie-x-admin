import React, { createRef, useEffect, useState } from 'react';
import { Form, Input, Button, Select, DatePicker, FormInstance } from 'antd';
import { useParams } from 'react-router-dom';
import {
    addShowtimeAction,
    getAllCineplexAction,
    getAllTheatreByCineplexAction,
    getFilmByIdAction,
} from 'store/showTimes/showTimeAction';
import { useDispatch, useSelector } from 'react-redux';
import { ICineplex, ITheatre } from 'common/formatTypes/Cinema';
import { IShowTimeInput } from 'common/formatTypes/ShowTime';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

interface IShowtimeMgmtProps {
    title?: string
}


const ShowtimeMgmt:React.FC<IShowtimeMgmtProps> = ({title}) => {
    const { t } = useTranslation(['film-mgmt']);
    const dispatch = useDispatch();
    const [maHeThongRapSelected, setMaHeThongRapSelected] = useState<string>('');

    let { maPhim }: any = useParams();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const onFinish = (values: IShowTimeInput) => {
        const dataSubmit = {
            ...values,
            ngayChieuGioChieu: moment(values.ngayChieuGioChieu).format('DD/MM/YYYY hh:mm:ss'),
            maPhim: maPhim,
        };
        dispatch(addShowtimeAction(dataSubmit));
    };
    useEffect(() => {
        dispatch(getFilmByIdAction(maPhim));
        dispatch(getAllCineplexAction(''));
    }, []);

    useEffect(() => {
        dispatch(getAllTheatreByCineplexAction(maHeThongRapSelected));
    }, [maHeThongRapSelected]);

    const { filmDetail, cineplexList, theatreList } = useSelector(
        (root: any) => root.showTimeStore
    );
    const formRef = createRef<FormInstance>();
    const handleChangeCineplex = (value: string) => {
        formRef.current?.resetFields(['maRap']);
        setMaHeThongRapSelected(value);
    };

    return (
        <>  <div style={{justifyContent: 'space-between'}}>
            <h2>{t('create-showtimes')} - {filmDetail.tenPhim}</h2>
            <div className="flex">
                <div className="showtime-picture" style={{ justifyContent: "center"}}>
                    <img
                        src="https://znews-photo.zadn.vn/w660/Uploaded/rohunwa/2021_09_02/PC2_1.jpg"
                        alt="..."
                    />
                </div>
                <div className="form-showtime">
                    <Form {...layout} name="nest-messages" onFinish={onFinish} ref={formRef}>
                        <Form.Item label={t('system-cinemas')}>
                            <Select placeholder={t('select-system-cinemas')} onChange={handleChangeCineplex}>
                                {cineplexList.map((item: ICineplex, key: number) => (
                                    <Select.Option
                                        value={item.maHeThongRap}
                                        key={'cineplex-' + key}
                                    >
                                        {item.tenHeThongRap}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label={t('theaters')}
                            name="maRap"
                            rules={[{ required: true, message: (t('select-theaters')) }]}
                        >
                            <Select placeholder={t('select-theaters')}>
                                {theatreList.map((item: ITheatre, key: number) => (
                                    <Select.Option value={item.maCumRap} key={'theatre-' + key}>
                                        {item.tenCumRap}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label={t('date')}
                            name="ngayChieuGioChieu"
                            rules={[{ required: true, message: (t('select-date')) }]}
                        >
                            <DatePicker showTime />
                        </Form.Item>
                        <Form.Item
                            label={t('ticket-price')}
                            name="giaVe"
                            rules={[{ required: true, message: (t('input-ticket-price')) }]}
                        >
                            <Input min={75000} max={200000} type="number" />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                            {t('submit')}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            </div>
        </>
    );
};

export default ShowtimeMgmt;

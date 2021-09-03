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
import { IShowTimeInput } from 'common/formatTypes/SxhowTime';
import moment from 'moment';

interface IShowtimeMgmtProps {
    title?: string
}

const ShowtimeMgmt:React.FC<IShowtimeMgmtProps> = ({title}) => {
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
        <>
            <h6>Tao lich chieu - {filmDetail.tenPhim}</h6>
            <div className="flex">
                <div>
                    <img
                        src="https://znews-photo.zadn.vn/w660/Uploaded/rohunwa/2021_09_02/PC2_1.jpg"
                        alt="..."
                    />
                </div>
                <div>
                    <Form {...layout} name="nest-messages" onFinish={onFinish} ref={formRef}>
                        <Form.Item label="Hệ thống rạp">
                            <Select placeholder="Chọn hệ thống rạp" onChange={handleChangeCineplex}>
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
                            label="Cụm rạp"
                            name="maRap"
                            rules={[{ required: true, message: 'Chọn cụm rạp chiếu' }]}
                        >
                            <Select placeholder="Chọn cụm rạp">
                                {theatreList.map((item: ITheatre, key: number) => (
                                    <Select.Option value={item.maCumRap} key={'theatre-' + key}>
                                        {item.tenCumRap}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Ngày giờ chiếu"
                            name="ngayChieuGioChieu"
                            rules={[{ required: true, message: 'Chọn ngày chiếu giờ chiếu' }]}
                        >
                            <DatePicker showTime />
                        </Form.Item>
                        <Form.Item
                            label="Giá vé"
                            name="giaVe"
                            rules={[{ required: true, message: 'Nhập giá vé' }]}
                        >
                            <Input min={75000} max={200000} type="number" />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default ShowtimeMgmt;

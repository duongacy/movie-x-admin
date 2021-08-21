import { Select, Button } from 'antd';
import BlockTitle from '../../components/ContentYDT/BlockTitle';
import ContentYDTBlock from '../../components/ContentYDT/ContentYDTBlock';
import { DatePicker, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { IRootState } from '../../store/configureStore';
import { getAllFilmAction } from '../../store/film/filmActions';
import { IPhim } from '../../common/formatTypes/phim/Phim';
import {
    getAllMultiplexByFilmAction,
    getAllTheatreByMultiplexAction,
    getShowTimeAction,
} from '../../store/theatre/theatreActions';
import { IMultiplex, ITheatre } from '../../store/theatre/theatreTypes';
import moment from 'moment';

const { Option } = Select;

interface IProps {}
const CinemaBlock = (props: IProps) => {
    const dispatch = useDispatch();
    // state
    const [filmSelect, setFilmSelect] = useState({
        value: 'Chọn phim',
    });
    const [multiplexSelect, setMultiplexSelect] = useState({
        disabled: true,
        value: 'Chọn hệ thống rạp',
    });
    const [theatreSelect, setTheatreSelect] = useState({
        disabled: true,
        value: 'Chọn cụm rạp',
        defaultActiveFirstOption: false,
    });
    // end state

    // getData from store
    const { filmStore, theatreStore } = useSelector((root: IRootState) => root);
    const { listFilm } = filmStore;
    const { listMultiplexByFilm, listTheatre } = theatreStore;
    // end get data from store

    // useEffect
    useEffect(() => {
        dispatch(getAllFilmAction());
    }, []);
    useEffect(() => {
        console.log('multiplex select:', multiplexSelect.value);
        console.log('theatre select:', theatreSelect.value);
    }, [theatreSelect]);
    // end useEffect

    // handleChange
    const handleChangePhim = (value: any) => {
        setFilmSelect({
            ...filmSelect,
            value,
        });
        dispatch(getAllMultiplexByFilmAction(value));
        resetMultiplexSelect();
        enableMultiplexSelect();
        resetTheatreSelect();
    };
    const handleChangeMultiplex = (value: any) => {
        setMultiplexSelect({
            ...multiplexSelect,
            value,
        });
        dispatch(getAllTheatreByMultiplexAction(value));
        resetTheatreSelect();
        enableTheatreSelect();
    };
    const handleChangeTheatre = (value: any) => {
        setTheatreSelect({
            ...theatreSelect,
            value,
        });
    };
    // end handleChange

    const resetMultiplexSelect = () => {
        setMultiplexSelect({ ...multiplexSelect, value: 'Chọn hệ thống rạp', disabled: true });
    };
    const resetTheatreSelect = () => {
        setTheatreSelect({ ...theatreSelect, value: 'Chọn cụm rạp', disabled: true });
    };

    const enableMultiplexSelect = () => {
        setMultiplexSelect({ ...multiplexSelect, disabled: false });
    };
    const enableTheatreSelect = () => {
        setTheatreSelect({ ...theatreSelect, disabled: false });
    };

    function disabledDate(current: any) {
        return current && current < moment().endOf('day');
    }

    const handleGetShowTimes = () => {
        dispatch(getShowTimeAction(multiplexSelect.value, theatreSelect.value));
    };
    return (
        <ContentYDTBlock className="mt-1">
            <BlockTitle>Đặt vé</BlockTitle>
            <button onClick={handleGetShowTimes}>get show time</button>
            <div className="grid gap-0.5 tablet:grid-cols-4 mb-1">
                <Select
                    showSearch
                    optionFilterProp="children"
                    onChange={handleChangePhim}
                    {...filmSelect}
                >
                    {listFilm.map((item: IPhim, key: number) => (
                        <Option key={'phim-select-' + key} value={item.maPhim!}>
                            {item.tenPhim}
                        </Option>
                    ))}
                </Select>
                <Select showSearch onChange={handleChangeMultiplex} {...multiplexSelect}>
                    {listMultiplexByFilm.map((item: IMultiplex, key: number) => (
                        <Option key={'multiplex-' + key} value={item.maHeThongRap!}>
                            {item.tenHeThongRap}
                        </Option>
                    ))}
                </Select>
                <Select showSearch {...theatreSelect} onChange={handleChangeTheatre}>
                    {listTheatre.map((item: ITheatre, key: number) => (
                        <Option key={'multiplex-' + key} value={item.maCumRap}>
                            {item.tenCumRap}
                        </Option>
                    ))}
                </Select>
                <DatePicker defaultValue={moment()} disabledDate={disabledDate} />
            </div>

            <div className="grid grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-6 gap-0.5">
                <Button type="dashed">13:20</Button>
                <Button type="dashed">16:40</Button>
                <Button type="dashed">20:05</Button>
                <Button type="dashed">21:05</Button>
                <Button type="dashed">23:05</Button>
                <Button type="dashed">11:05</Button>
            </div>
            {/* </div> */}
        </ContentYDTBlock>
    );
};

export default CinemaBlock;

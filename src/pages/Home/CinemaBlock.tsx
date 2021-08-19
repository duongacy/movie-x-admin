import { Select, Button } from 'antd';
import BlockTitle from '../../components/ContentYDT/BlockTitle';
import ContentYDTBlock from '../../components/ContentYDT/ContentYDTBlock';
import { DatePicker, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { IRootState } from '../../store/configureStore';
import { getAllPhimAction } from '../../store/phim/phimActions';
import { IPhim } from '../../common/formatTypes/phim/Phim';

const { Option } = Select;
const { RangePicker } = DatePicker;

interface IProps {}

const CinemaBlock = (props: IProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPhimAction());
    }, []);

    const { danhSachPhim } = useSelector((root: IRootState) => root.phimStore);

    function onChange() {
        console.log(`aaa`);
    }

    return (
        <ContentYDTBlock className="mt-1">
            <BlockTitle>Bộ lọc</BlockTitle>
            {/* <div className="grid gap-1 tablet:grid-cols-2"> */}
            <div className="grid gap-0.5 tablet:grid-cols-3 mb-1">
                <Select
                    showSearch
                    placeholder="Chọn phim"
                    optionFilterProp="children"
                    onChange={onChange}
                >
                    {danhSachPhim.map((item: IPhim, key: number) => (
                        <Option key={'phim-select-' + key} value="jack">
                            {item.tenPhim}
                        </Option>
                    ))}
                </Select>
                <Select
                    showSearch
                    placeholder="Chọn rạp"
                    optionFilterProp="children"
                    onChange={onChange}
                >
                    <Option value="jack">BHD</Option>
                    <Option value="lucy">Galaxy</Option>
                    <Option value="tom">Lotte</Option>
                </Select>
                <RangePicker />
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

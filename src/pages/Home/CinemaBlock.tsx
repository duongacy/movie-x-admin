import { Select, Button } from 'antd';
import BlockTitle from '../../components/ContentYDT/BlockTitle';
import ContentYDTBlock from '../../components/ContentYDT/ContentYDTBlock';

const { Option } = Select;

interface IProps {}

const CinemaBlock = (props: IProps) => {
    function onChange() {
        console.log(`aaa`);
    }
    return (
        <ContentYDTBlock className="mt-1">
            <BlockTitle>Chọn suất chiếu</BlockTitle>
            <div className="grid gap-1 tablet:grid-cols-2">
                <div className="grid gap-0.5">
                    <Select
                        showSearch
                        placeholder="Chọn cụm rạp"
                        optionFilterProp="children"
                        onChange={onChange}
                    >
                        <Option value="jack">BHD</Option>
                        <Option value="lucy">Galaxy</Option>
                        <Option value="tom">Lotte</Option>
                    </Select>
                    <Select
                        showSearch
                        placeholder="Chọn rạp"
                        optionFilterProp="children"
                        onChange={onChange}
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </div>

                <div className="grid grid-cols-3 gap-0.5">
                    <Button type="dashed">13:20</Button>
                    <Button type="dashed">16:40</Button>
                    <Button type="dashed">20:05</Button>
                    <Button type="dashed">21:05</Button>
                    <Button type="dashed">23:05</Button>
                    <Button type="dashed">11:05</Button>
                </div>
            </div>
        </ContentYDTBlock>
    );
};

export default CinemaBlock;

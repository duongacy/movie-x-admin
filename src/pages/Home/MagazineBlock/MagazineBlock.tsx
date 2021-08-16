import { Tabs } from 'antd';
import BlockTitle from '../../../components/ContentYDT/BlockTitle';
import ContentYDTBlock from '../../../components/ContentYDT/ContentYDTBlock';
import { Card } from 'antd';
import News from './News';

interface IProps {}

const NewsBlock = (props: IProps) => {
    const { Meta } = Card;
    const { TabPane } = Tabs;
    const onChangeTabs = (key: string) => {
        console.log(key);
    };
    return (
        <ContentYDTBlock className="my-4 news-block" id="news-block">
            <Tabs defaultActiveKey="1" onChange={onChangeTabs} type="card" tabBarGutter={25}>
                <TabPane
                    tab={<BlockTitle className="text-light tab-title">Điện ảnh 24h</BlockTitle>}
                    key="1"
                >
                    <News />
                </TabPane>
                <TabPane
                    tab={<BlockTitle className="text-light tab-title">Review</BlockTitle>}
                    key="2"
                >
                    Content of Tab Pane 2
                </TabPane>
                <TabPane
                    tab={<BlockTitle className="text-light tab-title">Khuyến mãi</BlockTitle>}
                    key="3"
                >
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </ContentYDTBlock>
    );
};

export default NewsBlock;

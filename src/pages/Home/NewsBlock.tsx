import { Tabs } from 'antd';
import BlockTitle from '../../components/ContentYDT/BlockTitle';
import ContentYDTBlock from '../../components/ContentYDT/ContentYDTBlock';
import { Card } from 'antd';

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
                    <div className="grid tablet:grid-cols-2 gap-0.5 tablet:gap-1 laptop:gap-2 text-light">
                        <NewsItem skew="x" />
                        <NewsItem skew="y" />
                    </div>
                    <div className="grid tablet:grid-cols-3 gap-0.5 tablet:gap-1 laptop:gap-2 text-light mt-2">
                        <div className="col-span-2 grid grid-cols-2 gap-0.5">
                            <NewsItem skew="y" />
                            <NewsItem skew="x" />
                        </div>
                        <div className="bg-light"></div>
                    </div>
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

interface INewsItemProps {
    skew?: string;
}
const NewsItem: React.FC<INewsItemProps> = ({ children, skew }) => {
    return (
        <a href="#" className="transform text-dark hover:rotate-3 hover:text-primary-dark duration-500">
            <div className={`aspect-w-16 aspect-h-9 transform skew-${skew}-3`}>
                <img src="images/films/film-block-22.jpg" alt="" />
            </div>
            <h6 className="text-10 py-0.5 bg-light p-1">
                Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất
            </h6>
        </a>
    );
};

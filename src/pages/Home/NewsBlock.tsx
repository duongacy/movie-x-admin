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
                        <NewsItem
                            skew="x"
                            imgSrc="images/films/film-block-23.jpg"
                            title="Người dân phải khai báo 'di biến động' khi đi qua chốt ở TP.HCM"
                            link="https://zingnews.vn/nguoi-dan-phai-khai-bao-di-bien-dong-khi-di-qua-chot-o-tphcm-post1251048.html"
                        />
                        <NewsItem
                            skew="y"
                            imgSrc="images/films/film-block-24.jpg"
                            title="Công an ở TP.HCM gài bẫy tài xế để phạt tiền là sai sự thật"
                            link="https://zingnews.vn/cong-an-o-tphcm-gai-bay-tai-xe-de-phat-tien-la-sai-su-that-post1250732.html"
                        />
                    </div>
                    <div className="grid tablet:grid-cols-3 gap-0.5 tablet:gap-1 laptop:gap-2 text-light mt-2">
                        <div className="col-span-2 grid grid-cols-2 gap-0.5">
                            <NewsItem
                                skew="y"
                                imgSrc="images/films/film-block-25.jpg"
                                title="4 người dùng giấy xét nghiệm Covid-19 giả để qua chốt kiểm dịch"
                                link="https://zingnews.vn/cong-an-o-tphcm-gai-bay-tai-xe-de-phat-tien-la-sai-su-that-post1250732.html"
                            />
                            <NewsItem
                                skew="x"
                                imgSrc="images/films/film-block-26.jpg"
                                title="Mua giấy xét nghiệm Covid-19 giả để qua chốt kiểm dịch "
                                link="https://zingnews.vn/cong-an-o-tphcm-gai-bay-tai-xe-de-phat-tien-la-sai-su-that-post1250732.html"
                            />
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
    imgSrc?: string;
    title?: string;
    link?: string;
}
const NewsItem: React.FC<INewsItemProps> = ({
    children,
    skew = 'x',
    imgSrc = '',
    title = '',
    link = '',
}) => {
    return (
        <a
            href="#"
            className="transform text-dark hover:rotate-3 hover:text-primary-dark duration-500"
        >
            <div className={`aspect-w-16 aspect-h-9 transform skew-${skew}-3`}>
                <img src={imgSrc} alt="" />
            </div>
            <h6 className="text-10 py-0.5 bg-light p-1">{title}</h6>
        </a>
    );
};

import React, { Fragment } from 'react';
const News = () => {
    return (
        <Fragment>
            <div className="grid gap-0.5 tablet:grid-cols-3 tablet:gap-1 laptop:gap-2 text-light mt-2">
                <div className="hidden tablet:grid col-span-2 laptop:grid-cols-2 gap-0.5">
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
                    <NewsItem
                        skew="x"
                        imgSrc="images/films/film-block-26.jpg"
                        title="Mua giấy xét nghiệm Covid-19 giả để qua chốt kiểm dịch "
                        link="https://zingnews.vn/cong-an-o-tphcm-gai-bay-tai-xe-de-phat-tien-la-sai-su-that-post1250732.html"
                    />
                    <NewsItem
                        skew="x"
                        imgSrc="images/films/film-block-26.jpg"
                        title="Mua giấy xét nghiệm Covid-19 giả để qua chốt kiểm dịch "
                        link="https://zingnews.vn/cong-an-o-tphcm-gai-bay-tai-xe-de-phat-tien-la-sai-su-that-post1250732.html"
                    />
                </div>
                <div className="flex flex-col gap-0.5">
                    {newsMenuList.map((item, key) => (
                        <NewsMenuItem imgSrc={item.imgSrc} name={item.name} />
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default News;

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
        <div className="transform text-dark hover:rotate-1 hover:text-primary-dark duration-300 cursor-pointer">
            <div className={`aspect-w-16 aspect-h-9 transform skew-${skew}-1 `}>
                <img src={imgSrc} alt="" />
            </div>
            <h6 className="text-10 py-0.5 bg-light p-1">{title}</h6>
        </div>
    );
};

interface INewsMenuItemProps {
    imgSrc?: string;
    name?: string;
}
const NewsMenuItem: React.FC<INewsMenuItemProps> = ({ imgSrc, name }) => {
    return (
        <div className="flex gap-1 items-center cursor-pointer transform duration-500 hover:translate-x-0.5 text-light hover:text-primary-dark hover:bg-light">
            <img src={imgSrc} className="w-4.5 h-3.5 object-center news-item-img" alt="" />
            <h6 className="">{name}</h6>
        </div>
    );
};

const newsMenuList = [//lấy từ API
    {
        name: 'Một số người bám vào máy bay Mỹ cất cánh ở Kabul',
        imgSrc: 'images/films/film-block-10.jpg',
    },
    {
        name: 'Chủ tịch TP.HCM: F0 trong cộng đồng có dấu hiệu tăng',
        imgSrc: 'images/films/film-block-11.jpg',
    },
    {
        name: 'Đường phố Kabul vắng tanh giữa lúc sân bay hỗn loạn',
        imgSrc: 'images/films/film-block-12.jpg',
    },
    {
        name: 'Đường phố Kabul vắng tanh giữa lúc sân bay hỗn loạn',
        imgSrc: 'images/films/film-block-13.jpg',
    },
];

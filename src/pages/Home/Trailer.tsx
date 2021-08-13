import React, { useState } from 'react';
import { Carousel, Modal } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

interface ITrailerProps {}

const Trailer: React.FC<ITrailerProps> = ({}) => {
    return (
        <Carousel className="trailer">
            <TrailerItem
                bgSrc="images/dai-tham-hoa-nui-bakedu.jpg"
                film="Evil Expeller"
                time="02.08.2021"
                trailerLink="https://www.youtube.com/embed/seeqp5q3Q88"
            />
            <TrailerItem
                bgSrc="images/ve-si-sat-thu.jpg"
                film="Demon Hunter"
                time="02.09.2021"
                trailerLink="https://www.youtube.com/embed/seeqp5q3Q88"
            />
            <TrailerItem
                bgSrc="images/dai-tham-hoa-nui-bakedu.jpg"
                film="Evil Expeller"
                time="02.08.2021"
                trailerLink="https://www.youtube.com/embed/seeqp5q3Q88"
            />
        </Carousel>
    );
};
export default Trailer;

interface ITrailerItemProps {
    bgSrc: string;
    film: string;
    time: string;
    trailerLink: string;
}
const TrailerItem: React.FC<ITrailerItemProps> = ({ bgSrc, film, time, trailerLink }) => {
    const [isTrailerOpen, setIsTrailerOpen] = useState<boolean>(false);
    const handleToggleTrailer = (value: boolean) => {
        setIsTrailerOpen(value);
    };
    return (
        <div>
            <div
                style={{ backgroundImage: `url('${bgSrc}')` }}
                className="bg-no-repeat bg-cover relative aspect-w-14 aspect-h-15 tablet:aspect-h-10 laptop:aspect-h-8 desktop:aspect-h-6"
            >
                <div className="px-1 tablet:px-2 laptop:px-3 text-white h-full flex flex-col items-start justify-end gap-1 pb-4 desktop:pb-5">
                    <h6 className="text-25 laptop:text-40 font-800 max-w-27">{film}</h6>
                    <h6 className="italic text-12 laptop:text-15 text-p-text font-700 bg-white px-1">{time}</h6>
                    <h6 className="text-12 laptop:text-15">Just Arrive on MovieYDT</h6>
                </div>
                <div
                    className="absolute top-0 left-0 bottom-0 right-0 z-10 flex items-center justify-center group cursor-pointer"
                    onClick={() => {
                        handleToggleTrailer(!isTrailerOpen);
                    }}
                >
                    <div className="absolute top-0 left-0 bottom-0 right-0 bg-white opacity-0 group-hover:opacity-20"></div>
                    <PlayCircleOutlined className="text-50 text-s-dark cursor-pointer opacity-40 duration-300 transform group-hover:scale-125 group-hover:opacity-100" />
                </div>
            </div>
            <Modal
                title={<h6 className="text-p-text font-600 text-18 uppercase italic">{film}</h6>}
                visible={isTrailerOpen}
                onCancel={() => handleToggleTrailer(false)}
                footer={false}
                width="80%"
            >
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src={trailerLink}
                        title="YouTube video player"
                        frameBorder={1}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        height="100%"
                    />
                </div>
            </Modal>
        </div>
    );
};

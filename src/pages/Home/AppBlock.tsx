import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import React from 'react';
import ContentYDTBlock from '../../components/ContentYDT/ContentYDTBlock';
import { Carousel } from 'antd';

interface IProps {}

const AppBlock = (props: IProps) => {
    return (
        <div className=" relative">
            <div className="w-full h-full bg-gradient-to-r from-primary-dark to-neutral-dark opacity-40 absolute top-0 left-0 bottom-0 right-0"></div>
            <ContentYDTBlock className="text-light relative grid gap-2 tablet:grid-cols-3 py-5 ">
                <div className="flex flex-col justify-center tablet:col-span-2  text-center">
                    <h6 className="text-17 mb-1">Ứng dụng tiện lợi dành cho người yêu điện ảnh</h6>
                    <h6 className="text-10 font-300 mb-1">
                        Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà
                        hấp dẫn.
                    </h6>
                    <h6 className="text-13 mb-1">Tải app ngay</h6>
                    <div className="flex gap-2 justify-center">
                        <button>
                            <AndroidOutlined className="text-light text-35 hover:text-android duration-500" />
                        </button>
                        <button>
                            <AppleOutlined className="text-light text-35 hover:text-ios duration-500" />
                        </button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative text-dark bg-contain bg-no-repeat w-11 h-22">
                        <img
                            src="images/mobile.png"
                            className="w-full h-full absolute top-0 left-0 bottom-0 right-0"
                            alt=""
                        />
                        <div className="absolute top-0.5 left-4px right-4px bottom-0.5 rounded-xl overflow-hidden">
                            <Carousel effect="fade" dots={false} autoplay={true}>
                                <div className="h-22">
                                    <img src="images/app-1.png" className="h-full" alt="" />
                                </div>
                                <div className="h-22">
                                    <img src="images/app-2.png" className="h-full" alt="" />
                                </div>
                                <div className="h-22">
                                    <img src="images/app-3.png" className="h-full" alt="" />
                                </div>
                                <div className="h-22">
                                    <img src="images/app-4.png" className="h-full" alt="" />
                                </div>
                                
                            </Carousel>
                        </div>
                    </div>
                </div>
            </ContentYDTBlock>
        </div>
    );
};

export default AppBlock;

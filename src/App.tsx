import React from 'react';
import logo from './logo.svg';
import {Counter} from './features/counter/Counter';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
// slick
// =============

import './assets/main.css';
import {Header} from './components/Header';
import Slider from 'react-slick';
import {Carousel} from 'react-responsive-carousel';

const App: React.FC = () => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 4,
        speed: 500,
        rows: 1,
        slidesPerRow: 1,
    };

    return (
        <div className='bg-primary'>
            <div className="p-0.5 bg-dark text-white text-9 flex gap-1 justify-end items-center" >
                <a href="" className="font-bold">Tiếng Việt</a>
                <a href="">English</a>
            </div>
            <Header />
            <Carousel infiniteLoop autoPlay showThumbs={false}>
                <div className='aspect-w-16 aspect-h-7 relative'>
                    <div>
                        <h1 className='absolute z-10 text-33 laptop:text-50  font-extra-bold text-white max-w-40 text-left bottom-5 left-5'>
                            The Return of Dark Lord
                        </h1>
                    </div>
                    <img
                        src='images/watch-dogs-2-wallpaper-preview.jpg'
                        className='w-full'
                        alt=''
                    />
                </div>
                <div className='aspect-w-16 aspect-h-7'>
                    <div>
                        <h1 className='absolute z-10 text-33 laptop:text-50 font-extra-bold text-white max-w-40 text-left bottom-5 left-5'>
                            Adaptation
                        </h1>
                    </div>
                    <img
                        src='images/watch-dogs-aiden-pearce-game-2014-wallpaper-preview.jpg'
                        className='w-full'
                        alt=''
                    />
                </div>
                <div className='aspect-w-16 aspect-h-7'>
                    <div>
                        <h1 className='absolute z-10 text-33 laptop:text-50 font-extra-bold text-white max-w-40 text-left bottom-5 left-5'>
                            Watch Dogs
                        </h1>
                    </div>
                    <img
                        src='images/watch-dogs-aiden-pearce-video-games-gun-wallpaper-preview.jpg'
                        className='w-full'
                        alt=''
                    />
                </div>
            </Carousel>
            {/* filmBlock */}
            <div className='max-w-laptop mx-auto text-white'>
                <p className='mt-3 mb-0.5 flex gap-1 text-16 font-bold'>
                    Đang chiếu
                </p>
                <Slider {...settings}>
                    <div className='p-0.5 relative'>
                        <div className="absolute right-1.5 top-1 z-10 text-white text-9 font-bold">1h45m</div>
                        <img
                            src='images/rectangle-282.jpg'
                            alt=''
                            className='w-full rounded-xl'
                        />
                        <div className='p-0.5'>
                            <div className="flex gap-0.5">
                                <button className='bg-danger px-1 h-1.3 text-8 rounded-md'>G</button>
                                <p className="text-9">Trạng Tí phiêu lưu ký</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-0.5 relative'>
                        <div className="absolute right-1.5 top-1 z-10 text-white text-9 font-bold">1h45m</div>
                        <img
                            src='images/rectangle-283.jpg'
                            alt=''
                            className='w-full rounded-xl'
                        />
                        <div className='p-0.5'>
                            <div className="flex gap-0.5">
                                <button className='bg-success px-1 h-1.3 text-8 rounded-md'>G</button>
                                <p className="text-9">Lật mặt: 48h</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-0.5 relative'>
                        <div className="absolute right-1.5 top-1 z-10 text-white text-9 font-bold">1h45m</div>
                        <img
                            src='images/rectangle-284.jpg'
                            alt=''
                            className='w-full rounded-xl'
                        />
                        <div className='p-0.5'>
                            <div className="flex gap-0.5">
                                <button className='bg-warning text-black px-1 h-1.3 text-8 rounded-md'>G</button>
                                <p className="text-9">Thiên thần hộ mệnh</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-0.5 relative'>
                        <div className="absolute right-1.5 top-1 z-10 text-white text-9 font-bold">1h45m</div>
                        <img
                            src='images/rectangle-285.jpg'
                            alt=''
                            className='w-full rounded-xl'
                        />
                        <div className='p-0.5'>
                            <div className="flex gap-0.5">
                                <button className='bg-secondary px-1 h-1.3 text-8 rounded-md'>G</button>
                                <p className="text-9">Trạng Tí phiêu lưu ký</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-0.5 relative'>
                        <div className="absolute right-1.5 top-1 z-10 text-white text-9 font-bold">1h45m</div>
                        <img
                            src='images/rectangle-284.jpg'
                            alt=''
                            className='w-full rounded-xl'
                        />
                        <div className='p-0.5'>
                            <div className="flex gap-0.5">
                                <button className='bg-secondary px-1 h-1.3 text-8 rounded-md'>G</button>
                                <p className="text-9">Detective Conan</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className='max-w-laptop mx-auto text-white'>
                <p className='mt-3 mb-0.5 flex gap-1 text-16 font-bold'>
                    Sắp chiếu
                </p>
                <Slider {...settings}>
                    <div className='p-0.5 relative'>
                        <div className="absolute right-1.5 top-1 z-10 text-white text-9 font-bold">1h45m</div>
                        <img
                            src='images/rectangle-283.jpg'
                            alt=''
                            className='w-full rounded-xl'
                        />
                        <div className='p-0.5'>
                            <div className="flex gap-0.5">
                                <button className='bg-secondary px-1 h-1.3 text-8 rounded-md'>G</button>
                                <p className="text-9">Người nhân bản</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-0.5 relative'>
                        <div className="absolute right-1.5 top-1 z-10 text-white text-9 font-bold">1h45m</div>
                        <img
                            src='images/rectangle-285.jpg'
                            alt=''
                            className='w-full rounded-xl'
                        />
                        <div className='p-0.5'>
                            <div className="flex gap-0.5">
                                <button className='bg-secondary px-1 h-1.3 text-8 rounded-md'>G</button>
                                <p className="text-9">Bàn tay diệt quỷ</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-0.5 relative'>
                        <div className="absolute right-1.5 top-1 z-10 text-white text-9 font-bold">1h45m</div>
                        <img
                            src='images/rectangle-284.jpg'
                            alt=''
                            className='w-full rounded-xl'
                        />
                        <div className='p-0.5'>
                            <div className="flex gap-0.5">
                                <button className='bg-secondary px-1 h-1.3 text-8 rounded-md'>G</button>
                                <p className="text-9">Trạng Tí phiêu lưu ký</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-0.5 relative'>
                        <div className="absolute right-1.5 top-1 z-10 text-white text-9 font-bold">1h45m</div>
                        <img
                            src='images/rectangle-286.jpg'
                            alt=''
                            className='w-full rounded-xl'
                        />
                        <div className='p-0.5'>
                            <div className="flex gap-0.5">
                                <button className='bg-secondary px-1 h-1.3 text-8 rounded-md'>G</button>
                                <p className="text-9">Kẻ vô danh</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-0.5 relative'>
                        <div className="absolute right-1.5 top-1 z-10 text-white text-9 font-bold">1h45m</div>
                        <img
                            src='images/rectangle-287.jpg'
                            alt=''
                            className='w-full rounded-xl'
                        />
                        <div className='p-0.5'>
                            <div className="flex gap-0.5">
                                <button className='bg-secondary px-1 h-1.3 text-8 rounded-md'>G</button>
                                <p className="text-9">Hung thần trắng</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default App;

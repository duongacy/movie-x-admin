import React from 'react';
import Slider from 'react-slick';

interface IProps {}

const FilmBlock = (props: IProps) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };
    return (
        <div className="px-1 tablet:px-3 pt-1 pb-3 text-s-text film-block max-w-desktop laptop:mx-auto">
            <div className="mt-1">
                <h6 className="text-15 laptop:text-18 font-600 mb-0.5">Đang chiếu</h6>
                <Slider {...settings} className="-ml-0.5">
                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-1.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-2.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-3.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-4.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-5.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-6.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-7.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-8.jpg" alt="" />
                        </div>
                    </a>
                </Slider>
            </div>
            <div className="mt-1">
                <h6 className="text-15 laptop:text-18 font-600 mb-0.5">Sắp chiếu</h6>
                <Slider {...settings} className="-ml-0.5">
                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-13.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-14.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-15.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-16.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-17.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-18.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-19.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12">
                            <img src="images/films/film-block-20.jpg" alt="" />
                        </div>
                    </a>
                </Slider>
            </div>
        </div>
    );
};

export default FilmBlock;

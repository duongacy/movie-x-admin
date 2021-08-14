import Slider from 'react-slick';
import BlockTitle from '../../components/ContentYDT/BlockTitle';
import ContentYDTBlock from '../../components/ContentYDT/ContentYDTBlock';

interface IProps {}

const FilmBlock = (props: IProps) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        initialSlide: 0,
        centerPadding: '100px',
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
        <ContentYDTBlock className="film-block">
            <div className="mt-1">
                <BlockTitle>Đang chiếu</BlockTitle>
                <Slider {...settings} className="flex gap-1">
                    <a href="#" className="transform hover:rotate-1">
                        <div className="h-5 aspect-w-16 aspect-h-9 laptop:aspect-h-12 transform skew-x-6 ">
                            <img src="images/films/film-block-1.jpg" className="w-full" alt="" />
                        </div>
                    </a>

                    <a href="#" className="transform hover:rotate-1">
                        <div className="h-5 aspect-w-16 aspect-h-9 laptop:aspect-h-12  transform skew-x-6">
                            <img src="images/films/film-block-2.jpg" className="w-full" alt="" />
                        </div>
                    </a>

                    <a href="#" className="transform hover:rotate-1">
                        <div className="h-5 aspect-w-16 aspect-h-9 laptop:aspect-h-12  transform skew-x-1">
                            <img src="images/films/film-block-3.jpg" className="w-full" alt="" />
                        </div>
                    </a>

                    <a href="#" className="transform hover:rotate-1">
                        <div className="h-5 aspect-w-16 aspect-h-9 laptop:aspect-h-12  transform skew-x-1">
                            <img src="images/films/film-block-4.jpg" className="w-full" alt="" />
                        </div>
                    </a>

                    <a href="#" className="transform hover:rotate-1">
                        <div className="h-5 aspect-w-16 aspect-h-9 laptop:aspect-h-12  transform skew-x-1">
                            <img src="images/films/film-block-5.jpg" className="w-full" alt="" />
                        </div>
                    </a>

                    <a href="#" className="transform hover:rotate-1">
                        <div className="h-5 aspect-w-16 aspect-h-9 laptop:aspect-h-12  transform skew-x-1">
                            <img src="images/films/film-block-6.jpg" className="w-full" alt="" />
                        </div>
                    </a>

                    <a href="#" className="transform hover:rotate-1">
                        <div className="h-5 aspect-w-16 aspect-h-9 laptop:aspect-h-12  transform skew-x-1">
                            <img src="images/films/film-block-7.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#" className="transform hover:rotate-1">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12  transform skew-x-1">
                            <img src="images/films/film-block-8.jpg" alt="" />
                        </div>
                    </a>
                </Slider>
            </div>
            <div className="mt-1">
                <BlockTitle>Sắp chiếu</BlockTitle>
                <Slider {...settings} className="gap-1">
                    <a href="#" className="transform hover:-rotate-1">
                        <div className="h-5 aspect-w-16 aspect-h-9 laptop:aspect-h-12  transform skew-y-1">
                            <img src="images/films/film-block-13.jpg" className="w-full" alt="" />
                        </div>
                    </a>

                    <a href="#" className="transform hover:-rotate-1">
                        <div className="h-5 aspect-w-16 aspect-h-9 laptop:aspect-h-12 transform skew-y-1">
                            <img src="images/films/film-block-14.jpg" className="w-full" alt="" />
                        </div>
                    </a>

                    <a href="#" className="transform hover:-rotate-1">
                        <div className="h-5 aspect-w-16 aspect-h-9 laptop:aspect-h-12 transform skew-y-1">
                            <img src="images/films/film-block-15.jpg" className="w-full" alt="" />
                        </div>
                    </a>

                    <a href="#" className="transform hover:-rotate-1">
                        <div className="h-5 aspect-w-16 aspect-h-9 laptop:aspect-h-12 transform skew-y-1">
                            <img src="images/films/film-block-16.jpg" className="w-full" alt="" />
                        </div>
                    </a>

                    <a href="#" className="transform hover:-rotate-1">
                        <div className="h-5 aspect-w-16 aspect-h-9 laptop:aspect-h-12 transform skew-y-1">
                            <img src="images/films/film-block-17.jpg" className="w-full" alt="" />
                        </div>
                    </a>

                    <a href="#" className="transform hover:-rotate-1">
                        <div className="h-5 aspect-w-16 aspect-h-9 laptop:aspect-h-12 transform skew-y-1">
                            <img src="images/films/film-block-6.jpg" className="w-full" alt="" />
                        </div>
                    </a>

                    <a href="#" className="transform hover:-rotate-1">
                        <div className="h-5 aspect-w-16 aspect-h-9 laptop:aspect-h-12 transform skew-y-1">
                            <img src="images/films/film-block-7.jpg" alt="" />
                        </div>
                    </a>

                    <a href="#" className="transform hover:-rotate-1">
                        <div className="h-5 bg-p-text aspect-w-16 aspect-h-9 laptop:aspect-h-12 transform skew-y-1">
                            <img src="images/films/film-block-8.jpg" alt="" />
                        </div>
                    </a>
                </Slider>
            </div>
        </ContentYDTBlock>
    );
};

export default FilmBlock;

import Slider from 'react-slick';
import BlockTitle from '../../components/ContentYDT/BlockTitle';
import ContentYDTBlock from '../../components/ContentYDT/ContentYDTBlock';

interface IProps {}

const listDangChieu = [
    //list nay se lay tu API
    {
        name: 'Phim 1',
        imgSrc: 'images/films/film-block-1.jpg',
    },
    {
        name: 'Phim 2',
        imgSrc: 'images/films/film-block-2.jpg',
    },
    {
        name: 'Phim 3',
        imgSrc: 'images/films/film-block-3.jpg',
    },
    {
        name: 'Phim 4',
        imgSrc: 'images/films/film-block-4.jpg',
    },
    {
        name: 'Phim 5',
        imgSrc: 'images/films/film-block-5.jpg',
    },
    {
        name: 'Phim 6',
        imgSrc: 'images/films/film-block-6.jpg',
    },
    {
        name: 'Phim 7',
        imgSrc: 'images/films/film-block-7.jpg',
    },
];
const listSapChieu = [
    //list nay se lay tu API
    {
        name: 'Phim 1',
        imgSrc: 'images/films/film-block-8.jpg',
    },
    {
        name: 'Phim 2',
        imgSrc: 'images/films/film-block-9.jpg',
    },
    {
        name: 'Phim 3',
        imgSrc: 'images/films/film-block-10.jpg',
    },
    {
        name: 'Phim 4',
        imgSrc: 'images/films/film-block-11.jpg',
    },
    {
        name: 'Phim 5',
        imgSrc: 'images/films/film-block-12.jpg',
    },
    {
        name: 'Phim 6',
        imgSrc: 'images/films/film-block-13.jpg',
    },
    {
        name: 'Phim 7',
        imgSrc: 'images/films/film-block-14.jpg',
    },
];

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
                    {listDangChieu.map((item, key) => (
                        <FilmBlockItem imgSrc={item.imgSrc} skew={key % 2 === 0 ? 'x' : 'y'} />
                    ))}
                </Slider>
            </div>
            <div className="mt-1">
                <BlockTitle>Sắp chiếu</BlockTitle>
                <Slider {...settings} className="gap-1">
                    {listSapChieu.map((item, key) => (
                        <FilmBlockItem imgSrc={item.imgSrc} skew={key % 2 === 0 ? 'x' : 'y'} />
                    ))}
                </Slider>
            </div>
        </ContentYDTBlock>
    );
};

export default FilmBlock;

interface IFilmBlockItemProps {
    imgSrc?: string;
    skew?: string;
}
const FilmBlockItem: React.FC<IFilmBlockItemProps> = ({ imgSrc, skew }) => (
    <div
        className={`h-5 aspect-w-16 aspect-h-9 laptop:aspect-h-12 skew-${skew}-1 transform hover:rotate-1 duration-300 cursor-pointer film-item-clip`}
    >
        <img src={imgSrc} className="w-full" alt="" />
    </div>
);

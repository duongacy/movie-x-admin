import React from 'react';
import Trailer from './Trailer';
import FilmBlock from './FilmBlock';
import CinemaBlock from './CinemaBlock';
import NewsBlock from './MagazineBlock/MagazineBlock';
import AppBlock from './AppBlock';
import {
    layThongTinHeThongRapService,
    layThongTinCumRapTheoHeThongService,
    layThongTinLichChieuHeThongRapService,
    layThongTinLichChieuPhimService,
} from '../../services/quanLyRap/quanLyRap.service';
import {
    layDanhSachBannerService,
    layDanhSachPhimService,
    layDanhSachPhimPhanTrangService,
    layDanhSachPhimTheoNgayService,
} from '../../services/quanLyPhim/quanLyPhim.service';

const HomePage = () => {
    layThongTinHeThongRapService('MegaGS');
    layThongTinLichChieuHeThongRapService('MegaGS');
    layThongTinCumRapTheoHeThongService('BHDStar');
    layThongTinLichChieuPhimService(1282);
    layDanhSachBannerService();
    layDanhSachPhimService('Ban tay diet quy'); //co tham so
    layDanhSachPhimService(); //khong tham so

    layDanhSachPhimPhanTrangService(1, 10);
    layDanhSachPhimTheoNgayService();
    return (
        <HomePageWrapper>
            <Trailer />
            <FilmBlock />
            <CinemaBlock />
            <NewsBlock />
            <AppBlock />
        </HomePageWrapper>
    );
};
export default HomePage;

interface IHomePageWrapperProps {}
const HomePageWrapper: React.FC<IHomePageWrapperProps> = ({ children }) => {
    return (
        <div className=" bg-gradient-to-b from-neutral-dark to-neutral flex-auto overflow-hidden">
            {children}
        </div>
    );
};

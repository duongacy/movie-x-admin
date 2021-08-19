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
import {
    layDanhSachLoaiNguoiDungService,
    layDanhSachNguoiDungPhanTrangService,
    layDanhSachNguoiDungService,
    timKiemNguoiDungPhanTrangService,
    timKiemNguoiDungService,
} from '../../services/quanLyNguoiDung/quanLyNguoiDung.service';
import { layDanhSachPhongVeService } from '../../services/quanLyDatVe/layDanhSachPhongVe';

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
    layDanhSachLoaiNguoiDungService();
    layDanhSachNguoiDungService('123');

    layDanhSachNguoiDungPhanTrangService();
    timKiemNguoiDungService('123a');
    timKiemNguoiDungPhanTrangService('1');
    layDanhSachPhongVeService(15236);
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

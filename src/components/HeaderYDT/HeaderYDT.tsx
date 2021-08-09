import ChangeThemeSwitch from './ChangeThemeSwitch/ChangeThemeSwitch';
import ProvinceSelect from './ProvinceSelect/ProvinceSelect';

import React, { Fragment } from 'react';
import { Header } from 'antd/lib/layout/layout';
import { Menu } from 'antd';

interface Props {}

const HeaderYDT: React.FC = (props) => {
    return (
        <Fragment>
            <div className="py-4px flex justify-end px-1 gap-2 items-center">
                <ProvinceSelect />
                <ChangeThemeSwitch />
            </div>
            <Header className="h-5 bg-primary flex items-baseline gap-3 justify-between ">
                <a
                    className="text-txt-primary text-20 font-semibold  opacity-80 hover:opacity-100 hover:text-txt-primary"
                    style={{ lineHeight: '5rem' }}
                >
                    MovieX
                </a>

                <ul className="inline-flex gap-1.5 text-12">
                    <li>
                        <a className="text-txt hover:text-txt">Trang chủ</a>
                    </li>
                    <li>
                        <a className="text-txt opacity-60 hover:text-txt hover:opacity-80">Lịch chiếu</a>
                    </li>
                    <li>
                        <a className="text-txt opacity-60 hover:text-txt hover:opacity-80">Cụm rạp</a>
                    </li>
                    <li>
                        <a className="text-txt opacity-60 hover:text-txt hover:opacity-80">Tin tức</a>
                    </li>
                    <li>
                        <a className="text-txt opacity-60 hover:text-txt hover:opacity-80">Ứng dụng</a>
                    </li>
                </ul>
                <form className="inline-flex gap-1.5 text-12">
                    <a className="text-txt opacity-60 hover:text-txt hover:opacity-80">Đăng nhập</a>
                </form>
            </Header>
        </Fragment>
    );
};

export default HeaderYDT;

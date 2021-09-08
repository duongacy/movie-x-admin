import React from 'react';
import { Layout, Menu, Button } from 'antd';
import {
    YoutubeOutlined,
    UserOutlined,
    CalendarOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DesktopOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import '../assets/admin.scss';
import { Link, useLocation } from 'react-router-dom';
import { AdminProvider } from '../contexts/AdminContext';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../store/account/accountActions';
import { useTranslation } from 'react-i18next';

const { Header, Content, Sider } = Layout;

interface IAdminTemplateProps {}

const AdminTemplate: React.FC<IAdminTemplateProps> = ({ children }) => {
    const { t, i18n } = useTranslation('common');
    const location = useLocation();
    const { userInfo } = useSelector((state: any) => state.accountStore);
    const { taiKhoan } = userInfo || '';

    const [collapse, setCollapse] = useState(false);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutAction());
    };
    const toggle = () => {
        setCollapse(!collapse);
    };
    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };
    return (
        <AdminProvider>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapse}>
                    <div className="logo">{t('fish')} {taiKhoan}</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
                        <Menu.Item key="/" icon={<DesktopOutlined />}>
                            <Link to="/">Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key="/admin/film-mgmt" icon={<YoutubeOutlined />}>
                            <Link to="/admin/film-mgmt">Film management</Link>
                        </Menu.Item>
                        <Menu.Item key="/admin/user-mgmt" icon={<UserOutlined />}>
                            <Link to="/admin/user-mgmt">User management</Link>
                        </Menu.Item>
                        <Menu.Item key="/admin/show-time-mgmt" icon={<CalendarOutlined />}>
                            <Link to="/admin/show-time-mgmt"> Show times management</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background flex items-center justify-between"
                        style={{ padding: 0 }}
                    >
                        {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                        <div>
                            <Button onClick={handleLogout} className="mr-1">
                                Đăng xuất
                            </Button>
                            <Button onClick={() => handleChangeLanguage('en')} className="mr-1">
                                English
                            </Button>
                            <Button onClick={() => handleChangeLanguage('vi')} className="mr-1">
                                Tiếng Việt
                            </Button>
                        </div>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </AdminProvider>
    );
};

export default AdminTemplate;

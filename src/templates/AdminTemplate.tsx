import React from 'react';
import { Layout, Menu, Button, Radio, RadioChangeEvent } from 'antd';
import {
    YoutubeOutlined,
    UserOutlined,
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
    const { t, i18n } = useTranslation(['common']);
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
    const handleChangeLanguage = (event: RadioChangeEvent) => {
        const { value } = event.target;
        i18n.changeLanguage(value);
    };

    return (
        <AdminProvider>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapse}>
                    <div className="logo">
                        {t('common:hello')} {taiKhoan}
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
                        <Menu.Item key="/" icon={<DesktopOutlined />}>
                            <Link to="/">{t('common:dashboard')}</Link>
                        </Menu.Item>
                        <Menu.Item key="/admin/film-mgmt" icon={<YoutubeOutlined />}>
                            <Link to="/admin/film-mgmt">{t('common:film-management')}</Link>
                        </Menu.Item>
                        <Menu.Item key="/admin/user-mgmt" icon={<UserOutlined />}>
                            <Link to="/admin/user-mgmt">{t('common:user-management')}</Link>
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
                            <Radio.Group
                                onChange={handleChangeLanguage}
                                defaultValue={i18n.language}
                            >
                                <Radio value="en">English</Radio>
                                <Radio value="vi">Tiếng Việt</Radio>
                            </Radio.Group>
                            <Button onClick={handleLogout} className="mr-4 w-32" >
                                {t('common:logout')}
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

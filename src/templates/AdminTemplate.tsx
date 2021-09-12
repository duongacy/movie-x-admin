import React from 'react';
import { Layout, Menu, Breadcrumb, Button, Radio, RadioChangeEvent } from 'antd';
import { YoutubeOutlined, UserOutlined, DesktopOutlined } from '@ant-design/icons';
import { useState } from 'react';
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
            <Layout style={{ minHeight: '100vh' }}>
                <Header
                    className="header"
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <div
                        className="logo"
                        style={{
                            minWidth: '120px',
                            height: '31px',
                            lineHeight: '31px',
                            background: '#fff',
                            borderRadius: '6px',
                            margin: '16px 28px 16px 0',
                            padding: '0 10px',
                            float: 'left',
                        }}
                    >
                        {t('common:hello')} {taiKhoan}
                    </div>
                    <div>
                        <Radio.Group onChange={handleChangeLanguage} defaultValue={i18n.language}>
                            <Radio value="en" style={{ color: '#fff' }}>
                                English
                            </Radio>
                            <Radio value="vi" style={{ color: '#fff' }}>
                                Tiếng Việt
                            </Radio>
                        </Radio.Group>
                        <Button onClick={handleLogout} style={{ minWidth: '150px' }}>
                            {t('common:logout')}
                        </Button>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[location.pathname]}
                            style={{ height: '100%', borderRight: 0 }}
                        >
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
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: '280',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </AdminProvider>
    );
};

export default AdminTemplate;

import React, { useEffect } from 'react';
import { Layout, Menu, Breadcrumb, Button, Skeleton } from 'antd';
import { YoutubeOutlined, UserOutlined, CalendarOutlined, BookOutlined } from '@ant-design/icons';
import { useState } from 'react';
import '../assets/admin.scss';
import { Link } from 'react-router-dom';
import { AdminProvider } from '../contexts/AdminContext';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../store/account/accountActions';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface IAdminTemplateProps {
    breadCumName?: string;
}

const AdminTemplate: React.FC<IAdminTemplateProps> = ({ breadCumName, children }) => {
    const { userInfo } = useSelector((state: any) => state.accountStore);
    const { taiKhoan } = userInfo || '';

    useEffect(() => {
        console.log('ten tai khoan:', taiKhoan);
    }, [userInfo]);
    const [collapse, setCollapse] = useState(false);
    const dispatch = useDispatch();
    const onCollapse = () => {
        setCollapse(!collapse);
    };
    const handleLogout = () => {
        dispatch(logoutAction());
    };
    return (
        <AdminProvider>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapse} onCollapse={onCollapse}>
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="/" style={{ backgroundColor: 'red' }}>
                            <Link to="/"></Link>
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
                        <Menu.Item key="/admin/ticket-mgmt" icon={<BookOutlined />}>
                            <Link to="/admin/ticket-mgmt"> Ticket management</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="site-layout">
                    <Header className="site-layout-background flex justify-end items-center gap-1 p-0">
                        <h6>Xin chào {taiKhoan}</h6>
                        <Button onClick={handleLogout}>Logout</Button>
                    </Header>

                    <Content style={{ margin: '0 16px' }}>
                        {/* <Skeleton loading={loading}> */}
                        {children}
                        {/* </Skeleton> */}
                    </Content>

                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </AdminProvider>
    );
};

export default AdminTemplate;

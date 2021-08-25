import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { YoutubeOutlined, UserOutlined, CalendarOutlined, BookOutlined } from '@ant-design/icons';
import { useState } from 'react';
import '../assets/admin.scss';
import { Link } from 'react-router-dom';
import { AdminProvider } from '../contexts/AdminContext';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface IAdminTemplateProps {
    breadCumName?: string;
}

const AdminTemplate: React.FC<IAdminTemplateProps> = ({ breadCumName, children }) => {
    const [collapse, setCollapse] = useState(false);
    const onCollapse = () => {
        setCollapse(!collapse);
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
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>{children}</Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </AdminProvider>
    );
};

export default AdminTemplate;

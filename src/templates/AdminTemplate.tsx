import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import '../assets/admin.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface IAdminTemplateProps {
    breadCumName?: string;
}

const AdminTemplate: React.FC<IAdminTemplateProps> = ({ breadCumName, children }) => {
    console.log('location:', window.location);
    const { pathname } = window.location;

    const [collapse, setCollapse] = useState(false);
    const onCollapse = () => {
        setCollapse(!collapse);
    };
    // const { isCollapse, onCollapse } = useContext(AdminMenuContext);
    // console.log('isCollapsed', isCollapse);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapse} onCollapse={onCollapse}>
                <div className="admin-logo" />
                <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
                    <Menu.Item key="/admin/film-mgmt" icon={<PieChartOutlined />}>
                        <Link to="/admin/film-mgmt">Film management</Link>
                    </Menu.Item>
                    <Menu.Item key="/admin/user-mgmt" icon={<DesktopOutlined />}>
                        <Link to="/admin/user-mgmt">User management</Link>
                    </Menu.Item>
                    <Menu.Item key="/admin/show-time-mgmt" icon={<DesktopOutlined />}>
                        <Link to="/admin/show-time-mgmt"> Show times management</Link>
                    </Menu.Item>
                    <Menu.Item key="/admin/ticket-mgmt" icon={<DesktopOutlined />}>
                        <Link to="/admin/ticket-mgmt"> Ticket management</Link>
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                        <Breadcrumb.Item>{breadCumName}</Breadcrumb.Item>
                    </Breadcrumb>
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default AdminTemplate;

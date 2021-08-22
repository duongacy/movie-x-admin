import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './assets/main.css';
import './assets/App.scss';
import './assets/custom/reset.scss';
import './assets/custom/antd-custom.scss';
import './assets/custom/slick-custom.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
import HomePage from './pages/Home/HomePage';
import PublicTemplate from './templates/PublicTemplate';
import UserTemplate from './templates/UserTemplate';
import LoginPage from './pages/User/LoginPage/LoginPage';
import RegisterPage from './pages/User/RegisterPage/RegisterPage';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PublicTemplate exact path="/" templateComponent={HomePage} />
                <UserTemplate exact path="/login" templateComponent={LoginPage} />
                <UserTemplate exact path="/register" templateComponent={RegisterPage} />
            </Switch>
        </Router>
    );
};

export default App;

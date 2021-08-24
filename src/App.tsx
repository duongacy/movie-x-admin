import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './assets/main.css';
import './assets/App.scss';
import './assets/custom/reset.scss';
import './assets/custom/antd-custom.scss';
import './assets/custom/slick-custom.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
import HomePage from './pages/Home/HomePage';
import MainTemplate from './templates/MainTemplate';
import UserTemplate from './templates/AccountTemplate';
import LoginPage from './pages/User/LoginPage/LoginPage';
import RegisterPage from './pages/User/RegisterPage/RegisterPage';
import BookingPage from './pages/Booking/BookingPage';
import { AdminRoute } from './routes/AdminRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import FilmMgmt from './pages/Admin/FilmMgmt';
import TicketMgmt from './pages/Admin/TicketMgmt';
import UserMgmt from './pages/Admin/UserMgmt';
import ShowtimeMgmt from './pages/Admin/ShowtimeMgmt';
import { Fragment } from 'react';

const App: React.FC = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/login">
                        <LoginPage></LoginPage>
                    </Route>
                    <ProtectedRoute exact path="/booking">
                        <BookingPage />
                    </ProtectedRoute>
                    {/* <AdminMenuProvider> */}
                        <AdminRoute exact path="/admin/film-mgmt">
                            <FilmMgmt />
                        </AdminRoute>
                        <AdminRoute exact path="/admin/ticket-mgmt">
                            <TicketMgmt />
                        </AdminRoute>
                        <AdminRoute exact path="/admin/user-mgmt">
                            <UserMgmt />
                        </AdminRoute>
                        <AdminRoute exact path="/admin/show-time-mgmt">
                            <ShowtimeMgmt />
                        </AdminRoute>
                    {/* </AdminMenuProvider> */}
                </Switch>
            </Router>
            <Router></Router>
        </Fragment>
    );
};

export default App;

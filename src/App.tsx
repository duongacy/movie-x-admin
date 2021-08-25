import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './assets/main.css';
import './assets/App.scss';
import './assets/custom/reset.scss';
import './assets/custom/antd-custom.scss';
import './assets/custom/slick-custom.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import FilmMgmt from './pages/FilmMgmt';
import TicketMgmt from './pages/TicketMgmt';
import UserMgmt from './pages/UserMgmt';
import ShowtimeMgmt from './pages/ShowtimeMgmt';
import AdminTemplate from './templates/AdminTemplate';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
    return (
        <Router>
            <AdminTemplate>
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route exact path="/admin/film-mgmt">
                        <FilmMgmt />
                    </Route>
                    <Route exact path="/admin/ticket-mgmt">
                        <TicketMgmt />
                    </Route>
                    <Route exact path="/admin/user-mgmt">
                        <UserMgmt />
                    </Route>
                    <Route exact path="/admin/show-time-mgmt">
                        <ShowtimeMgmt />
                    </Route>
                </Switch>
            </AdminTemplate>
        </Router>
    );
};

export default App;

import './assets/App.scss';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import FilmMgmt from './pages/FilmMgmt/FilmMgmt';
import UserMgmt from './pages/UserMgmt/UserMgmt';
import ShowtimeMgmt from './pages/ShowtimeMgmt/ShowtimeMgmt';
import AdminTemplate from './templates/AdminTemplate';
import Dashboard from './pages/Dashboard';
import Login from './pages/Account/Login';
import Register from './pages/Account/Register';
import { useSelector } from 'react-redux';

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <AdminTemplate>
                        <AdminRoute exact path="/">
                            <Dashboard />
                        </AdminRoute>
                        <AdminRoute exact path="/admin/film-mgmt">
                            <FilmMgmt />
                        </AdminRoute>
                        <AdminRoute exact path="/admin/user-mgmt">
                            <UserMgmt />
                        </AdminRoute>
                        <AdminRoute exact path="/admin/show-time-mgmt/:maPhim">
                            <ShowtimeMgmt title="aa" />
                        </AdminRoute>
                        <AdminRoute exact path="/register">
                            <Register />
                        </AdminRoute>
                    </AdminTemplate>
                </Switch>
            </Router>
        </>
    );
};

export default App;

interface IAdminRouteProps {
    path: string;
    exact: boolean;
}
const AdminRoute: React.FC<IAdminRouteProps> = ({ children, ...restProps }) => {
    const history = useHistory();
    const { userInfo } = useSelector((root: any) => root.accountStore);
    const { maLoaiNguoiDung } = userInfo || '';
    return (
        <Route
            {...restProps}
            render={() => {
                if (maLoaiNguoiDung === 'QuanTri') {
                    return children;
                } else {
                    history.push('/login');
                    return null;
                }
            }}
        />
    );
};

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './assets/main.css';
import './assets/App.scss';
import "./assets/custom/reset.scss";
import "./assets/custom/antd-custom.scss";
import "./assets/custom/slick-custom.scss";
import ContentYDT from './components/ContentYDT/ContentYDT';
import FooterYDT from './components/FooterYDT/FooterYDT';
import HeaderYDT from './components/HeaderYDT/HeaderYDT';

const App: React.FC = () => {
    return (
        <div className="flex flex-col justify-between" style={{minHeight:"100vh"}}>
            <HeaderYDT/>
            <ContentYDT/>
            <FooterYDT/>
        </div>
    );
};

export default App;

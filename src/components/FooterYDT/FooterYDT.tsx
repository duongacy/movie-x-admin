import React from 'react';
interface IProps {}

const FooterYDT = (props: IProps) => {
    return (
        <FooterYDTWrapper>
            <FooterTopWrapper>
                <FooterCol>
                    <FooterColTitle>Libraries</FooterColTitle>
                    <FooterMenu>
                        <FooterMenuItem><span className="text-ant">Ant Designer</span></FooterMenuItem>
                        <FooterMenuItem><span className="text-react">ReactJS</span></FooterMenuItem>
                        <FooterMenuItem><span className="text-tailwind">Tailwind</span></FooterMenuItem>
                        <FooterMenuItem><span className="text-slick">Slick carousel</span></FooterMenuItem>
                    </FooterMenu>
                </FooterCol>
                
                <FooterCol>
                    <FooterColTitle>Partner</FooterColTitle>
                    <FooterMenu>
                        <FooterMenuItem><span className="text-cgv">CGV</span> </FooterMenuItem>
                        <FooterMenuItem><span className="text-lotte">Lotte</span></FooterMenuItem>
                        <FooterMenuItem><span className="text-bhd">BHD</span></FooterMenuItem>
                    </FooterMenu>
                </FooterCol>
                <FooterCol>
                    <FooterColTitle>Social</FooterColTitle>
                    <FooterMenu>
                        <FooterMenuItem><span className="text-facebook">Facebook</span></FooterMenuItem>
                        <FooterMenuItem> <span className="text-google">Google</span> </FooterMenuItem>
                    </FooterMenu>
                </FooterCol>
                <FooterCol>
                    <FooterColTitle>About us</FooterColTitle>
                    <FooterMenu>
                        <FooterMenuItem>Terms & privacy</FooterMenuItem>
                    </FooterMenu>
                </FooterCol>
            </FooterTopWrapper>
            <hr className="my-1.5 max-w-laptop mx-auto" />
            <FooterBottomWrapper>
                <div className="grid gap-1 col-span-3">
                    <FooterColTitle>
                        MovieYDT – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN YDT
                    </FooterColTitle>
                    <div className="grid gap-0.5 text-8">
                        <h6 className="font-100">
                            Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
                            Minh, Việt Nam.
                        </h6>
                        <h6 className="font-100">Giấy chứng nhận đăng ký kinh doanh số: 0101659783</h6>
                        <h6 className="font-100">Số Điện Thoại (Hotline): 1900 545 436</h6>
                    </div>
                </div>
                <div className="col-span-1">
                    <img src="images/dtb.png" className="h-3" alt="" />
                </div>
            </FooterBottomWrapper>
        </FooterYDTWrapper>
    );
};

export default FooterYDT;

const FooterYDTWrapper: React.FC = ({ children }) => (
    <div className="bg-neutral-dark py-2 px-1 tablet:px-2 text-light text-10 ">{children}</div>
);

const FooterTopWrapper: React.FC = ({ children }) => (
    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-2 max-w-laptop mx-auto">
        {children}
    </div>
);
const FooterBottomWrapper: React.FC = ({ children }) => (
    <div className="grid gap-2 max-w-laptop mx-auto">
        {children}
    </div>
);

const FooterCol: React.FC = ({ children }) => {
    return <div className="flex flex-col gap-1">{children}</div>;
};

const FooterColTitle: React.FC = ({ children }) => {
    return <h6 className="text-13 font-600">{children}</h6>;
};

const FooterMenu: React.FC = ({ children }) => {
    return <ul className="flex flex-col gap-0.5">{children}</ul>;
};

const FooterMenuItem: React.FC = ({ children }) => {
    return (
        <li>
            <a href="" className="font-600 opacity-80 hover:opacity-100 duration-500">
                {children}
            </a>
        </li>
    );
};


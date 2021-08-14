import { createFromIconfontCN, FacebookOutlined } from '@ant-design/icons';
import React from 'react';
interface IProps {}

const FooterYDT = (props: IProps) => {
    return (
        <FooterYDTWrapper>
            <FooterTopWrapper>
                <FooterCol>
                    <FooterColTitle>MovieYDT</FooterColTitle>
                    <FooterMenu>
                        <FooterMenuItem>FAQ</FooterMenuItem>
                        <FooterMenuItem>Term & privacy</FooterMenuItem>
                        <FooterMenuItem>Brand guidelines</FooterMenuItem>
                    </FooterMenu>
                </FooterCol>
                <FooterCol>
                    <FooterColTitle>Partner</FooterColTitle>
                    <FooterPartner>
                        <FooterPartnerItem href="http://" srcUrl="images/partners/agribank.png" />
                        <FooterPartnerItem href="http://" srcUrl="images/partners/beta.jpg" />
                        <FooterPartnerItem href="http://" srcUrl="images/partners/touch.png" />
                        <FooterPartnerItem href="http://" srcUrl="images/partners/zalopay.png" />
                        <FooterPartnerItem
                            href="http://"
                            srcUrl="images/partners/viettinbank.png"
                        />
                        <FooterPartnerItem href="http://" srcUrl="images/partners/vcb.png" />
                    </FooterPartner>
                </FooterCol>
                <FooterCol>
                    <FooterColTitle>Mobile app</FooterColTitle>
                    <FooterPartner>
                        <FooterPartnerItem href="" srcUrl="images/socials/ios.png" />
                        <FooterPartnerItem href="" srcUrl="images/socials/android.png" />
                    </FooterPartner>
                </FooterCol>
                <FooterCol>
                    <FooterColTitle>Social</FooterColTitle>
                    <FooterMenu>
                        <FooterMenuItem>
                            <img src="images/socials/google.png" className="h-2" alt="" />
                        </FooterMenuItem>
                        <FooterMenuItem>
                            <img src="images/socials/zalo.png" className="h-2" alt="" />
                        </FooterMenuItem>
                    </FooterMenu>
                </FooterCol>
            </FooterTopWrapper>
            <hr className="my-1.5 max-w-laptop mx-auto" />
            <FooterBottomWrapper>
                <div className="grid gap-1">
                    <FooterColTitle>
                        MovieYDT – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN YDT
                    </FooterColTitle>
                    <div className="grid gap-0.5 text-8">
                        <h6>
                            Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
                            Minh, Việt Nam.
                        </h6>
                        <h6>Giấy chứng nhận đăng ký kinh doanh số: 0101659783</h6>
                        <h6>Số Điện Thoại (Hotline): 1900 545 436</h6>
                    </div>
                </div>
                <div>
                    <img src="images/dtb.png" className="h-3" alt="" />
                </div>
            </FooterBottomWrapper>
        </FooterYDTWrapper>
    );
};

export default FooterYDT;

const FooterYDTWrapper: React.FC = ({ children }) => (
    <div className="bg-neutral-light py-2 px-1 tablet:px-3 text-light text-10 ">{children}</div>
);

const FooterTopWrapper: React.FC = ({ children }) => (
    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-2 max-w-laptop mx-auto">
        {children}
    </div>
);
const FooterBottomWrapper: React.FC = ({ children }) => (
    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-2 max-w-laptop mx-auto">
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
            <a href="" className="font-600 opacity-60 hover:opacity-100 duration-500">
                {children}
            </a>
        </li>
    );
};

const FooterPartner: React.FC = ({ children }) => (
    <div className="grid grid-cols-3 gap-1">{children}</div>
);

interface IFooterParnerItemProps {
    srcUrl?: string;
    href?: string;
}
const FooterPartnerItem: React.FC<IFooterParnerItemProps> = ({ srcUrl, ...restParam }) => (
    <a {...restParam}>
        <img className="rounded-full" src={srcUrl} width={40} height={40} alt="" />
    </a>
);

import { createFromIconfontCN, FacebookOutlined } from '@ant-design/icons';
interface IProps {}

const FooterYDT = (props: IProps) => {
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
    return (
        <div className="bg-p-light py-4 px-1 phone:px-3 text-s-text text-10">
            <div className="grid grid-cols-4 gap-2 max-w-laptop mx-auto">
                <div className="flex flex-col gap-1">
                    <h6 className="text-14 font-600">MovieYDT</h6>
                    <ul className="flex flex-col gap-1">
                        <li>
                            <a
                                href=""
                                className="font-600 opacity-60 hover:opacity-100 duration-500"
                            >
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                className="font-600 opacity-60 hover:opacity-100 duration-500"
                            >
                                Term & privacy
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                className="font-600 opacity-60 hover:opacity-100 duration-500"
                            >
                                Brand guidelines
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <h6 className="text-14 font-600">Partner</h6>
                    <div className="grid grid-cols-3 gap-1">
                        <a href="https://google.com">
                            <img
                                className="rounded-full"
                                src="images/partners/agribank.png"
                                width={40}
                                height={40}
                                alt=""
                            />
                        </a>
                        <a href="https://google.com">
                            <img
                                className="rounded-full"
                                src="images/partners/beta.jpg"
                                width={40}
                                height={40}
                                alt=""
                            />
                        </a>
                        <a href="https://google.com">
                            <img
                                className="rounded-full"
                                src="images/partners/touch.png"
                                width={40}
                                height={40}
                                alt=""
                            />
                        </a>
                        <a href="https://google.com">
                            <img src="images/partners/zalopay.png" width={40} height={40} alt="" />
                        </a>
                        <a href="https://google.com">
                            <img
                                className="rounded-full"
                                src="images/partners/viettinbank.png"
                                width={40}
                                height={40}
                                alt=""
                            />
                        </a>
                        <a href="https://google.com">
                            <img
                                className="rounded-full"
                                src="images/partners/vcb.png"
                                width={40}
                                height={40}
                                alt=""
                            />
                        </a>
                        <a href="https://google.com">
                            <img
                                className="rounded-full"
                                src="images/partners/starlight.png"
                                width={40}
                                height={40}
                                alt=""
                            />
                        </a>
                        <a href="https://google.com">
                            <img
                                className="rounded-full"
                                src="images/partners/beta.jpg"
                                width={40}
                                height={40}
                                alt=""
                            />
                        </a>
                        <a href="https://google.com">
                            <img
                                className="rounded-full"
                                src="images/partners/cinemax.jpg"
                                width={40}
                                height={40}
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h6 className="text-14 font-600">Mobile app</h6>
                    <div className="flex gap-2">
                        <a href="" className="font-600 opacity-60 hover:opacity-100 duration-500">
                            <img src="images/socials/ios.png" className="h-2" alt="" />
                        </a>
                        <a href="" className="font-600 opacity-60 hover:opacity-100 duration-500">
                            <img src="images/socials/android.png" className="h-2" alt="" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h6 className="text-14 font-600">Social</h6>
                    <ul className="flex flex-col gap-1">
                        <li>
                            <a
                                href=""
                                className="font-600 opacity-60 hover:opacity-100 duration-500"
                            >
                                <img src="images/socials/google.png" className="h-2" alt="" />
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                className="font-600 opacity-60 hover:opacity-100 duration-500"
                            >
                                <img src="images/socials/zalo.png" className="h-2" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FooterYDT;

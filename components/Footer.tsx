import Image from 'next/image';
import { footerLinks } from '@/constants';
import Link from 'next/link';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justy-start items-start gap-6">
                    <Image
                        src="/logo.svg"
                        alt="Car Hub Logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                    <p className="text-base text-gray-700">
                        Carhub {year}
                        <span className="block">
                            All rights reserverd &copy;
                        </span>
                    </p>
                </div>
                <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div key={link.title} className="footer__link">
                            <h3 className="font-bold">{link.title}</h3>
                            {link.links.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className="text-gray-500"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
                <p>@{year} CarHub. All Rights Reserved</p>
                <div className="footer__copyrights-link">
                    <Link href="/" className="text-gray-500">
                        Privacy Policy
                    </Link>
                    <Link href="/" className="text-gray-500">
                        Terms of Use
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

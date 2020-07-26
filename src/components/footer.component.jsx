import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const [footerclass, setFooterClass] = useState('');

    useEffect(()=>{
        
    })

    return (
        <footer className="footer">
            <ul className="footer__social">
                <li>
                    <a
                        href="mailto:&#97;&#108;&#121;&#64;&#121;&#97;&#111;&#107;&#97;&#110;&#97;&#46;&#99;&#111;&#109;"
                        title="&#97;&#108;&#121;&#64;&#121;&#97;&#111;&#107;&#97;&#110;&#97;&#46;&#99;&#111;&#109;"
                        target="blank"
                    >
                        <svg
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="m499.34 224.76c-0.175-0.194-0.338-0.394-0.525-0.581s-0.387-0.35-0.581-0.525c-4.587-4.432-10.107-7.9-16.239-10.075v-2.58c0-49.626-40.374-90-90-90h-182v-106c0-8.284-6.716-15-15-15h-90c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h75v31h-75c-57.896 0-105 47.103-105 105v150c0 24.813 20.187 45 45 45h75v76c0 8.284 6.716 15 15 15h120c8.284 0 15-6.716 15-15v-76h197c24.813 0 45-20.187 45-45v-120c0-12.126-4.83-23.139-12.656-31.239zm-107.34-73.761c33.084 0 60 26.916 60 60h-120c0-33.084 26.916-60 60-60zm-60 90h128.79l-88.18 88.18c-5.85 5.849-15.365 5.848-21.213 0l-19.393-19.393v-68.787zm-212-181v-30h60v30h-60zm60 422h-30v-61h30v61zm60 0h-30v-61h30v61zm62-271v180h-257c-8.271 0-15-6.729-15-15v-150c0-41.355 33.645-75 75-75h75v45c0 8.284 6.716 15 15 15s15-6.716 15-15v-45.1h114.98c-14.28 15.935-22.98 37.069-22.98 60.1zm30 180v-38.891c8.261 7.408 18.818 11.465 30 11.465 12.02 0 23.32-4.681 31.819-13.18l13.5-13.5 54.107 54.106h-129.43zm150-21.852-53.468-53.468 53.468-53.467v106.94z" />
                            <path d="m75 301c-8.284 0-15 6.716-15 15v30c0 8.284 6.716 15 15 15s15-6.716 15-15v-30c0-8.284-6.716-15-15-15z" />
                            <path d="m135 301c-8.284 0-15 6.716-15 15v30c0 8.284 6.716 15 15 15s15-6.716 15-15v-30c0-8.284-6.716-15-15-15z" />
                            <path d="m195 301c-8.284 0-15 6.716-15 15v30c0 8.284 6.716 15 15 15s15-6.716 15-15v-30c0-8.284-6.716-15-15-15z" />
                            <path d="m255 301c-8.284 0-15 6.716-15 15v30c0 8.284 6.716 15 15 15s15-6.716 15-15v-30c0-8.284-6.716-15-15-15z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.facebook.com/yaokanadesign"
                        title="Facebook"
                        target="blank"
                    >
                        <svg
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="m75 512h167v-182h-60v-60h60v-75c0-41.355469 33.644531-75 75-75h75v60h-60c-16.542969 0-30 13.457031-30 30v60h87.292969l-10 60h-77.292969v182h135c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-105v-122h72.707031l20-120h-92.707031v-30h90v-120h-105c-57.898438 0-105 47.101562-105 105v45h-60v120h60v122h-137c-24.8125 0-45-20.1875-45-45zm0 0" />
                        </svg>
                    </a>
                </li>
            </ul>
            <div className="footer__copyright">
                copyright &copy; 2020 
                <Link to="/" title="Alyana Yaokana | Interior Design">
                    {" "}
                    Alyana Yaokana | Interior Design{" "}
                </Link>
            </div>
        </footer>
    );
};

export default Footer;

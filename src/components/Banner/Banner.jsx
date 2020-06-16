import React, { useEffect, useState } from "react";
import { debounce } from 'lodash';

import ImageDesktop from "../../assets/images/desktop-image-3.jpg";
import ImageMobile from "../../assets/images/mobile-image.jpg";

import "./Banner.scss";

const Banner = () => {
    const [isMobile, setIsMobile] = useState(false);

    const onResizeHandler = (e) => {
        const { innerWidth } = e.target;
        if (innerWidth <= 768) {
            setIsMobile(true);
            return;
        }
        setIsMobile(false);
    }

    useEffect(() => {
        window.addEventListener('resize', debounce(onResizeHandler, 250));

        return () => {
            window.removeEventListener('resize', debounce(onResizeHandler));
        }
    }, [])

    const screenWidth = window.innerWidth;

    return (
        <header className="banner" data-testid="banner">
            <div className='container'>
                <div className="banner__image"
                    style={{
                        backgroundImage: ` linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.4) 0%,
                rgba(0, 0, 0, 0.5) 100%
              ),url(${(isMobile || screenWidth <= 768) ? ImageMobile : ImageDesktop})`
                    }}
                ></div>
                {/* <div className='banner__title'>
                    Seu estilo aqui !
            </div> */}
            </div>
        </header>
    );
}
export default Banner
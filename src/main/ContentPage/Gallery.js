import './Gallery.css';

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";




function SlideShow() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="slide-show">
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_ClassCorridor2.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_ClassRoom.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_ClassStairs.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CommitteeRoom.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CommitteeRoom_Night.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_05.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_06.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_08.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_10.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_11.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_12.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_DesertCamp.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_DesertResidence.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_Library.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_RestingLounge.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_SchoolFrontGate.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_SchoolGround.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_View_Abydos.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_Wilderness.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_01.png`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_02.png`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_03.png`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_04.png`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_RamenYa.png`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/Title_BG.png`} /></SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_ClassCorridor2.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_ClassRoom.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_ClassStairs.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CommitteeRoom.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CommitteeRoom_Night.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_05.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_06.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_08.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_10.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_11.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_12.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_DesertCamp.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_DesertResidence.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_Library.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_RestingLounge.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_SchoolFrontGate.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_SchoolGround.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_View_Abydos.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_Wilderness.jpg`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_01.png`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_02.png`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_03.png`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_CS_Abydos_04.png`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/BG_RamenYa.png`} /></SwiperSlide>
                <SwiperSlide><img alt={'school'}src={`${process.env.PUBLIC_URL}/img/gallery/Title_BG.png`} /></SwiperSlide>
            </Swiper>
        </div>
    );
}



function Gallery() {
    return (
        <div className="gallery">
            <SlideShow />
        </div>
    )
}

export default Gallery;

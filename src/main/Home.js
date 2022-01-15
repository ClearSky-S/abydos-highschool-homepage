import './Home.css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function SlideShow() {
    return (
        <div className="slide-show">
            {/* <img src="img/homeSlide/BG_View_Abydos.jpg" alt="abydos school" /> */}
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => null}
                onSlideChange={() => null}
                loop={true}
                rewind={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                speed={1000}
            >
                <SwiperSlide><img src="img/homeSlide/BG_View_Abydos.jpg" alt="abydos school" /></SwiperSlide>
                <SwiperSlide><img src="img/homeSlide/BG_ClassRoom.jpg" alt="classroom" /></SwiperSlide>
                <SwiperSlide><img src="img/homeSlide/BG_CommitteeRoom.jpg" alt="CommitteeRoom" /></SwiperSlide>
                <SwiperSlide><img src="img/homeSlide/BG_SchoolFrontGate.jpg" alt="BG_SchoolFrontGate" /></SwiperSlide>
                <SwiperSlide><img src="img/homeSlide/BG_Title.jpg" alt="BG_Table" /></SwiperSlide>
            </Swiper>
        </div>
    )
}
function QuickLink() {
    return (
        <div className="quick-link">
            quick Link
        </div>
    )
}

function Section1() {
    return (
        <div className="section1">section1</div>
    )
}
function Section2() {
    return (
        <div className="section2">section2</div>
    )
}
function Section3() {
    return (
        <div className="section3">section3</div>
    )
}


function Home() {
    return (
        <div className="home">
            <div className="grid">
                <SlideShow /> <QuickLink />

                <Section1 /> <Section2 /> <Section3 />

            </div>
        </div>
    )
}
export default Home;
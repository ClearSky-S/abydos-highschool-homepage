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
            <div className="title">Quick Link</div>
            <div className="grid">
                <div className="item">
                    <div className="image"><img src="img/quickLink/principal.png" alt="principal" /></div>
                    <div className="text">학교장 인사말</div>
                </div>
                <div className="item">
                    <div className="image"><img src="img/quickLink/objective.png" alt="objective" /></div>
                    <div className="text">교육목표</div>
                </div>
                <div className="item">
                    <div className="image"><img src="img/quickLink/symbol.png" alt="symbol" /></div>
                    <div className="text">상징</div>
                </div>

                <div className="item">
                    <div className="image"><img src="img/quickLink/enroll.png" alt="enroll" /></div>
                    <div className="text">입학안내</div>
                </div>
                <div className="item">
                    <div className="image"><img src="img/quickLink/calendar.png" alt="calendar" /></div>
                    <div className="text">학사일정</div>
                </div>
                <div className="item">
                    <div className="image"><img src="img/quickLink/student.png" alt="student" /></div>
                    <div className="text">학생 게시판</div>
                </div>

                <div className="item">
                    <div className="image"><img src="img/quickLink/gallery.png" alt="gallery" /></div>
                    <div className="text">갤러리</div>
                </div>
                <div className="item">
                    <div className="image"><img src="img/quickLink/committee.png" alt="committee" /></div>
                    <div className="text">대책위원회</div>
                </div>
                <div className="item">
                    <div className="image"><img src="img/quickLink/money.png" alt="money" /></div>
                    <div className="text">발전기금</div>
                </div>
            </div>
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
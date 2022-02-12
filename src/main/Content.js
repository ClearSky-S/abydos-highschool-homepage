import './Content.css';
import Error404 from './Error404';
import MessageBoard from './ContentPage/MessageBoard';
import Gallery from './ContentPage/Gallery';
import { noticeBoardData } from './ContentPage/data/noticeBoardData';
import { newsletterData } from './ContentPage/data/newsletterData';
import { awardData } from './ContentPage/data/awardData';
import { enrollData } from './ContentPage/data/enrollData';
import { enrollTestData } from './ContentPage/data/enrollTestData';
import { enrollPresentationData } from './ContentPage/data/enrollPresentationData';


import { PrincipalGreeting, StudentList, TeacherList, EduTarget, EduCourse, Symbol, Committee} from './ContentPage/intro';
import { FundGreeting, FundState, FundUse, FundSend } from './ContentPage/Fund';

function SideNav({ page1, page2, setPage2, pages }) {
    return (
        <div className="side-nav">
            <h5 className="title">
                {pages[page1].koreanName}
            </h5>
            <ul>
                {pages[page1].subpages.map((element, index) =>
                    <li
                        key={index}
                        className={element === pages[page1].subpages[page2] ? "active" : ""}
                        onClick={(e) => {
                            setPage2(index);
                            window.scrollTo(0, 0);
                        }}
                    ><div>{element}</div></li>
                )}
            </ul>
        </div>
    )
}


function Content({ page1, page2, setPage2, pages }) {
    return (
        <div className="content">
            <div className="banner">
                <img src={`${process.env.PUBLIC_URL}/img/banner.png`} alt="banner" />
            </div>
            <div className="grid">
                <div className="item1">
                    <SideNav page1={page1} page2={page2} setPage2={setPage2} pages={pages} />
                </div>
                <div className="item2">
                    <h3 className="title">
                        {pages[page1].subpages[page2]}
                    </h3>
                    {page1 === "intro" && page2 === 0 ? <PrincipalGreeting /> : null}
                    {page1 === "intro" && page2 === 1 ? <EduTarget /> : null}
                    {page1 === "intro" && page2 === 2 ? <EduCourse /> : null}
                    {page1 === "intro" && page2 === 3 ? <Symbol /> : null}
                    {page1 === "intro" && page2 === 4 ? <TeacherList /> : null}
                    {page1 === "intro" && page2 === 5 ? <StudentList /> : null}
                    {page1 === "intro" && page2 === 6 ? <Committee /> : null}


                    {page1 === "enroll" && page2 === 0 ? <MessageBoard rawData={enrollData} /> : null}
                    {page1 === "enroll" && page2 === 1 ? <MessageBoard rawData={enrollTestData} /> : null}
                    {page1 === "enroll" && page2 === 2 ? <MessageBoard rawData={enrollPresentationData} /> : null}

                    {page1 === "notice" && page2 === 0 ? <MessageBoard rawData={noticeBoardData} /> : null}
                    {page1 === "notice" && page2 === 1 ? <MessageBoard rawData={newsletterData} /> : null}
                    {page1 === "notice" && page2 === 2 ? <MessageBoard rawData={awardData} /> : null}
                    {page1 === "notice" && page2 === 3 ? <Error404 /> : null}
                    {/* {page1 === "notice" && page2 === 4 ? <Error404 /> : null} */}

                    {page1 === "community" ? <Error404 /> : null}

                    {page1 === "gallery" ? <Gallery /> : null}

                    {page1 === "fund" && page2 === 0 ? <FundGreeting /> : null}
                    {page1 === "fund" && page2 === 1 ? <FundState /> : null}
                    {page1 === "fund" && page2 === 2 ? <FundUse /> : null}
                    {page1 === "fund" && page2 === 3 ? <FundSend /> : null}
                </div>
            </div>
        </div>
    )
}
export default Content;
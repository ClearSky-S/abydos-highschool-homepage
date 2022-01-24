import './Content.css';
import Error404 from './Error404';
import MessageBoard from './ContentPage/MessageBoard';
import {noticeBoardData} from './ContentPage/data/noticeBoardData'

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
                        onClick={(e) => {setPage2(index);window.scrollTo(0, 0);
                        }}
                    ><div>{element}</div></li>
                )}
            </ul>
        </div>
    )
}


function Content({ page1, page2, setPage2, pages }) {
    console.log("1")
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
                    {console.log(page1)}
                    {console.log("1")}
                    {page1==="notice"&&page2===1?<MessageBoard rawData={noticeBoardData}/>:<Error404/>}

                </div>
            </div>
        </div>
    )
}
export default Content;
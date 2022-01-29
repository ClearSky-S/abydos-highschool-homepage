import './Content.css';
import Error404 from './Error404';
import MessageBoard from './ContentPage/MessageBoard';
import {noticeBoardData} from './ContentPage/data/noticeBoardData';
import {newsletterData} from './ContentPage/data/newsletterData';

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
                    {page1==="notice"&&page2===0?<MessageBoard rawData={noticeBoardData}/>:null}
                    {page1==="notice"&&page2===1?<MessageBoard rawData={newsletterData}/>:null}
                    {page1==="notice"&&page2===2?<MessageBoard rawData={noticeBoardData}/>:null}
                    {page1==="notice"&&page2===3?<Error404/>:null}
                    {page1==="notice"&&page2===4?<MessageBoard rawData={noticeBoardData}/>:null}



                    {page1!=="notice"?<Error404/>:null}


                </div>
            </div>
        </div>
    )
}
export default Content;
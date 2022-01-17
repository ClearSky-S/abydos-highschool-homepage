import './Content.css';
import Error404 from './Error404';
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
                        onClick={() => setPage2(index)}
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
                <img src="img/banner.png" alt="banner" />
            </div>
            <div className="grid">
                <div className="item1">
                    <SideNav page1={page1} page2={page2} setPage2={setPage2} pages={pages} />
                </div>
                <div className="item2">
                    <h3 className="title">
                        {pages[page1].subpages[page2]}
                    </h3>

                    <Error404/>

                </div>
            </div>
        </div>
    )
}
export default Content;
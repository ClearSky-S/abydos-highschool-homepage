import './Content.css';

function SideNav({ page1, page2, setPage2, pages }) {
    return (
        <div className="side-nav">
            <div className="title">
                -{pages[page1].koreanName}-
            </div>
            <ul>
                {pages[page1].subpages.map((element, index) =>
                    <li key={index}>{element} {element === pages[page1][page2] ? "curr" : null}</li>
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
                <SideNav page1={page1} page2={page2} setPage2={setPage2} pages={pages} />
                <div className="item2">
                    <div className="title">
                        {pages[page1].subpages[page2]}
                    </div>

                    {page1} {page2} Body

                </div>
            </div>
        </div>
    )
}
export default Content;
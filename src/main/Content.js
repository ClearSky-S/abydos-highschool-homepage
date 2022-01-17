import './Content.css';

function SideNav({ page1, page2, setPage2, pages}) {
    return (
        <div className="side-nav">
            <div className="title">
                {page1}
            </div>
            <ul>
                {pages[page1].map((element, index)=>
                <li key={index}>{element} {element===pages[page1][page2]?"curr":null}</li>
                )}
            </ul>
        </div>
    )
}

function Title() {
    return (
        <div className="title">
            Title
        </div>
    )
}

function Content({ page1, page2, setPage2, pages }) {
    return (
        <div className="content">
            <div className="banner">
                <img src="img/banner.png" alt="banner"/>
            </div>
            <div className="grid">
                <SideNav page1={page1} page2={page2} setPage2={setPage2} pages={pages}/>
                <div className="item2">
                    <Title />
                    {pages[page1][page2]}  {page1} {page2} Body

                </div>
            </div>
        </div>
    )
}
export default Content;


function SideNav(){
    return(
        <div className="side-nav">
            SideNav
        </div>
    )
}

function Title(){
    return(
        <div className="title">
            Title
        </div>
    )
}

function Content({page1,page2,setPage2,pages}) {
    return (
        <div className="content">
                <SideNav/>
                <Title/>
                {pages[page1][page2]}  {page1} {page2} Body
        </div>
    )
}
export default Content;

import './Header.css';
function Header({ page1, setPage1, page2, setPage2, pages }) {
    function changePage(p1, p2) {
        setPage1(p1);
        setPage2(p2);
        window.scrollTo(0, 0);
    }
    return (
        <div className="header">
            <div className="container">
                <h1 className="item" onClick={() => {
                    changePage("home",0);
                }}><img src="img/logo3.png" alt="abydos logo"></img></h1>

                <div className="nav1 item"><ul></ul></div>

                <div className="nav2 item">
                    <ul>
                        {Object.keys(pages).map((p1, i) =>
                            <li
                                key={i}
                                className={page1 === p1 ? "currentPage" : null} onClick={(e) => {
                                if (e.target !== e.currentTarget) return;
                                changePage(p1, 0);
                            }}>
                                <div className="text"
                                    onClick={(e) => {
                                        if (e.target !== e.currentTarget) return;
                                        changePage(p1, 0);
                                    }}
                                >{pages[p1].koreanName}</div>
                                <ul>
                                    {pages[p1].subpages.map((subpage, index) =>
                                        <li
                                            key={index}
                                            onClick={() => changePage(p1, index)}
                                        >
                                            <div className={(page1 === p1 && page2 === index) ? "active" : ""}>{subpage}</div>
                                        </li>)}
                                </ul>
                            </li>
                        )}
                        <div className="background"></div>
                    </ul>
                </div>
            </div>

            <div className="shadow"></div>
        </div>
    );
}
export default Header;
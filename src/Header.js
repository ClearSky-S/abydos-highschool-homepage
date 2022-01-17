
import './Header.css';
function Header({ page1, setPage1, setPage2, pages }) {
    function changePage(p1, p2) {
        setPage1(p1);
        setPage2(p2);
    }
    return (
        <div className="header">
            <div className="container">
                <h1 className="item" onClick={() => {
                    setPage1("home");
                }}><img src="img/logo3.png" alt="abydos logo"></img></h1>
                <div className="nav1 item">nav1<ul></ul></div>
                <div className="nav2 item"><ul>
                    <li className={page1 === "intro" ? "currentPage" : null} onClick={() => changePage("intro", 0)}><div className="text">{pages.intro.koreanName}</div><ul></ul></li>
                    <li className={page1 === "enroll" ? "currentPage" : null} onClick={() => changePage("enroll", 0)}><div className="text">{pages.enroll.koreanName}</div><ul></ul></li>
                    <li className={page1 === "notice" ? "currentPage" : null} onClick={() => changePage("notice", 0)}><div className="text">{pages.notice.koreanName}</div><ul></ul></li>
                    <li className={page1 === "community" ? "currentPage" : null} onClick={() => changePage("community", 0)}><div className="text">{pages.community.koreanName}</div><ul></ul></li>
                    <li className={page1 === "gallery" ? "currentPage" : null} onClick={() => changePage("gallery", 0)}><div className="text">{pages.gallery.koreanName}</div><ul></ul></li>
                    <li className={page1 === "fund" ? "currentPage" : null} onClick={() => changePage("fund", 0)}><div className="text">{pages.fund.koreanName}</div><ul></ul></li>

                </ul></div>
            </div>
            <div className="shadow"></div>
        </div>
    );
}
export default Header;
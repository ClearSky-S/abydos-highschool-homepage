
import './Header.css';
function Header({page, setPage}){
    function handleClickNav2(e){
        setPage(e.target.innerText);
    }
    return(
        <div className="header">
            <div className="container">
                <h1 className="item" onClick={()=>{
                    setPage("home");
                }}><img src="img/logo3.png" alt="abydos logo"></img></h1>
                <div className="nav1 item">nav1<ul></ul></div>
                <div className="nav2 item"><ul>
                    <li className={page==="학교소개"?"currentPage":null} onClick={handleClickNav2}><div className="text">학교소개</div><ul></ul></li>

                    <li className={page==="입학안내"?"currentPage":null} onClick={handleClickNav2}><div className="text">입학안내</div><ul></ul></li>
                    <li className={page==="학사안내"?"currentPage":null} onClick={handleClickNav2}><div className="text">학사안내</div><ul></ul></li>
                    <li className={page==="학생마당"?"currentPage":null} onClick={handleClickNav2}><div className="text">커뮤니티</div><ul></ul></li>
                    <li className={page==="갤러리"?"currentPage":null} onClick={handleClickNav2}><div className="text">갤러리</div><ul></ul></li>
                    <li className={page==="발전기금"?"currentPage":null} onClick={handleClickNav2}><div className="text">발전기금</div><ul></ul></li>

                </ul></div>
            </div>
            <div className="shadow"></div>
        </div>
    );
}
export default Header;
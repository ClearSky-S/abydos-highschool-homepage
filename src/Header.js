
import './Header.css';
function Header({page1, setPage1, setPage2}){
    function handleClickNav2(e){
        setPage1(e.target.innerText);
    }
    return(
        <div className="header">
            <div className="container">
                <h1 className="item" onClick={()=>{
                    setPage1("home");
                }}><img src="img/logo3.png" alt="abydos logo"></img></h1>
                <div className="nav1 item">nav1<ul></ul></div>
                <div className="nav2 item"><ul>
                    <li className={page1==="학교소개"?"currentPage":null} onClick={handleClickNav2}><div className="text">학교소개</div><ul></ul></li>

                    <li className={page1==="입학안내"?"currentPage":null} onClick={handleClickNav2}><div className="text">입학안내</div><ul></ul></li>
                    <li className={page1==="학사안내"?"currentPage":null} onClick={handleClickNav2}><div className="text">학사안내</div><ul></ul></li>
                    <li className={page1==="학생마당"?"currentPage":null} onClick={handleClickNav2}><div className="text">커뮤니티</div><ul></ul></li>
                    <li className={page1==="갤러리"?"currentPage":null} onClick={handleClickNav2}><div className="text">갤러리</div><ul></ul></li>
                    <li className={page1==="발전기금"?"currentPage":null} onClick={handleClickNav2}><div className="text">발전기금</div><ul></ul></li>

                </ul></div>
            </div>
            <div className="shadow"></div>
        </div>
    );
}
export default Header;
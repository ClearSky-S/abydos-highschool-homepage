
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
                }}><img src="img/logo.png" alt="abydos logo"></img></h1>
                <div className="nav1 item">nav1<ul></ul></div>
                <div className="nav2 item"><ul>
                    <li className={page==="학교소개"?"currentPage":null} onClick={handleClickNav2}>학교소개<ul></ul></li>
                    <li className={page==="교육과정"?"currentPage":null} onClick={handleClickNav2}>교육과정<ul></ul></li>
                    <li className={page==="입학안내"?"currentPage":null} onClick={handleClickNav2}>입학안내<ul></ul></li>
                    <li className={page==="학사안내"?"currentPage":null} onClick={handleClickNav2}>학사안내<ul></ul></li>
                    <li className={page==="학생마당"?"currentPage":null} onClick={handleClickNav2}>학생마당<ul></ul></li>
                    <li className={page==="갤러리"?"currentPage":null} onClick={handleClickNav2}>갤러리<ul></ul></li>

                </ul></div>
            </div>

        </div>
    );
}
export default Header;
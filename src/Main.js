import Home from './main/Home';
import './Main.css';
import Content from './main/Content';
function Main({page1,page2,setPage1, setPage2,pages}){
    return(
        <div className="main">
            <div className="container">
                {page1==="home"?
                <Home page1={page1} page2={page2} setPage1={setPage1} setPage2={setPage2} pages={pages}/>:
                <Content page1={page1} page2={page2} setPage2={setPage2} pages={pages}/>}
            </div>
        </div>
    )
}
export default Main;
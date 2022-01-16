import Home from './main/Home';
import './Main.css';
function Main({page1,page2,setPage2}){
    console.log(page1);
    return(
        <div className="main">
            <div className="container">
                {page1==="home"?<Home/>:null}
            </div>
        </div>
    )
}
export default Main;
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import {useState} from 'react';
const pages = {
  intro:[
    
  ],
  enroll:[
22
  ],
  notice:[
33
  ],
  community:[

  ],
  gallery:[

  ],
  fund:[

  ],
};

function App() {
  const [page1, setPage1] = useState("home");
  const [page2, setPage2] = useState(0);

  console.log(page1);
  return (
    <div className="App">
    
      <Header page1={page1} setPage1={setPage1} setPage2={setPage2} pages={pages}/>
      <Main page1={page1} page2={page2} setPage2={setPage2} pages={pages}/>
      <Footer/>
    </div>
  );
}

export default App;

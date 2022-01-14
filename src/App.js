import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import {useState} from 'react';

function App() {
  const [page, setPage] = useState("home");
  console.log(page);
  return (
    <div className="App">
    
      <Header page={page} setPage={setPage}/>
      <Main page={page}/>
      <Footer/>
    </div>
  );
}

export default App;

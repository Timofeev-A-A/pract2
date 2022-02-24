import './App.css';
import Hs from "./components/App.header.css"
import Fs from "./components/App.footer.css"
import Ms from "./components/App.main.css"
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Header className={Hs.Header}></Header>
      <Main className={Ms.Main}></Main>
      <Footer className={Fs.Footer}></Footer>

    </div>
  );
}

export default App;

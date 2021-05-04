import './App.css';
import InfoSection from "./components/InfoSection/InfoSection";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <div className="App">
      {/* front-cover Displays on load of webpage */}
      {/* <div className="front-cover">
          <i className="fas fa-exclamation-circle"></i>
          <h1>This webpage is mobile responsive!</h1>
      </div> */}

      <div className="container">
        <div className="wrapper">
          <InfoSection/>
          <MainSection/>
        </div>
      </div>

    </div>
  );
}

export default App;


import './App.css';


function App() {
  return (
    <div className="App">
      {/* The images section*/}
        <div>
          <div>
            <img id="profile_img" src="/images/moses1.jpg" alt="" />
        </div>
        <div>
          <p id="twitter">Twitter: @OjikoMoses</p>
          <p id="slack">Slack: mosganda</p>
        </div>
      </div>
      {/* The links section*/}
      <div>
        <div>
      <a href='https://training.zuri.team' target="_blank">
        <button>Zuri Team</button>
      </a>
    </div>
      </div>
    </div>
  );
}

export default App;

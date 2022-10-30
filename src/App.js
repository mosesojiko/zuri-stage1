
import './App.css';


function App() {
  return (
    <div className="Profile">
      <div className='profile-container'>
        {/* The images section*/}
        <div>
          <div>
            <img id="profile_img" src="/images/moses1.jpg" alt="" />
        </div>
        <div className='profile-handles'>
          <p id="twitter"><span style={{color:"gray", fontSize:"12px"}}>Twitter:</span> @OjikoMoses</p>
          <p id="slack"><span style={{color:"gray", fontSize:"12px"}}>Slack:</span> mosganda</p>
        </div>
      </div>
      {/* The links section*/}
      <div className='profile-links'>
        <div>
      <a id="btn_zuri" href='https://training.zuri.team' target="_blank">
        Zuri Team
      </a>
        </div>
        <div>
      <a id="books" href='https://books.zuri.team' target="_blank">
            
              <h3>Books</h3>
              <p>This is where you find books about design and coding.</p>
        
      </a>
        </div>
        <div>
      <a id="book_python" href='https://books.zuri.team/python-for-beginners?ref_id=mosganda' target="_blank">
            
              <h3>Python for beginners</h3>
              <p>The best rated book for python development. Only two copies remaining.</p>
       
      </a>
        </div>
        <div>
      <a id="pitch" href='https://background.zuri.team' target="_blank">
            
              <h3>Pitch</h3>
              <p>My job is to run background checks on coders in less than 30 minutes.</p>
        
      </a>
        </div>
        <div>
      <a id="book_design" href='https://books.zuri.team/design-rules' target="_blank">
            
              <h3>Design Rules</h3>
              <p>Become a professional designer for free.</p>
        
      </a>
    </div>
      </div>
      </div>
    </div>
  );
}

export default App;

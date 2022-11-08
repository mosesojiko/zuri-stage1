
function Home() {
  return (
    <div className="Profile">
      <div className='profile-container'>
        {/* The images section*/}
        <div>
          <div>
            <img id="profile_img" src="/images/moses1.jpg" alt="" />
        </div>
        <div className='profile-handles'>
          <p id="slack" style={{textAlign:"center"}}> Moses Ojiko</p>
        </div>
      </div>
      {/* The links section*/}
        <div className='profile-links'>
          
          <div>
            
      <a id="twitter" href='https://twitter.com/OjikoMoses' target="_blank">
        Twitter link
      </a>
        </div>


          <div>
            
      <a id="btn_zuri" href='https://training.zuri.team' target="_blank">
        Zuri Team
      </a>
        </div>
        <div>
      <a id="books" href='https://books.zuri.team' target="_blank">
            
              <p title="This is where you find books about design and coding.">Books</p>
            
        
      </a>
        </div>
        <div>
      <a id="book_python" href='https://books.zuri.team/python-for-beginners?ref_id=mosganda' target="_blank">

              <p title="The best rated book for python development. Only two copies remaining.">Python for beginners</p>
       
      </a>
        </div>
        <div>
      <a id="pitch" href='https://background.zuri.team' target="_blank">
            
              <p title="My job is to run background checks on coders in less than 30 minutes.">Pitch</p>
        
      </a>
        </div>
        <div>
      <a id="book_design" href='https://books.zuri.team/design-rules' target="_blank">
            
              <p title="Become a professional designer for free.">Design Rules</p>
              
      </a>
       </div>

                  {/* link to contact page*/}    
          <div>
      <a id="contact" href='/contact'>
              <p>Contact</p>
      </a>
       </div>        
      </div>
      </div>
    </div>
  );
}

export default Home;

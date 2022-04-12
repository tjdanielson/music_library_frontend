import React, {useState} from "react";
import MusicTable from "./MusicTable/MusicTable";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";


function App() {

  const [songUrl, setSongUrl] = useState('')


  return (
    <div className='full-wrapper'>
      <Banner />
      <MusicTable setSongUrl={setSongUrl}/>
      <div className="iframe-container">
        <iframe
              src={`https://www.youtube.com/embed/${songUrl}?&autoplay=1`}
              allow="autoplay"
              allowFullScreen
              title="video"
              />
      </div>
      <div className='bottom-wrapper'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

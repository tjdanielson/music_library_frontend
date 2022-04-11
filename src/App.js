import React, {useState} from "react";
import MusicTable from "./MusicTable/MusicTable";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import PlaySong from "./PlaySong/PlaySong";


function App() {

  const [songUrl, setSongUrl] = useState('')


  return (
    <div className='full-wrapper'>
      <Banner />
      <MusicTable setSongUrl={setSongUrl}/>
      <iframe
            src={`https://www.youtube.com/embed/${songUrl}`}
            allow="autoplay"
            allowFullScreen
            title="video"
            />
      <div className='bottom-wrapper'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

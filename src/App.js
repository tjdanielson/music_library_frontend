import MusicTable from "./MusicTable/MusicTable";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import PlaySong from "./PlaySong/PlaySong";


function App() {
  return (
    <div className='full-wrapper'>
      <Banner />
      <MusicTable />
      <PlaySong />
      <div className='bottom-wrapper'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

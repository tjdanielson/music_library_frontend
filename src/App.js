import MusicTable from "./MusicTable/MusicTable";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import AddNewSong from "./AddNewSong/AddNewSong";
import UpdateSong from "./UpdateSong/UpdateSong";

function App() {
  return (
    <div className='full-wrapper'>
      <Banner />
      <MusicTable />
      <div className='bottom-wrapper'>
        <AddNewSong />
        <Footer />
      </div>
    </div>
  );
}

export default App;

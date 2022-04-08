import React, { useState } from "react";
import axios from "axios";

const SearchBar = (props) => {
    
    const [searchTerm, setSearchTerm] = useState('')

    async function makeGetRequest(event){
        event.preventDefault();
        try{
            let response = await axios.get(`http://127.0.0.1:8000/api/music/filter/${searchTerm}`);
            console.log(response.data)
            props.setMusicLibrary(response.data)
        } catch (ex) {
            console.log('Oh no something didn\'t work right :(');
        }
    }
    
    return ( 
        <div className='search-bar-container'>
            <form onSubmit={makeGetRequest}>
                <input type='text' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
                <button type='submit'>Filter</button>
            </form>
        </div>

     );

}
 
export default SearchBar;

import React from 'react';
import SongArtist from './SongArtist';
import SongLyrics from "./SongLyrics";
const SongDetails = ({Search,lyric,bio}) => {
  return ( <>
  <h2>detalles</h2>
  <SongArtist/>
  <SongLyrics/>
  </> );
}
 
export default SongDetails;
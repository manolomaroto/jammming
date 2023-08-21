import React from 'react';
import styles from './PlayList.module.css';
import { MdPlaylistRemove } from "react-icons/md";

const PlayList = ({playlist, handleRemoveTrack, listName, handleListName, handleListArray}) => {
    return (
        <ul className={styles.playlist}>
            <h2>{listName}</h2>
            <input placeholder='Cambia el nombre' onChange={handleListName}/>
            {
                playlist.map( (track, index )=> { 
                    return(
                    <ul className='collection' key={index}>
                        <li style={{display: "flex", justifyContent: "space-between", margin: "10px"}}><span >{track.name}</span><MdPlaylistRemove id={track.id} onClick={handleRemoveTrack}/></li>
                    </ul>)
                }
                )
                
            }
            <a className="waves-effect waves-light btn" onClick={handleListArray} disabled={playlist.length === 0}>Guardar Lista</a>
        </ul>
    )
}

export default PlayList;
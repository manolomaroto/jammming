import React from 'react';
import styles from './PlayList.module.css';

const PlayList = ({playlist, handleRemoveTrack, listName, handleListName, handleListArray}) => {
    return (
        <ul className={styles.playlist}>
            <h3>{listName}</h3>
            <input placeholder='Cambia el nombre' onChange={handleListName}/>
            {
                playlist.map( (track, index )=> { 
                    return(
                    <div key={index}>
                        <p >{track.name}</p><b id={track.id} onClick={handleRemoveTrack}>-</b>
                    </div>)
                }
                )
                
            }
            <button onClick={handleListArray}>Guardar Lista</button>
        </ul>
    )
}

export default PlayList;
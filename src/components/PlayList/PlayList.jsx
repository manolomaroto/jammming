import React from 'react';
import styles from './PlayList.module.css';

const PlayList = ({playlist, handleRemoveTrack}) => {
    return (
        <ul className={styles.playlist}>
            {
                playlist.map( (track, index )=> { 
                    return(
                    <div key={index}>
                        <p >{track.name}</p><b id={track.id} onClick={handleRemoveTrack}>-</b>
                    </div>)
                }
                )
                
            }
        </ul>
    )
}

export default PlayList;
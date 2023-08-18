import React from 'react';
import styles from './PlayList.module.css';

const PlayList = ({playlist}) => {
    return (
        <ul className={styles.playlist}>
            {
                playlist.map( (track, index )=> { 
                    return(<p key={index}>{track.name}</p>)
                }
                )
                
            }
        </ul>
    )
}

export default PlayList;
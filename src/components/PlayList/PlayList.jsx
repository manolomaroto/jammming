import React from 'react';
import styles from './PlayList.module.css';
import Track from '../Track/Track';

const PlayList = ({playlist}) => {
    return (
        <ul className={styles.playlist}>
            {
                playlist.map( (track, index )=> { 
                    return(<Track key={index} pista={track}/>)
                }
                )
                
            }
        </ul>
    )
}

export default PlayList;
import React from 'react';
import styles from './TrackList.module.css';
import Track from '../Track/Track';

const TrackList = ({pistas}) => {
    return (
        <ul className={styles.trackList}>
            {pistas.map((pista, index)=> {
                return (<Track key={index} pista={pista}/>)
            })}
        </ul>
    )
}

export default TrackList;
import React from 'react';
import styles from './Track.module.css';

const Track = ({pista}) => {
    return (
        <li className={styles.track}>
           <h2>{pista.name}</h2>
           <h3>{pista.artist}</h3>
           <h3>{pista.album}</h3>
        </li>
    )
}

export default Track;
import React from 'react';
import styles from './Track.module.css';

const Track = ({pista, handleTracksSelected}) => {
    return (
        <div className={`row ${styles.track}`}>
            <div className="col s12">
            <div className="card  teal darken-3">
                <div className="card-content white-text">
                <span className="card-title">{pista.name}</span>
                    <p className="collection-item">{pista.artist}</p>
                    <p className="collection-item">{pista.album}</p>
                </div>
                <div className="card-action">
                <a onClick={handleTracksSelected} id={pista.id}>Añadir</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Track;
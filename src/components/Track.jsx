import React from 'react';

function Track(props) {
    const music = props.music;

    function onFavClick(music) {
        return (event) => {
            event.preventDefault();
            props.onClick(music);
        }
        // props.onClick(music) va permettre d’émettre l’événement au composant parent et lui passer l’objet “music” sur lequel on a cliqué
    }

    return (
        <div className="card w-50" style={{ flex: 'initial' }}>
                            <div className="card-body text-left">
                                <div className="media mb-2">
                                    <img className="align-self-center mr-2 w-25" src={music.album.cover} alt="" />
                                    <div className="media-body">
                                        <h5 className="card-title">{music.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{music.artist.name}</h6>
                                    </div>
                                </div>
                                <audio src={music.preview} className="w-100" controls></audio><br />
                                <a href="#" onClick={onFavClick(music)} className="btn btn-sm btn-danger"><i className="fas fa-heart"></i> Ajouter aux favoris</a>
                            </div>
                        </div>
    );
}

export default Track;
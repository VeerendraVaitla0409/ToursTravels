import React from "react";

const MovieEx = (props) => {
    return (
        <div className="movie">
            <figure>
                <img src={props.path} alt={props.title} />
                <figcaption>
                    <h5>{props.title}</h5>
                    <p>{props.genre}</p>
                </figcaption>
            </figure>
        </div>
    )
}

export default MovieEx
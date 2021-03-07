import React from 'react';

const Pet = ({id, url, name, photos}) => (
    <div className = 'pet'>
        <img src = {photos ? photos : "https://images.unsplash.com/photo-1593726936278-8325cde3d570?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1041&q=80"} alt ="pupper doesnt have a photo"></img>
        <h3>{name}</h3>
        <p>{id}</p>
        <a href = {url}>Link to petFinder</a>
    </div>
);

export default Pet;
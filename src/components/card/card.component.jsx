import React from "react";

import './card.style.css';

export const Card = props => (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`} />
            <h1 key={props.monster.id}> {props.monster.name} </h1>
            <h5> {props.monster.email} </h5>

        </div>
  
)
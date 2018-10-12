import React from 'react';

const Cards = (props) => {
    return (
        <div>
            {props.films.map((film)=>{
                return   <div key={film.id} className="card" style={{width: '18rem', margin: '10px', float:'left'}}>
                <div className="card-body">
                  <h4 className="card-title">{film.title}</h4>
                  <h6>Directed by {film.director}</h6>
                  <p className="card-text">{film.description}</p>
                </div>
              </div> 
            })}
      </div>
    )
}
export default Cards;
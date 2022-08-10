import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import "./card-style.css";

const Card1=props =>{
  return(
      <div className="card1 text-center shadow">
          <div className="overflow">
              <img src={props.imgsrc} alt={props.al} className="card1-img-top"/>

          </div>
            <div className="card1-body">
                <h4 className="card1-title">
                    {props.title}
                </h4>
                <p className="card1-text">
                    {props.description}
                </p>
                 <a href={props.ad} className="btn btn-default">see more</a>

            </div>
        </div>
     

  );
}

export default Card1;

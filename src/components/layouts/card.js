import React from "react";
const Card = ()=>{
    return( 
        <div class="row ">
          <div class="col s12 m2 ">       
            <div class="card card-color">
              <div class="card-image">
              <img src= 'images/235861.png' /> 
              </div>
              <div class="card-content">
                <p class = 'text-color'>LAT LONG.</p>
              </div>
              <div class="card-action">
                <a href="https://www.google.com/maps">open in google maps</a>
              </div>
            </div>
          </div>
        </div>
    ) 
}
export default Card;

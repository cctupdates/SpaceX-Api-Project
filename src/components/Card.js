import React from "react";

const Card = ({
  mission_name,
  mission_patch_small,
  mission_id,
  launch_year,
  launch_success,
  flight_number,
  cores,
}) => {
  return (
    <div className='card'>
      <div className='img-div'>
        <img src={mission_patch_small} alt='mission' />
      </div>

      <h4>
        <strong>{mission_name} </strong>
        <strong>#{flight_number}</strong>
      </h4>

      <div className='card-element' id='missionId'>
        <h5>
          <strong>Mission Ids :</strong>
        </h5>
        <ul>
          {mission_id.map((obj, index) => (
            <li key={index}>{obj}</li>
          ))}
        </ul>
      </div>
      <div className='card-element'>
        <h5>
          <strong>Launch Year : </strong>
        </h5>
        <p>{launch_year}</p>
      </div>
      <div className='card-element'>
        <h5>
          <strong>Successful Launch : </strong>
        </h5>
        <p>{launch_success ? "true" : "false"}</p>
      </div>
      <div className='card-element'>
        <h5>
          <strong>Successful Landing: </strong>
        </h5>
        <p>{cores.map((obj) => (obj.land_success ? "true" : "false"))}</p>
      </div>
    </div>
  );
};

export default Card;

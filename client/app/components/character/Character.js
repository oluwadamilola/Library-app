import React from "react";
import PropTypes from 'prop-types';
import "./character.scss";

 const Character =(props)=> {
  const {
    city,
    species,
    status,
    name,
    image,
    gender,
    location,
    created
  } = props.location.state;

  return ( 
    <>
    <div className="character-info">
      <img src={image} alt={city} />
      <h2>Name: {name}</h2>
      <ul>
        <li>Status: {status}</li>
        <li>Species: {species}</li>
        <li>Gender: {gender}</li>
        <li>Location: {location.name}</li>
        <li>Created: {created}</li>
      </ul>
      <span>Location Url: {location.url}</span>
    </div>
    </>
  );
}
Character.propTypes={
  name: PropTypes.string,
  city: PropTypes.string,
  location: PropTypes.string,
  status: PropTypes.string,
  gender: PropTypes.string,
  city: PropTypes.string,
  created: PropTypes.string
  
}

export default Character;

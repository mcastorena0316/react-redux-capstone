import React from 'react';
import './About.css';

const About = () => (

  <div className="about-div">
    <h2>About</h2>
    <p>
      Catalog of SpaceX Launch Missions fetched from
      <a target="_blank" rel="noopener noreferrer" href="https://api.spacexdata.com/"><span> https://api.spacexdata.com/</span></a>
      {' '}
    </p>
    <p>There are 3 different types of filters to apply to all the missions: </p>
    <ul>
      <li>
        <span>Status: </span>
        {' '}
        Sucess, Failure, and Pending
      </li>
      <li>
        <span>Year: </span>
        Year of launch
      </li>
      <li>
        <span>Site:</span>
        {' '}
        Site where the launching was executed
      </li>
    </ul>
    <p>The information available for every launch mission includes:</p>
    <ul>
      <li>Detail of the mission</li>
      <li>Launch Date, Year, and Place</li>
      <li>Rocket type and name</li>
      <li>Status of success</li>
      <li>Reasons for failure (if applicable)</li>
      <li>Wikipedia article describing the details of the mission</li>
      <li>Youtube video about the launching</li>
    </ul>
  </div>

);

export default About;

import React, { useState } from 'react';
import Me from '../../images/me.jpg';

export default function Bio(props) {
  const { bioData } = props;
  return (
<section id="bio" className="fullpage bio">
    <div className="statement d-flex justify-content-between">
    <h1 className="font">About me</h1>
      <div className="hero">
        <img src={Me} />
        <div>
        <h3>My Social Media</h3>
        github - linkedin
      </div>
      </div>
      <div className="personal">
      </div>
      {bioData[0].info[1].professional}
    </div>
</section>
  );
}

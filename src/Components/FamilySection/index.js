import React, { useState } from 'react';
import Wedding from '../../images/familyphotos/married.jpg';
import Baby from '../../images/familyphotos/baby.jpg';
import Sports from '../../images/familyphotos/sports.jpg';
import ChristmasCard from '../../images/familyphotos/christmasCard.jpg';
import ImageCard from '../Images';

export default function Family(props) {
  const { bioData } = props;
  const picArray = [[Wedding, 'Our Wedding', 'We were married in 2018'], [Sports, 'Max', 'Our baby was born in 2019'],
    [Baby, 'Hobbies', 'Football Marvel and Code'], [ChristmasCard, 'Our First Christmas', 'Our first Christmas with our baby']];
  return (
<section className="fullpage bio">
    <div id="bio">
    <h1 class="neon">Life right now</h1>
      <div className="family-section">
        {picArray.map((pic) => <ImageCard imageUrl={pic} />)}
      </div>
      <div className="personal">
      <h1 class="neon">About me</h1>
      </div>
      {bioData[0].info[0].personal}
    </div>
</section>
  );
}

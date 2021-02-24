import React, { useState } from 'react';
import Wedding from '../../images/familyphotos/married.jpg';
import Baby from '../../images/familyphotos/baby.jpg';
import Sports from '../../images/familyphotos/sports.jpg';
import ChristmasCard from '../../images/familyphotos/christmasCard.jpg';

export default function Bio(props) {
  return (
<section class="fullpage bio">
    <div class="statement" id="bio">
      <div class="family-section">
        <div class="family-img-container"></div>
        <img src={Wedding} width="200" alt={'wedding'} />
        <img src={Baby} width="200" alt={'Baby'} />
        <img src={Sports} width="200" alt={'Sports'} />
        <img src={ChristmasCard} width="200" alt={'family on christmas card'} />
      </div>
      <div class="titles">
        <div class="headerspecial3">Will Kotheimer</div>
        <div class="headerspecial">
          Web
          Development <br />& QA
          Engineering
        </div>
      </div>
      <div class="personal">
        <h1>Personal</h1>
      </div>
      <div class="professional">
        <h1>Professional</h1>
      </div>
      <div id="projectAnchor"></div>
    </div>
</section>
  );
}

import React, { useState } from 'react';
import Me from '../../images/me.jpg';

export default function Bio(props) {
  const { bioData } = props;
  return (
<section className="footer d-flex row-wrap">
    <footer>
    <div className="statement d-flex justify-content-between" id="bio">
    <h1 class="neon">Contact</h1>
      <div className="hero">
        <img src={Me} />
        <div className="social">
        <a href="http://github.com/willkotheimer"><i class="fab fa-github-square social"></i></a> | <a href="http://linkedin.com/willkotheimer"><i class="fab fa-linkedin social"></i></a> | <a href="mailto: wkotheimer@gmail.com"><i class="far fa-envelope social"></i></a>
      </div>
      </div>
    </div>
    <div className="professional">
      {bioData[0].info[1].professional}
    </div>
    </footer>
</section>
  );
}

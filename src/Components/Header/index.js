import React, { useState } from 'react';
import Navigation from '../Navbar';

export default function MyHeader(props) {
  return (
      <header class="sticky top-header">
        <div class="topline">
          <div id="logo">>qa
            +d|
            <span class="logo-initial">WK</span>
          </div>
          <h1 class="title"><span class="name">Will Kotheimer</span><span class="pipe">|</span><span class="description">Web
              Development & QA
              Engineering</span></h1>
        </div>
        <Navigation/>
      </header>
  );
}

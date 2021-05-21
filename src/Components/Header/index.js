import React, { useState } from 'react';
import Navigation from '../Navbar';

export default function MyHeader(props) {
  return (
      <header className="sticky top-header">
        <div className="topline">
          <div id="logo">>qa
            +d|
            <span className="logo-initial">WK</span>
          </div>
          <h1 className="title"><span className="name">Will Kotheimer</span><span className="pipe">|</span><span className="description">Web
              Development & QA
              Engineering</span></h1>
        </div>
        <Navigation/>
      </header>
  );
}

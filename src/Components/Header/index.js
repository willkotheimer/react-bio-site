import React, { useState } from 'react';
import PageProgress from 'react-page-progress';
import Navigation from '../Navbar';

export default function MyHeader(props) {
  return (
      <header className="sticky top-header">
        <div className="topline">
          <div id="logo">>r
            +dn|
            <span className="logo-initial">WK</span>
          </div>
          <h1 className="title"><span className="name">Will Kotheimer</span><span className="pipe">|</span><span className="description">Web
              React & .NET </span></h1>
        </div>
        <Navigation/>
        <PageProgress color={'#19aaff'} height={5} />
      </header>
  );
}

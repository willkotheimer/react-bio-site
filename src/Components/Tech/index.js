import React, { useState } from 'react';
import ImageCard from '../Images';

export default function Tech({ tech }) {
  return (
<section id="tech" className='techCard'>
    <div className='title'>
    <h1>{tech.name}</h1>
      <div className='techimage'>
        <img src={tech.image} />
      </div>
      <div className='techdescription'>
        {tech.description}
      </div>
    </div>
</section>
  );
}

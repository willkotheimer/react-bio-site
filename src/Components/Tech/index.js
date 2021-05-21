import React, { useState } from 'react';
import ImageCard from '../Images';

export default function Tech({ tech }) {
  console.warn('my tech', tech);
  return (
<section className='tech'>
    <div className='title'>
    <h1 class='neon'>{tech.name}</h1>
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

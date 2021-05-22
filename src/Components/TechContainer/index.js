import React from 'react';
import Tech from '../Tech';

export default function TechContainer({ techData }) {
  console.warn(techData[0]);
  return (
    <section id="techAnchor" className="tech">
    <h1 className="neon">My Technologies:</h1>
    <div className="techContainer d-flex flex-wrap justify-content-center">
    {Object.values(techData[0]).map((tech, index) => (
        <Tech key={index} tech={tech} />
    ))}
    </div>
    </section>
  );
}

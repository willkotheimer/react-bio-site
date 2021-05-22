import React from 'react';
import Tech from '../Tech';

export default function TechContainer({ techData }) {
  return (
    <section id="techAnchor" className="tech">
    <h1 className="font">My Technologies:</h1>
    <div className="techContainer d-flex flex-wrap justify-content-center">
    {Object.values(techData[0]).map((tech, index) => (
        <Tech key={index} tech={tech} />
    ))}
    </div>
    </section>
  );
}

import React from 'react';
import ProjectCard from '../Card/index';

export default function ProjectContainer({ projects }) {
  return (
    <section id="projectAnchor" className="projects">
    <h1 className="font">My Projects:</h1>
    <div className="projectsContainer">
    {projects && projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
    ))}
    </div>
    </section>
  );
}

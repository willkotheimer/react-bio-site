import React from 'react';
import ProjectCard from '../Card/index';

export default function ProjectContainer({ projects }) {
  return (
    <section id="projects" className="projects">
    <h1 className="neon">My Projects:</h1>
    <div className="projectsContainer">
    {projects && projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
    ))}
    </div>
    </section>
  );
}

import React from 'react';

export default function ProjectCard({ project }) {
  return (
 <div className="project-outside">
 <div className='projectCard'>
   <div className="left">
   <div className='title'>{project.title}</div>
   <div className='description'>{project.description}</div>
  </div>
  <div className="right">
  <div className='screenshot'><img src={project.screenshot}/></div>

  <div className="mobileLinks">
  <div className="project-buttons">
  <a target="_blank" href={project.url} className="btn btn-danger">{project.title}</a>
  <a target="_blank" href={project.githubUrl} className="btn btn-primary">Github</a>
  </div>
  </div>
   </div>
   </div>
   <div className="projectDossierButtonContainer">
     <div id={project.id} className="projectDossierButton">
     Press For Details
     </div>
   </div>
   <div className="animate rt projectDossier hidden-{project}">
   <h3>Links</h3>
   <div className="project-buttons">
   <a target="_blank" href={project.url} className="btn btn-danger">{project.title}</a>
   <a target="_blank" href={project.githubUrl} className="btn btn-primary">Github</a>
   </div>
   <h3>Details</h3>
   {project.details}
   </div>
</div>

  );
}

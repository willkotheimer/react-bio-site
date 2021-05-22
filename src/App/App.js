import React from 'react';
import data from '../data/projectsData';
import bioData from '../data/bioData';
import techData from '../data/techData';
import TechContainer from '../Components/TechContainer';
import './App.scss';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Family from '../Components/FamilySection';
import ProjectContainer from '../Components/ProjectContainer';

class App extends React.Component {
  state = {
    projects: [],
  };

  getProjects = () => data.projectData().then((response) => {
    this.setState({
      projects: response[0],
    });
  });

  getProjectByName = (tech) => data.projectDataFiltered(tech).then((response) => {
    this.setState({
      projects: response,
    });
  });

  componentDidMount() {
    this.getProjects();
  }

  handleClick = (e) => {
    switch (e.target.id) {
      case 'react': this.getProjectByName(e.target.id);
        break;
      case 'javascript': this.getProjectByName(e.target.id);
        break;
      case 'react': this.getProjectByName(e.target.id);
        break;
      case 'firebase': this.getProjectByName(e.target.id);
        break;
      case 'sass': this.getProjectByName(e.target.id);
        break;
      case 'csharp': this.getProjectByName(e.target.id);
        break;
      default: this.getProjects();
    }
  }

  render() {
    const { projects } = this.state;
    return (
      <div className="App">
        <Header/>
        <div className="d-flex flex-row-wrap">
        <Family key={bioData.id + 1} bioData={Object.values(bioData)} />
        </div>
        <div className="d-flex">
        {techData && <TechContainer techData={Object.values(techData)} />}
        </div>
        <div className="d-flex justify-content-center">
        <button variant="outlined" color="primary" id="csharp" onClick={this.handleClick}>C#/.NET/SQL Server Backend</button>
        <button id="firebase" onClick={this.handleClick}>Firebase Backend</button>
        <button id="react" onClick={this.handleClick}>React</button>
        <button id="javascript" onClick={this.handleClick}>Vanilla Javascript</button>
        <button id="allTech" onClick={this.handleClick}>Select All</button>
        </div>
        <span className="invite">(click to filter by technology)</span><br/>
        {projects && <ProjectContainer projects={Object.values(projects)} /> }
        <Footer key={bioData.id} bioData={Object.values(bioData)} />
      </div>
    );
  }
}

export default App;

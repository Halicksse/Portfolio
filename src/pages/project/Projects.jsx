import '../project/projects.css';
import ProjectsCard from './ProjectsCard';
import projects from "/src/data/projects.json";

function Projects() {
  return (
    <>
     <h3 className="title-projects"><i>My Projects</i></h3>
     <div className="cards">
      {projects &&
      projects.map((e) => (
      <div
        key={e.id}>
          <ProjectsCard
          name={e.name}
          description={e.description}
          link={e.link}
          picture={e.picture}
          />
      </div>
      ))}
     </div>
    </>
  );
}

export default Projects;

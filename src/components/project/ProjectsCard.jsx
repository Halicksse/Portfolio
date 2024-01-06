import PropTypes from 'prop-types';

ProjectsCard.propTypes = {
    
};

function ProjectsCard({name, description, link, picture}) {
    return (
        <div className="projects-card">
            <img src={picture} alt={description} title={description} />
            <p className="projects-name">{name}</p>
            <p className="projects-description">{description}</p>
            <a href={link} target="_blank" rel="noreferrer">
            {typeof link == "string" ? "VOIR LE PROJET" : "EN COURS"}
            </a>
            
        </div>
    );
}

ProjectsCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    picture: PropTypes.string,
  }
export default ProjectsCard;
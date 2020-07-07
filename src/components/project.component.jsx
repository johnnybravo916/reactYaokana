import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import parse from "html-react-parser";

const ProjectComponent = () => {
  const [projects, setProjects] = useState([]);
  const [background, setBackground] = useState(null);

  useEffect(() => {
      let projectsUrl = "http://yaokana.com/wp-json/wp/v2/projects?_embed";
      axios
          .get(projectsUrl)
          .then((projectsData) => {
              setProjects([...projectsData.data]);
              console.log(projectsData.data)
          })
          .catch((error) => {
              console.log(error);
          });
  }, []);

  return (
    <div className="latestprojects">
      <h3>latest projects</h3> 
      <div className="latestprojectgrid">
        <div className="latestprojectgrid__singleproject">
          <Link to="/" className="latestprojectgrid__link">
            f
          <h4>{projects}</h4>
          </Link>
        </div>
        <div className="latestprojectgrid__singleproject">
          <Link  to="/"  className="latestprojectgrid__link">
            f
            <h4>chimes</h4>
          </Link>
        </div>
      </div>
    </div> 
  )
}

export default ProjectComponent;
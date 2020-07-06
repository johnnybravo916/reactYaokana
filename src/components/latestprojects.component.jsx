import React from 'react';

const LatestProjects = () => {
  return (
    <div className="latestprojects">
      <h3>latest projects</h3> 
      <div className="latestprojectgrid">
        <div className="latestprojectgrid__singleproject" style="background-image:url(../images/banner.jpg)">
          <a className="latestprojectgrid__link">
            <h4>chimes</h4>
          </a>
        </div>
        <div className="latestprojectgrid__singleproject" style="background-image:url(../images/banner.jpg)">
          <a className="latestprojectgrid__link">
            <h4>chimes</h4>
          </a>
        </div>
      </div>
    </div> 
  )
}

export default LatestProjects;
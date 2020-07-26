import React from 'react';
import { Link, withRouter } from "react-router-dom";

const PageMenu = (props) => {

  switch(props.history.location.pathname){
    case '/about':
      return (
        <nav className="nav--main">
          <ul>
              <li>
                  <Link to="/about" title="hello there">
                      hello there
                  </Link>
              </li>
              <li>
                  <Link to="/media" title="media">
                      media
                  </Link>
              </li>
              <li>
                  <Link to="/contact" title="contact">
                      contact
                  </Link>
              </li>
          </ul>
        </nav>
      );
      case '/contact':
        return (
          <nav className="nav--main">
            <ul>
                <li>
                    <Link to="/about" title="hello there">
                        hello there
                    </Link>
                </li>
                <li>
                    <Link to="/media" title="media">
                        media
                    </Link>
                </li>
                <li>
                    <Link to="/projects" title="projects">
                        projects
                    </Link>
                </li>
            </ul>
          </nav>
        );
    case '/media':
      return (null);
    case '/projects':
      return (null);
    default:
      return (
        <nav className="nav--main">
          <ul>
              <li>
                  <Link to="/about" title="hello there">
                      hello there
                  </Link>
              </li>
              <li>
                  <Link to="/media" title="media">
                      media
                  </Link>
              </li>
              <li>
                  <Link to="/contact" title="contact">
                      contact
                  </Link>
              </li>
          </ul>
        </nav>
      );
  }
}

export default withRouter(PageMenu);
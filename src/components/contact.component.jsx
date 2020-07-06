import React from 'react';

import {Link} from 'react-router-dom';

const ContactComponent = () => {
  return (
    <div className="container-fluid">
      <div className="contact--footer">
        <div className="row">
          <div className="col-md-12">
            <h3><Link to="/contact" title="contact me">contact me</Link></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactComponent;
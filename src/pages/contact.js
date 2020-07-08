import React from 'react';

import Banner from "../components/banner.component";
import ProjectComponent from "../components/project.component";

const ContactPage = () => {
  return(
    <>
      <Banner title="hello there" imgUrl="#" bgColor="#000"/>
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact">
                <h2 className="contact__title">hello there</h2>
                <form>
                  <input type="text" placeholder="name"/>
                  <input type="email" placeholder="email"/>
                  <textarea placeholder="message">

                  </textarea>
                  <input type="submit" value="send"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ProjectComponent/>
    </>
  )
}

export default ContactPage ;
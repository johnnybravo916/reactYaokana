import React, {useContext} from "react";

import { DataContext } from "../context/context";
import SlickSlider from "../components/slider.component";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";


const HomePage = () => {
  const appContext = useContext(DataContext);
  const {homePage} = appContext;

    return (
        <main>
            {homePage.map((seo, index) => {
                return <Helmet key="index">{parse(seo.yoast_head)}</Helmet>;
            })}

            <div className="slider">
                <SlickSlider />
                <Link
                    to="/projects"
                    title="View Projects"
                    className="slider__mainlink"
                >
                    view projects
                </Link>
            </div>
        </main>
    );
};

export default HomePage;

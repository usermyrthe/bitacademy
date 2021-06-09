import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import useWindowPosition from "./useWindowPosition";
import SocialMediaButtons from "react-social-media-buttons";

export default function Aboutme() {
  const animated = useWindowPosition("header", 0.6);
  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col "
      id="aboutme"
    >
      <h1 className="text-5xl font-dosis font-bold">{content.aboutme.title}</h1>

      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
        <LazyLoadImage
          effect="blur"
          placeholderSrc={content.aboutme.imgPlaceholder}
          src={content.aboutme.img}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5"
        />
        <div
          className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block bg-gradient-to-br from-purple-500 
    to-indigo-200"
          style={{
            border: "1px solid #e5ecf9",
            transform: animated
              ? "translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)"
              : "",
            boxShadow:
              "35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)",
          }}
        >
          <ProjectDetail />
        </div>
        <div className="flex justify-center items-center md:hidden ">
          <ProjectDetail />
        </div>
      </div>
    </div>
  );
}

const ProjectDetail = () => {
  const animated = useWindowPosition("header", 0.6);
  return (
    <div>
      <h1
        className={` ${
          animated ? "" : "translate-y-10 opacity-0"
        }   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold`}
      >
        {content.aboutme.projectName}
      </h1>
      <p
        className={`${
          animated ? "" : "translate-y-10 opacity-0"
        }  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis`}
      >
        {content.aboutme.desc}
      </p>

      <div className="font-dosis w-4/5  mt-5 flex justify-between">
        <SocialMediaButtons
          links={[
            "https://www.facebook.com/myrthe198529",
            "https://codepen.com/myrthe-wijnja",
            "https://www.github.com/usermyrthe/",
            "https://www.linkedin.com/in/myrthe-w-009a2a11b/",
          ]}
          buttonStyle={{
            margin: "0px 10px",
            backgroundColor: "#cce7ff",
            borderRadius: "30%",
          }}
          iconStyle={{ color: "#134d8b" }}
          openNewTab={true}
        >
          {" "}
        </SocialMediaButtons>
      </div>
    </div>
  );
};

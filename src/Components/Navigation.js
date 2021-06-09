import React from "react";
import { Link as ScrollLink } from "react-scroll";
import content from "../content";

export default function Navigation() {
  return (
    <div className="font-dosis fixed top-0 w-screen z-40 bg-purple-800 ">
      <div className="flex items-center w-10/12 mx-auto py-3 md: mx-auto">
        <ScrollLink
          to="header"
          smooth={true}
          className=" font-bold text-white flex-1 sm: flex-shrink: 1 cursor-pointer"
        >
          <h1>{content.nav.logo}</h1>
        </ScrollLink>

        <div className="text-white text-xl ">
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span className="mr-4 cursor-pointer" key={index}>
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

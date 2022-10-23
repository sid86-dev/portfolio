import React from "react";
import Sparkles from "react-sparkle";
import { ISkillCard } from "../../types";
import {
  SiAndroid,
  SiAppstore,
  SiBootstrap,
  SiFirebase,
  SiGraphql,
  SiHtml5,
  SiMongodb,
  SiPython,
  SiReact,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";

interface IProps {
  display: ISkillCard;
}

export const SkillCard = ({ display }: IProps) => {
  return (
    <div className="card-body ">
           <Sparkles
              color="red"
              count={15}
              minSize={6}
              maxSize={10}
              overflowPx={80}
              fadeOutSpeed={8}
              flicker={true}
            />
      <h5 className="card-title text-dark">{display.title}</h5>
      <p className="card-text text-mid-dark">{display.description} </p>
      <p className="card-text fs-3">
        {display.id === 1 && (
          <>
            <SiPython /> <IoLogoJavascript /> <SiTypescript /> <SiSolidity />
            <SiMongodb /> <SiGraphql />
          </>
        )}
        {display.id === 2 && (
          <>
            <SiReact /> <SiBootstrap /> <SiTailwindcss /> <SiFirebase />{" "}
            <SiHtml5 />
          </>
        )}
        {display.id === 3 && (
          <>
            <TbBrandReactNative /> <SiAndroid /> <SiAppstore />{" "}
          </>
        )}
      </p>
    </div>
  );
};

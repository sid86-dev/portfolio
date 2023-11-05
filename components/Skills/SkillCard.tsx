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
    <div className="card-body">
      <div className="d-none d-md-block">
        <Sparkles
          color="red"
          count={20}
          minSize={7}
          maxSize={10}
          overflowPx={80}
          fadeOutSpeed={8}
          flicker={true}
        />
      </div>
      <p className="card-title text-dark fs-4 fw-bold">{display.title}</p>
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

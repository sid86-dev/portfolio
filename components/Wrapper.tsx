import React, { useContext } from "react";
import { Context } from "../context/store";
import { AppStoreContext } from "../types";

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

// Theme wrapper over app
export const Wrapper = ({ children }: Props) => {
  const [state] = useContext<AppStoreContext>(Context);

  const style = {
    body: state.isDark ? "bg-dark text-light" : "bg-gray text-mid-dark",
  };
  return <div className={style.body}>{children}</div>;
};

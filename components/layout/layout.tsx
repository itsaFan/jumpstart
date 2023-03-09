import { Fragment } from "react";
import React, { ReactNode } from "react";
import NavBar from "./nav";


type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <Fragment>
        <NavBar />
      <main>{props.children}</main>
    </Fragment>
  );
}

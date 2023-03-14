import { Fragment } from "react";
import React, { ReactNode } from "react";
import NavBar from "./nav";
import MainFooter from "./footer";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <Fragment>
      <NavBar />
      <main>{props.children}</main>
      <MainFooter />
    </Fragment>
  );
}

import React, { ReactNode } from "react";
import classes from "./css/reg-card.module.css";

type Props = {
  children: ReactNode;
};

export default function RegCard(props: Props) {
  return (
    <section className="flex justify-center items-center h-screen content-center">
      <div className={classes.cardBack}>
        <h1 className="text-center mt-5 text-3xl font-semibold">Register</h1>
        <div className={classes.cardFront} >
          {props.children}
          </div>
      </div>
    </section>
  );
}

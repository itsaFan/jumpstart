import Link from "next/link";
import React, { ReactNode } from "react";
import classes from "./css/btn.module.css";

type Props = {
  link: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button(props: Props) {
  if (props.link) {
    return (
      <Link href={props.link} className={`${classes.btn} ${props.className}`}>
        {props.children}
      </Link>
    );
  }
  return (
    <button className={`${classes.btn} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

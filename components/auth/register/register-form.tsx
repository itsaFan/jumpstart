import Image from "next/image";
import AuthCard from "./reg-card";
import Button from "@/components/UI/button";
import classes from "./css/reg-form.module.css";
import { useRef, useState } from "react";
import { NewUserProps } from "@/helpers/user-interface";

export default function RegisterForm(props: NewUserProps) {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  function addUserHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    if (
      !enteredEmail?.includes("@") ||
      !enteredPassword || enteredPassword.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    props.onAddUser({
      email: enteredEmail,
      password: enteredPassword,
    });

  }
  

  return (
    <>
      <AuthCard>
        <div className="flex">
          <div>
            <Image src="/images/reg-img.png" alt="register-image" width={480} height={660} />
            {/* <img src="images/reg-img.png" alt="register-image" /> */}
          </div>
          <div>
            <form className="my-10" onSubmit={addUserHandler}>
              <div className="">
                <input className="" type="email" id="email" placeholder="Email Address" ref={emailInputRef} />
              </div>
              <div>
                <input type="password" id="password" placeholder="Enter Password" ref={passwordInputRef} />
              </div>
              <div>
                <input type="password" id="repasw" placeholder="Repeat Password"  />
              </div>
              <div className={classes.actions}>
              {isInvalid && <p>Please enter a email or password</p>}
                <Button link="">
                  <span className="font-semibold">Register</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </AuthCard>
    </>
  );
}

import Image from "next/image";
import AuthCard from "./reg-card";
import Button from "@/components/UI/button";
import classes from "./css/reg-form.module.css";

export default function RegisterForm() {
  return (
    <>
      <AuthCard>
        <div className="flex">
          <div>
            <Image src="/images/reg-img.png" alt="register-image" width={480} height={660} />
            {/* <img src="images/reg-img.png" alt="register-image" /> */}
          </div>
          <div>
            <form className="my-10">
              <div className="">
                <input className="" type="email" id="email" placeholder="Email Address" />
              </div>
              <div>
                <input type="password" id="pasw" placeholder="Enter Password"></input>
              </div>
              <div>
                <input type="password" id="repasw" placeholder="Repeat Password"></input>
              </div>
              <div className={classes.actions}>
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

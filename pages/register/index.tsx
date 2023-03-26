import RegisterForm from "@/components/auth/register/register-form";
import PageHeader from "@/components/UI/page-header";

export default function RegisterPage() {

  function addUserHandler(userData: {email: string; password: string}) {
    fetch("api/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type" : "application/json",
      }
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
  }



  return (
    <>
      <PageHeader title="Register" />
      <RegisterForm onAddUser={addUserHandler} />
    </>
  );
}

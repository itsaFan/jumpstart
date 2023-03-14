import LoginForm from "@/components/auth/login/login-form";
import ProductList from "@/components/product/product-list";
import PageHeader from "@/components/UI/page-header";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <PageHeader title="login" />
      <div>
        <h1 className="text-white text-5xl">W</h1>
        <LoginForm />
      </div>
    </>
  );
}

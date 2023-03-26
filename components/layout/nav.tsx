import Image from "next/image";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import NavSearch from "./navSearch";
import LoginForm from "../auth/login/login-form";
import ItemCart from "../cart/item-cart";
import Link from "next/link";


export default function NavBar() {
  return (
    <Navbar fluid rounded className="my-3 bg-zinc-800">
      <Navbar.Brand href="/">
        <Image alt="Jumpstart Logo" height="35" src="/images/logo.png" width="35" />
        <span className="self-center whitespace-nowrap pl-3 text-2xl font-semibold">
          <h1>Jumpstart</h1>
        </span>
      </Navbar.Brand>

      <NavSearch />

      <div className="flex md:order-3">
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            <h3>Home</h3>
          </Navbar.Link>
          <Navbar.Link>
            {/* <LoginPage /> */}
            <LoginForm />
            {/* <h3>About</h3> */}
          </Navbar.Link>
          <Navbar.Link href="/admin">
            <h3>Admin</h3>
          </Navbar.Link>
          <Navbar.Link href="/register">
            <h3>Register</h3>
          </Navbar.Link>
          {/* <Navbar.Link href="/register">
            <h3>Promo</h3>
          </Navbar.Link> */}
        </Navbar.Collapse>
      </div>

      {/* <LoginForm /> */}
      <div className="flex md:order-4">
        <ItemCart />
        <Dropdown inline label={<Avatar alt="User settings" img="/images/userprofile.png" rounded />}>
          <Dropdown.Header>
            <span className="block text-sm">Steff</span>
            <span className="block truncate text-sm font-medium">steff@email.com</span>
          </Dropdown.Header>
          <Dropdown.Item><Link href="/user-profile/1">My Profile</Link></Dropdown.Item>
          <Dropdown.Item><Link href="/user-profile/order-history/1">Order History</Link></Dropdown.Item>
          <Dropdown.Item><Link href="/user-profile/wishlist/1">Wishlist</Link></Dropdown.Item>
          <Dropdown.Item><Link href="/user-profile/settings/1">Settings</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}

import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
      <>
      <header>
        <Link className={styles.logo} href="/">Pizza Parlor Homepage</Link>

        <input type="checkbox" id="menu-bar" className={styles.menubar}></input>
        <label for="menu-bar">Menu</label>

        <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About</Link>
          </li>
          <li>
            <Link href="/">Customers +</Link>
            <ul>
              <li>
                <Link href="/customers">All Customers</Link>
              </li>
              <li>
                <Link href="/customers/add">New Customer</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/">Orders +</Link>
            <ul>
              <li>
                <Link href="/orders">All Orders</Link>
              </li>
              <li>
                <Link href="/orders/add">Add Order</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/tracking/add">Tracking</Link>
          </li>
        </ul>
      </nav>
      </header>
</>
);
};

export default NavBar;


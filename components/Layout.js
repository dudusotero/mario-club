import React from "react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Link href="/">
          <a title="Go to home page">
            <img className="logo" src="/static/logo.png" alt="Site logo" />
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/batman">
                <a>Batman TV shows</a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a>News</a>
              </Link>
            </li>
            <li>
              <Link href="/join">
                <a>Join</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-container">{children}</main>

      <footer>
        <ul>
          <li>
            <Link href="/batman">
              <a>Batman TV shows</a>
            </Link>
          </li>
          <li>
            <Link href="/news">
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="/join">
              <a>Join</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}

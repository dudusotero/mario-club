import React from "react";
import Link from "next/link";

import { Header, Logo, MainContainer, Footer } from "./styles";

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <Link href="/">
          <a title="Go to home page">
            <Logo src="/static/logo.png" alt="Site logo" />
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
      </Header>

      <MainContainer>{children}</MainContainer>

      <Footer>
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
      </Footer>
    </>
  );
}

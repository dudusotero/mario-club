import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: aliceblue;
  padding: 0 16px;
  height: 70px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  & > nav {
    flex: 1;
    margin: 0 16px;

    & > ul {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
      justify-content: flex-end;
      align-items: center;

      & > li {
        margin-left: 16px;
      }
    }
  }
`;

export const Logo = styled.img`
  max-width: 80px;

  @media (max-width: 500px) {
    max-width: 50px;
  }
`;

export const MainContainer = styled.main`
  margin-top: 70px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  background-color: aliceblue;
  padding: 8px 16px;

  & > ul {
    flex: 1;
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    justify-content: space-around;
  }
`;

import styled from "@emotion/styled";

export const Button = styled.button`
  font-weight: 700;
  padding: 8px 16px;
  background: transparent;
  border: 1px solid var(--white);
  border-radius: 3px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  color: var(--white);
  svg {
    color: var(--white);
  }
  &:hover {
    background: var(--white);
    color: var(--deep-dark);
    svg {
      color: var(--deep-dark);
    }
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  z-index: 99;
  position: fixed;
  top: ${(props) => (props.scrolled ? "0" : "5px")};
  transition: all 0.3s ease-out;
  background: ${(props) =>
    props.scrolled ? "var(--deep-dark)" : "transparent"};
  display: flex;
  justify-content: center;
  @media screen and (max-width: 660px) {
    background: var(--deep-dark);
  }
`;
export const NavbarContent = styled.div`
  width: 85%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavbarAction = styled.div`
  .menu-icon {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    box-shadow: var(--outer-shadow);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      box-shadow: var(--inner-shadow);
    }
  }
  a {
    color: var(--white);
    font-weight: 700;
    margin: 0 16px;
    padding: 8px 0;
    &:nth-of-type(4) {
      &:hover {
        border-bottom: none;
      }
    }
  }
  a:hover {
    border-bottom: 2px solid var(--white);
  }

  .mobile-menu {
    position: fixed;
    left: 0;
    top: 60px;
    background-color: var(--deep-dark);
    width: 100%;
    height: calc(100vh - 60px);
    padding: 0 24px;
    display: grid;
    grid-template-rows: repeat(4, 60px);
    transition: all 0.3s ease-out;
    body {
      overflow-y: hidden !important;
    }
    a {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        border-bottom: none;
      }
    }
    button {
      margin-top: 8px;
    }
  }
  .hide {
    left: -100%;
  }
`;

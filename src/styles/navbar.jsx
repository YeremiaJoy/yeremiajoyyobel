import styled from "@emotion/styled";

export const Button = styled.button`
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 10px 20px;
  background: var(--accent);
  border: none;
  border-radius: 6px;
  transition: all 0.2s ease;
  cursor: pointer;
  color: #fff;
  &:hover {
    background: var(--accent-hover);
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0) scale(0.98);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  z-index: 99;
  position: fixed;
  top: 0;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.scrolled ? "var(--nav-bg)" : "transparent"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(12px) saturate(180%)" : "none")};
  border-bottom: ${(props) =>
    props.scrolled ? "1px solid var(--border)" : "1px solid transparent"};
  display: flex;
  justify-content: center;
`;

export const NavbarContent = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 64px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarAction = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  .menu-icon {
    border-radius: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--text-primary);
    transition: background 0.2s;
    &:hover {
      background: var(--accent-subtle);
    }
  }

  a {
    color: var(--text-secondary);
    font-weight: 500;
    font-size: 0.875rem;
    margin: 0 4px;
    padding: 8px 12px;
    border-radius: 6px;
    transition: all 0.2s ease;
    position: relative;
    &:hover {
      color: var(--text-primary);
      background: var(--accent-subtle);
    }
    &.active {
      color: var(--text-primary);
      font-weight: 600;
    }
    &.active::after {
      content: "";
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 16px;
      height: 2px;
      background: var(--accent);
      border-radius: 2px;
    }
    &:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }
  }

  .mobile-menu {
    position: fixed;
    left: 0;
    top: 64px;
    background-color: var(--bg-primary);
    border-top: 1px solid var(--border);
    width: 100%;
    height: calc(100dvh - 64px);
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    transition: all 0.3s ease;
    a {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      font-size: 1rem;
      border-radius: 8px;
      &:hover {
        background: var(--accent-subtle);
      }
    }
    button {
      margin-top: 16px;
      width: 100%;
    }
  }
  .hide {
    left: -100%;
  }
`;

export const ThemeToggle = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  margin-left: 8px;
  font-size: 1.1rem;
  &:hover {
    background: var(--accent-subtle);
    color: var(--text-primary);
    border-color: var(--border-hover);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;

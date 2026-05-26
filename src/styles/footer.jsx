import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: center;
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 48px 24px;
  position: relative;
  .email {
    color: var(--text-secondary);
    margin-top: 10px;
    font-size: 0.95rem;
    a {
      color: var(--text-primary);
      font-weight: 600;
      text-decoration: underline;
      text-decoration-color: var(--border-hover);
      text-underline-offset: 3px;
      transition: text-decoration-color 0.2s;
      &:hover {
        text-decoration-color: var(--accent);
      }
    }
  }
  .copyright {
    font-size: 0.78rem;
    color: var(--text-muted);
    margin-top: 28px;
  }
  @media screen and (max-width: 660px) {
    .email {
      font-size: 0.85rem;
    }
  }
`;

export const FooterGetInTouch = styled.h3`
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.75rem, 3.5vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  line-height: 1.1;
  text-wrap: balance;
`;

export const SocialIcons = styled.div`
  position: absolute;
  bottom: 48px;
  right: 24px;
  display: flex;
  gap: 8px;
  a {
    color: var(--text-secondary);
    font-size: 1.1rem;
    transition: all 0.2s ease;
    border: 1px solid var(--border);
    border-radius: 8px;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: var(--text-primary);
      border-color: var(--border-hover);
      background: var(--accent-subtle);
      transform: translateY(-1px);
    }
    &:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }
  }
  @media screen and (max-width: 800px) {
    position: static;
    margin: 24px 0 0;
  }
`;

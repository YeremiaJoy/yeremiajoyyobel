import styled from "@emotion/styled";

export const AboutContainer = styled.section`
  min-height: 100dvh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  background: var(--bg-primary);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -20%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
`;

export const AboutContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 120px 24px 80px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  color: var(--text-primary);

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--text-secondary);
    border: 1px solid var(--border);
    border-radius: 100px;
    padding: 5px 14px;
    margin-bottom: 20px;
    background: var(--bg-elevated);
    letter-spacing: 0.01em;
    .dot {
      width: 7px;
      height: 7px;
      background: #22c55e;
      border-radius: 50%;
      flex-shrink: 0;
      box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.25);
      @keyframes badge-pulse {
        0%, 100% { box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2); }
        50% { box-shadow: 0 0 0 5px rgba(34, 197, 94, 0.08); }
      }
      animation: badge-pulse 2.4s ease-in-out infinite;
    }
  }

  .name {
    font-family: "Outfit", sans-serif;
    font-size: clamp(2.4rem, 6vw, 4.5rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1;
    margin-bottom: 16px;
    text-wrap: balance;
  }

  .interested {
    font-size: clamp(1rem, 2vw, 1.2rem);
    font-weight: 400;
    color: var(--text-secondary);
    margin-bottom: 24px;
    span {
      color: var(--accent);
      font-weight: 600;
    }
  }

  .cv-link {
    display: inline-flex;
    width: fit-content;
  }

  p {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.75;
    margin: 0 0 32px 0;
    max-width: 520px;
    text-wrap: pretty;
    a {
      color: var(--accent);
      font-weight: 500;
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  .desktop,
  .mobile {
    flex-shrink: 0;
    img {
      border-radius: 20px;
      width: 280px;
      height: 340px;
      object-fit: cover;
      border: 1px solid var(--border);
      box-shadow: var(--shadow-lg);
    }
  }

  .mobile {
    display: none;
    margin-bottom: 32px;
    img {
      width: 160px;
      height: 200px;
    }
  }

  .hero__scrollDown {
    color: var(--text-muted);
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 24px;
    bottom: 40px;
    width: 20px;
    align-items: center;
    gap: 8px;
    @keyframes scroll-line {
      0% { transform: scaleY(0); transform-origin: top; }
      50% { transform: scaleY(1); transform-origin: top; }
      51% { transform: scaleY(1); transform-origin: bottom; }
      100% { transform: scaleY(0); transform-origin: bottom; }
    }
    .scroll-line {
      width: 1px;
      height: 48px;
      background: var(--text-muted);
      animation: scroll-line 1.8s ease-in-out infinite;
    }
    p {
      margin: 0;
      font-size: 0.6rem;
      transform: rotate(90deg);
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--text-muted);
      max-width: none;
      white-space: nowrap;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding-top: 100px;
    gap: 32px;
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
    p {
      text-align: left;
    }
    .hero__scrollDown {
      display: none;
    }
    .badge {
      margin: 0 auto 20px;
    }
  }
`;

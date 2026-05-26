import styled from "@emotion/styled";

export const ProjectContainer = styled.section`
  position: relative;
  min-height: 100dvh;
  width: 100%;
  background: var(--bg-primary);
  display: flex;
  justify-content: center;
`;

export const ProjectContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 80px 24px 100px;
  position: relative;
  color: var(--text-primary);
  h2 {
    margin-bottom: 40px;
  }
`;

export const FeaturedCard = styled.a`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  background: var(--bg-card);
  margin-bottom: 20px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  color: var(--text-primary);
  &:hover {
    border-color: var(--border-hover);
    box-shadow: var(--shadow-md);
  }
  &:hover .featured-img img {
    transform: scale(1.03);
  }
  .featured-img {
    overflow: hidden;
    max-height: 320px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
  }
  .featured-body {
    padding: 36px 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }
  .proj-number {
    font-family: "Outfit", sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: var(--accent);
    text-transform: uppercase;
  }
  .proj-title {
    font-family: "Outfit", sans-serif;
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.25;
    color: var(--text-primary);
  }
  .proj-desc {
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--text-secondary);
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
    span {
      font-size: 0.72rem;
      font-weight: 500;
      padding: 3px 10px;
      border-radius: 100px;
      background: var(--accent-subtle);
      color: var(--accent);
      border: 1px solid rgba(59, 130, 246, 0.15);
    }
  }
  .proj-link {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--accent);
    margin-top: 8px;
    letter-spacing: 0.01em;
    transition: letter-spacing 0.2s ease;
  }
  &:hover .proj-link {
    letter-spacing: 0.04em;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    .featured-img {
      max-height: 200px;
    }
    .featured-body {
      padding: 24px 20px;
    }
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.a`
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  background: var(--bg-card);
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    border-color: var(--border-hover);
    box-shadow: var(--shadow-md);
  }
  &:hover .card-img img {
    transform: scale(1.03);
  }
  .card-img {
    overflow: hidden;
    height: 180px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
  }
  .card-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }
  .proj-number {
    font-family: "Outfit", sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: var(--accent);
    text-transform: uppercase;
  }
  .proj-title {
    font-family: "Outfit", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.3;
    color: var(--text-primary);
  }
  .proj-desc {
    font-size: 0.83rem;
    line-height: 1.6;
    color: var(--text-secondary);
    flex: 1;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 4px;
    span {
      font-size: 0.68rem;
      font-weight: 500;
      padding: 2px 9px;
      border-radius: 100px;
      background: var(--accent-subtle);
      color: var(--accent);
      border: 1px solid rgba(59, 130, 246, 0.15);
    }
  }
`;

import styled from "@emotion/styled";

export const BiodataContainer = styled.section`
  position: relative;
  min-height: 50vh;
  width: 100%;
  background-color: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`;

export const BiodataContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px 80px;
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  color: var(--text-primary);
  gap: 40px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const WorkExperience = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 80px 24px 48px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  a {
    color: var(--text-primary);
    display: flex;
    width: 366px;
    gap: 16px;
    padding: 14px 18px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    transition: all 0.2s ease;
    &:hover {
      border-color: var(--border-hover);
      box-shadow: var(--shadow-sm);
      transform: translateY(-1px);
    }
    img {
      border-radius: 8px;
      flex-shrink: 0;
    }
    .company {
      display: grid;
      align-items: center;
      .company-name {
        font-weight: 600;
        font-size: 0.95rem;
        color: var(--text-primary);
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .current-tag {
        display: inline-block;
        font-size: 0.68rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        padding: 2px 8px;
        border-radius: 100px;
        background: rgba(34, 197, 94, 0.12);
        color: #22c55e;
        border: 1px solid rgba(34, 197, 94, 0.25);
        text-transform: uppercase;
      }
      div:last-child {
        color: var(--text-secondary);
        font-size: 0.85rem;
      }
    }
  }
`;

export const LongExperience = styled.div`
  width: max-content;
  height: fit-content;
  padding: 28px 32px;
  border: 1px solid var(--border);
  background: var(--bg-card);
  border-radius: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  span {
    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
  }
  h2 {
    color: var(--accent);
    margin: 0;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.02em;
  }
  div {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
`;

export const ToolsContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 16px;
`;

export const Tools = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ToolItems = styled.div`
  padding: 20px 14px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--bg-card);
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  &:hover {
    border-color: var(--border-hover);
    box-shadow: var(--shadow-sm);
    transform: translateY(-2px);
  }
  img {
    border-radius: 4px;
  }
`;

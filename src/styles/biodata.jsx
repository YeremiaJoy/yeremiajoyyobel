import styled from "@emotion/styled";

export const BiodataContainer = styled.section`
  position: relative;
  min-height: 50vh;
  width: 100%;
  background-color: var(--dark-bg);
`;
export const BiodataContent = styled.div`
  width: 85%;
  margin: auto;
  position: relative;
  display: flex;
  color: white;
  gap: 16px;
  padding: 0 0 50px;
`;
export const WorkExperience = styled.div`
  width: 85%;
  margin: auto;
  padding: 70px 0 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  a {
    color: white;
    display: flex;
    width: fit-content;
    gap: 16px;
    .company {
      display: grid;
      align-items: center;
      .company-name {
        font-weight: 700;
        font-size: 15px;
      }
    }
  }
`;
export const LongExperience = styled.div`
  width: max-content;
  padding: 16px;
  box-shadow: var(--outer-shadow);
  background-color: var(--deep-dark);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    color: #06d79c;
    margin: 0;
    font-size: 26px;
    font-weight: 700;
  }
`;
export const ToolsContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
`;
export const Tools = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  @media screen and (max-width: 660px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ToolItems = styled.div`
  padding: 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px #a7a7a7;
  background-color: #ecfbfd;
  color: var(--deep-dark);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.3 ease-out;
  text-align: center;
  &:hover {
    box-shadow: none;
    transform: translateY(2px);
  }
  .line {
    width: 70%;
    border-bottom: 1px solid var(--gray-1);
    margin-inline: 25%;
  }
`;

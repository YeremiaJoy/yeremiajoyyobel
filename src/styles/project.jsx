import styled from "@emotion/styled";

export const ProjectContainer = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(215deg, #151616 40%, #443e3e);
`;
export const ProjectContent = styled.div`
  width: 85%;
  padding: 70px 0 32px;
  margin: auto;
  position: relative;
  color: white;
  gap: 16px;
  h2 {
    margin-bottom: 20px;
  }
`;
export const ProjectItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  overflow: auto;
  height: 480px;
  border-radius: 8px;
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ProjectItem = styled.a`
  box-shadow: var(--outer-shadow);
  border-radius: 8px;
  color: white;
  position: relative;
  &:hover {
    color: white;
  }
  img {
    height: 300px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .name {
    font-size: 15px;
    font-weight: 600;
    padding: 5px 16px 0;
    background-color: var(--deep-dark);
  }
  .desc {
    height: 90px;
    font-size: 13px;
    padding: 0 16px 10px;
    text-align: justify;
    background-color: var(--deep-dark);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    @media screen and (max-width: 1100px) {
      height: 120px;
    }
    @media screen and (max-width: 580px) {
      height: max-content;
    }
  }
`;

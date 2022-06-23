import styled from "@emotion/styled";

export const FooterContainer = styled.section`
  width: 100%;
  background-color: var(--deep-dark);
  display: flex;
  justify-content: center;
`;
export const FooterContent = styled.div`
  width: 85%;
  padding: 32px 0;
  position: relative;
  @media screen and (max-width: 660px) {
    .email{
      font-size: 12px;
    }
  }
`;
export const FooterGetInTouch = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
export const SocialIcons = styled.div`
  position: absolute;
  bottom: 24px;
  right: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  a {
    color: white;
    margin: 0 8px;
    font-size: 18px;
    transition: all 0.3s ease;
    box-shadow: var(--outer-shadow);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      box-shadow: var(--inner-shadow);
    }
  }
  @media screen and (max-width: 800px) {
    position: static;
    width: 210px;
    margin: 16px auto 0;
  }
`;

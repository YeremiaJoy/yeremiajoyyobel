import styled from "@emotion/styled";

export const AboutContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  background: linear-gradient(35deg, #151616 40%, #443e3e);
  .effect-wrap .effect {
    position: absolute;
    z-index: 0;
  }  
  .effect-1 {
    width: 30px;
    height: 30px;
    border: 4px solid #8a49ff;
    left: 90%;
    top: 85%;
    animation: spin 10s linear infinite;
  }
  .effect-2 {
    left: 3%;
    top: 75%;
    width: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    animation: topBounce 3s ease-in-out infinite;
  }
  .effect-2 div {
    height: 3px;
    width: 3px;
    background-color: #ff9c07;
    margin: 0 3px 8px;
  }
  .effect-4 {
    border-top: 15px solid transparent;
    border-left: 15px solid #06d79c;
    left: 18%;
    top: 16%;
    position: static;
    animation: spin 15s linear infinite;
  }
  .effect-4::before {
    content: "";
    border-top: 15px solid transparent;
    border-left: 15px solid #06d79c;
    position: absolute;
    opacity: 0.5;
    left: -18px;
    top: -12px;
  }
  .effect-5 {
    height: 50px;
    width: 50px;
    left: 60%;
    top: 20%;
    display: flex;
    justify-content: space-between;
    border-radius: 50%;
    overflow: hidden;
    animation: spin 10s linear infinite;
  }
  .effect-5 div {
    width: 4px;
    background-color: #4dd0e1;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes topBounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(25px);
    }
  }
`;
export const AboutContent = styled.div`
  width: 85%;
  padding: 32px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  .name {
    font-size: 21px;
    font-weight: 600;
  }
  .interested {
    font-size: 18px;
    font-weight: 600;
    span {
      color: #0469ff;
    }
  }
  p {
    color: #bfbfbf;
    font-size: 15px;
    margin: 16px 32px 32px 0;
    letter-spacing: 1px;
    text-align: justify;
    a {
      color: var(--white);
      font-weight: 600;
    }
  }
  .desktop,
  .mobile {
    box-shadow: var(--outer-shadow);
    border-radius: 50%;
    img {
      border-radius: inherit;
      width: 300px;
      height: 300px;
      object-fit: cover;
      background: #42474b;
      border: 8px solid transparent;
      box-shadow: var(--inner-shadow);
    }
  }
  .mobile {
    display: none;
    img {
      max-width: 200px;
      max-height: 200px;
    }
  }
  .hero__scrollDown {
    color: #bcb4b4;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: -5%;
    bottom: 40px;
    width: 20px;
    align-items: center;
    p {
      margin: 0;
      font-size: 0.7rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 60px;
      width: 16px;
      object-fit: contain;
    }
  }
  @media screen and (max-width: 720px) {
    flex-direction: column;
    padding-top: 76px;
    .name {
      font-size: 16px;
    }
    .interested {
      font-size: 15px;
    }
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
`;

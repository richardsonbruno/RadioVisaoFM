import styled from "styled-components";
import Users from "../../imgs/users.jpg";

export const FooterPage = styled.footer`
  padding: 10px;
  max-width: 940px;
  margin: 0 auto;
  width: 100%;
`;

export const FooterPageTop = styled.div`
  background: url(${Users}) no-repeat center center;
  height: 71px;
`;

export const FooterPageBottom = styled.section`
  border-top: 1px rgba(0, 0, 0, 0.2) solid;
  padding: 10px 0;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 14px;
    font-weight: 600;
    color: #878787;
  }

  ul {
    display: inline-flex;

    li {
      margin-left: 20px;
    }

    a {
      color: #878787;

      &:hover {
        color: #22aca5;
      }
    }

    i {
      font-size: 18px;
    }
  }
`;

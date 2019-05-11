import styled from "styled-components";
import logo from "../../imgs/visaofm-logo.png";

export const TopPage = styled.header`
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  height: 60px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 9999;
`;

export const Logo = styled.img.attrs({
  src: logo
})`
  height: 100px;
  width: 121px;
`;

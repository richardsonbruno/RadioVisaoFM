import styled from "styled-components";

import background from "../../imgs/background.jpg";

export const Conteudo = styled.div`
  background: url(${background}) no-repeat center center;
  background-size: cover;
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:after {
    background: #00c9ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #92fe9d,
      #00c9ff
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #92fe9d,
      #00c9ff
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    opacity: 0.9;
  }
`;

export const PlayPause = styled.button`
  background: none;
  border: 5px #fff solid;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 99;

  &:hover {
    opacity: 0.7;
  }

  i {
    font-size: 100px;
    color: #fff;
  }
`;

export const ButtonRadio = styled.button`
  background: red;
  color: #fff;
  width: 75px;
  cursor: pointer;
  height: 75px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-center: center;
  z-index: 999;
  border: none;
  position: absolute;
  right: 50px;
  bottom: 50px;
`;
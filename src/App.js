import React from "react";

import { Main } from "./global";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <Main>
      <Header />
      <Content />
      <Footer />
    </Main>
  );
}

export default App;

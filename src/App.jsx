import React from "react";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { AppSection } from "./components/Content_Section";
import { MiddleContent } from "./components/Middle-Zone";
import { Penultimate } from "./components/penultimate";
import {Footer} from "./components/footer"

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <AppSection />
      <MiddleContent />
      <Penultimate />
      <Footer /> 
    </div>
  );
};

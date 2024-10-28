import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "react-router-dom";
import { About } from "react-router-dom";
import { Contact } from "react-router-dom";
import { Works } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Contact />} />
        <Route path="/" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

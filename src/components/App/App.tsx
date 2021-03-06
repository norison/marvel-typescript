import React from "react";
import Header from "../Header/Header";
import CharactersPage from "../Pages/CharactersPage/CharactersPage";
import ComicsPage from "../Pages/ComicsPage/ComicsPage";
import Page404 from "../Pages/Page404/Page404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComicList from "../Pages/ComicsPage/ComicList/ComicList";
import SingleComicPage from "../Pages/ComicsPage/SingleComicPage/SingleComicPage";

import "./App.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<CharactersPage />} />
              <Route path="comics" element={<ComicsPage />}>
                <Route index element={<ComicList />} />
                <Route path=":id" element={<SingleComicPage />} />
              </Route>
              <Route path="*" element={<Page404 />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

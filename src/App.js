import './App.css';

import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from './components/main/layout';
import News from './components/news';
import FoodTablePage from "./components/main/food-table-page";
import Faq from './components/faq';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News />} />
          <Route path="food-table" element={<FoodTablePage />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}


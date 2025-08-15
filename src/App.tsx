import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import LoadingSpinner from "./common/components/LoadingSpinner";
import "./App.css";

const AppLayout = React.lazy(() => import("./layout/AppLayout"));
const HomePage = React.lazy(() => import("./pages/Homepage/HomePage"));
const SearchWithCharacter = React.lazy(
  () => import("./pages/SearchWithCharacter/SearchWithCharacter")
);

// 1. 홈페이지 /
// 2. 캐릭터 정보 페이지 /char/:nickname
function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="char" element={<SearchWithCharacter />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

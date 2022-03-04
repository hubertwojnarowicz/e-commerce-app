import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import ReactLoader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Man = lazy(() => import("./pages/man"));
const Woman = lazy(() => import("./pages/woman"));
const Kids = lazy(() => import("./pages/kids"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<ReactLoader />}>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.MAN} element={<Man />} />
          <Route path={ROUTES.WOMAN} element={<Woman />} />
          <Route path={ROUTES.KIDS} element={<Kids />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

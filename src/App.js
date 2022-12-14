import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { ArchivePage } from "./pages/ArchivePage";
import { DetailPage } from "./pages/DetailPage";
import { AddNotePage } from "./pages/AddNotePage";
import { PageEmpty } from "./components/PageEmpty";

export const App = () => {
  const paths = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/arsip",
      element: <ArchivePage />,
    },
    {
      path: "/notes/:id",
      element: <DetailPage />,
    },
    {
      path: "/notes/new",
      element: <AddNotePage />,
    },
    {
      path: "/*" || "/notes/*",
      element: <PageEmpty />,
    },
  ];

  return (
    <>
      <Routes>
        {paths.map((item, index) => (
          <Route key={index} {...item} />
        ))}
      </Routes>
    </>
  );
};

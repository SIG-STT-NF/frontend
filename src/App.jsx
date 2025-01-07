import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Root from "@/pages/root";
import Home from "@/pages/home";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";
import Provinces from "@/pages/provinces";
import Regencies from "@/pages/regencies";
import Thematic from "@/pages/thematic";
import ThematicPopulation from "@/pages/thematic-population";
import ThematicLandArea from "@/pages/thematic-land-area";
import ThematicPlantedArea from "@/pages/thematic-planted-area";
import ThematicPestIncidence from "@/pages/thematic-pest-incidence";
import ThematicProduction from "@/pages/thematic-production";

// Configure leaflet css
import "leaflet/dist/leaflet.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "provinces",
        element: <Provinces />,
      },
      {
        path: "regencies",
        element: <Regencies />,
      },
      {
        path: "thematic",
        element: <Thematic />,
        children: [
          {
            path: "population",
            element: <ThematicPopulation />,
          },
          {
            path: "land-area",
            element: <ThematicLandArea />,
          },
          {
            path: "plant-area",
            element: <ThematicPlantedArea />,
          },
          {
            path: "pest-incidence",
            element: <ThematicPestIncidence />,
          },
          {
            path: "production",
            element: <ThematicProduction />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  const [queryClient] = useState(() => {
    return new QueryClient({});
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

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

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AuthPorvider from "./Provider/AuthPorvider.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthPorvider>
        <HelmetProvider>
          <div className="max-w-7xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </AuthPorvider>
    </QueryClientProvider>
  </React.StrictMode>
);

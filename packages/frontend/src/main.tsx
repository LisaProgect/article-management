import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/router";
import ErrorBoundary from "./modules/errorBoundary/errorBoundary";
import "../src/shared/styles/font-faces.css";
import "../src/shared/styles/main";
import "../src/shared/styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <Router />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ErrorBoundary>
);

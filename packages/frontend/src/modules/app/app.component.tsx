import * as React from "react";
import Header from "./components/header.component";
import { container, wrapper } from "./app.style";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../shared/hooks/use-auth.hook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FunctionComponent = () => {
  return (
    <AuthProvider>
      <div className={container}>
        <Header />
        <div className={wrapper}></div>
        <Outlet />
      </div>
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;

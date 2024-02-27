import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UserLogin from "./pages/user-login-page/UserLogin";
import ForgotPassword from "./pages/forgot-password-page/ForgotPassword";
import Sucessfulpassword from "./pages/sucessfullpassword/Sucessfulpassword";
import Decision from "../src/pages/decisionpage/DecisionReset"
import Sucessfultransfer from "./pages/sucessfultransferpage/Sucessfultransfer";
import Failedtransfer from "./pages/failedtransfer/Failedtransfer";
import HomeScreen from "./pages/landing-page/HomeScreen/HomeScreen";


//creating my router
const router = createBrowserRouter([


  {
    path: " ",
    element: <UserLogin />,
  },
 
  {
    path: "/",
    element: <HomeScreen />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/sucessfullpassword",
    element: <Sucessfulpassword/>
  },
  {
    path: "/decisionpage",
    element: <Decision/>
  },
  {
    path: "/sucessfultransfer",
    element: <Sucessfultransfer/>
  },
  {
    path: "/failedtransfer",
    element: <Failedtransfer/>
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

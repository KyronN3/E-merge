import LoginPage from "./Auth/LoginPage.tsx";
import BusinessDashboard from "./app/dashboard/BusinessDashboard.tsx";
import CityGovernmentDashboard from "./app/dashboard/CityGovernmentDashboard.tsx";
import SignupPage from "./Auth/SignupPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useUserStore } from "./store/User-store.ts";

const App = () => {
  const userStore = useUserStore();

  const routes: object[] = [];

  switch (userStore.getRole()) {
    case "business_owner":
      routes.splice(0, routes.length);
      routes.push({ path: "/", element: <BusinessDashboard /> });
      break;
    case "public":
      routes.splice(0, routes.length);
      break;
    case "city":
      routes.splice(0, routes.length);
      routes.push({ path: "/", element: <CityGovernmentDashboard /> });
      break;
    case "admin":
      routes.splice(0, routes.length);
      break;
    default:
      routes.splice(0, routes.length);
      routes.push(
        { path: "/", element: <LoginPage /> },
        { path: "/auth/signup", element: <SignupPage /> }
      );
      break;
  }

  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

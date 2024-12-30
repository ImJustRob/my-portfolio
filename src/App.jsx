import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { PortfoliosPage } from "./PortfoliosPage";
import { AboutMe } from "./AboutMe";
import { Footer } from "./Footer";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <PortfoliosPage />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
import './App.css';
import {createBrowserRouter} from 'react-router-dom'
import {RouterProvider} from "react-router";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";

function App() {
  const router = createBrowserRouter([
      {
          path: "/",
          element: (
              <Home/>
          )
      },
      {
          path: "/portfolio",
          element: <Portfolio/>
      },
      {
          path: "/blog",
          element: <Blog/>
      },
      {
          path: "/*",
          element: <Home/>
      }
  ]);
  return (
      <RouterProvider router={router}/>
  );
}

export default App;

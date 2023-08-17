import './App.css';
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import ErrorPage from './error-page';
import Blog from './pages/Blog'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <BaseLayout/>,
  },
  {
    path: "home",
    element: <Home/>
  },
  {
    path: "about us",
    element: <About/>,
  },
  {
    path: "contact us",
    element: <Contact/>,
  },
  {
    path: "gallery",
    element: <Gallery/>,
  },
  {
    path: "/blogs",
    element: <Blog/>
  },
  {
    path: "*",
    errorElement: <ErrorPage/>,
  },
]);

function App() {
  return (
      <RouterProvider router={router}>
          <main>
            <Outlet/>
          </main>
           
      </RouterProvider>
  );
}

export default App;

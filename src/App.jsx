import { RouterProvider } from 'react-router-dom';
import './App.css';
import { 
  createBrowserRouter,
  RouterProvider,
  //BrowserRouter
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import ErrorPage from './error-page';


const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home/>,
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/about us",
    element: <About/>,
  },
  {
    path: "/contact us",
    element: <Contact/>,
  },
  {
    path: "/gallery",
    element: <Gallery/>,
  },
]);

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;


import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './Layout/Main';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {

  const router = createBrowserRouter([

    {path: '/',
    element: <Main></Main>, children: [
      {path: '/', element: <Home></Home>},
      {path: '/home', element: <Home></Home> },
      {path: '/products',
      loader: async () => {
        return fetch('https://jsonplaceholder.typicode.com/users');
      },
       element: <Products></Products>},
       {
        path: '/product/:productId',
        loader: async ({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.productId}`)
        },
        element: <ProductDetails></ProductDetails>
       }
     ]
    },
    {path: '/about', element: <About></About> },
    {path: '*', element:<div>Data not found</div> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

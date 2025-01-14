// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// //create a router
// const router = createBrowserRouter[]


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import './index.css';
import App from './App.jsx';

// Create a router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Define the root route
    // Add child routes or more routes as needed
  },
  // Example of additional routes:
  // {
  //   path: '/about',
  //   element: <About />, // Add an "About" component
  // },
]);

// Render the app with RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to your app */}
  </StrictMode>,
);


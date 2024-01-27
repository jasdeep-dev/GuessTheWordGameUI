import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './Dashboard';
import Home from './Home';
import Game from './Game';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'
import 'tailwindcss/tailwind.css'
import ColorPallete from './ColorPallete'

import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Counter } from './counter';

const router = createBrowserRouter([
  { path: "/", Component: Dashboard },
  { path: "/home", Component: Home },
  { path: "/game", Component: Game },
  { path: "/theme", Component: ColorPallete },
  { path: "/counter", Component: Counter },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root";
import Home from "../pages/Home";
import CounterPage from "../pages/Counter";
import ErrorPage from "../pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "counter",
                element: <CounterPage />,
            },
        ],
        //   loader: rootLoader,
        //   children: [
        // 	{
        // 	  path: "team",
        // 	  element: <Team />,
        // 	  loader: teamLoader,
        // 	},
        //   ],
    },
]);

function Router({ children }) {
    return <RouterProvider router={router} />;
}

export default Router;

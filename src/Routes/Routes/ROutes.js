import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import TableReservation from "../../Pages/TableReservation/TableReservation/TableReservation";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyTable from "../../Pages/Dashboard/MyTable/MyTable";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddChef from "../../Pages/Dashboard/AddChef/AddChef";
import ManageChefs from "../../Pages/Dashboard/ManageChefs/ManageChefs";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'reservation',
                element: <TableReservation></TableReservation>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/mytable',
                element: <MyTable></MyTable>
            },
            {
                path: '/dashboard/myorder',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addChef',
                element: <AdminRoute><AddChef></AddChef></AdminRoute>
            },
            {
                path: '/dashboard/manageChefs',
                element: <AdminRoute><ManageChefs></ManageChefs></AdminRoute>
            }
        ]
    }
])

export default router;
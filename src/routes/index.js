import Admin from "~/page/DashBoard/Admin";
import User from "~/page/DashBoard/User";
import FilterStory from "~/page/FilterStory";
import Profile from "~/page/Profile";
import Read from "~/page/Read";
import ReaderLogin from "~/page/ReaderLogin";
import Story from "~/page/Story";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";

const publicRoutes = [
    {path : '/login',component : Login},
    {path : 'reader/login',component : ReaderLogin},
    {path : '/',component : Home},
    {path : '/register',component : Register},
    {path: '/story' , component: FilterStory},
    {path: '/story/:id' , component: Story},
    {path: '/story/:id/:chapter' , component: Read},
    {path: '/admin' , component: Admin},
    {path: '/user' , component: User},
    {path: '/profile' , component: Profile}

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes };
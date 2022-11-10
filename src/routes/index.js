import Admin from "~/page/DashBoard/Admin";
import User from "~/page/DashBoard/User";
import FilterStory from "~/page/FilterStory";
import Read from "~/page/Read";
import Story from "~/page/Story";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";

const publicRoutes = [
    {path : '/login',component : Login},
    {path : '/',component : Home},
    {path : '/register',component : Register},
    {path: '/story' , component: FilterStory},
    {path: '/story/name' , component: Story},
    {path: '/read' , component: Read},
    {path: '/admin' , component: Admin},
    {path: '/user' , component: User}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes };
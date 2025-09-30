import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import About from "./pages/about/about"
import BareLayout from "./layouts/BareLayout"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Forum from "./pages/forum/Forum"
import AdminLayout from "./layouts/AdminLayout"
import UsersList from "./pages/admin/users/UsersList"
import CulturesList from "./pages/admin/cultures/CulturesList"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* route pour les pages principales */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/forum" element={<Forum />} />
          </Route>


          {/* routes pour les pages d'authentifications */}
          <Route element={<BareLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* routes pour les pages de l'administration */}
          <Route element={<AdminLayout />}>
            <Route path="/users-list" element={<UsersList />} />
            <Route path="/cultures-list" element={<CulturesList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

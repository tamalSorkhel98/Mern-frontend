
import { NavLink } from "react-router";
import { useAuthContext } from "../../../context/Auth.context";
import authHook from "../../Auth/hook/Auth.hook";

const Nav = () => {

    const context=useAuthContext()
    const {logOutHandle}=authHook()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink
          to="/main"
          className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent"
        >
          MyApp
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 sm:gap-4">

          <NavLink
            to="/main"
            end
            className={({ isActive }) =>
              `rounded-xl px-3 py-2 text-sm font-semibold transition sm:px-4 ${
                isActive
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/main/profile"
            className={({ isActive }) =>
              `rounded-xl px-3 py-2 text-sm font-semibold transition sm:px-4 ${
                isActive
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
              }`
            }
          >
            Profile
          </NavLink>

          {
            context.user.role==='seller' && 
            <NavLink
            to="/main/create"
            className={({ isActive }) =>
              `rounded-xl px-3 py-2 text-sm font-semibold transition sm:px-4 ${
                isActive
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
              }`
            }
          >
            Create Product
          </NavLink>
          }

          <button
          onClick={()=>{
            console.log('log out');
            logOutHandle()
          }}
            type="button"
            className="rounded-xl bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-600 active:scale-95 sm:px-5"
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Nav;


import { NavLink} from "react-router";



function Header() {
  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between items-center  bg-amber-400 p-4 text-white ">
     
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm sm:text-lg">
        <NavLink to="" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 " : "")}>Home</NavLink>
        <NavLink to="create-emp" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 " : "")}>Create Emp</NavLink>
        <NavLink to="list" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 " : "")}>Employees</NavLink>
      </div>
    </nav>

  )
}

export default Header
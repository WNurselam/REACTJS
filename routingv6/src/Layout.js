import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "pink" })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "pink" })}
              to="about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "pink" })}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "pink" })}
              to="/users"
            >
              Users
            </NavLink>
          </li>
          
        </ul>
      </nav> 
      <Outlet /> {/*Nav link'in her sayfa da olması için */}
    </div>
  );
}

export default Layout;

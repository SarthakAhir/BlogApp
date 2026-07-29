import { Container, Logo, LogoutBtn } from "../index";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg shadow-sm">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}
          <NavLink to="/">
            <Logo />
          </NavLink>

          {/* Navigation */}
          <ul className="flex items-center gap-2">

            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <NavLink to={item.slug}>
                      {({ isActive }) => (
                        <span
                          className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                            isActive
                              ? "bg-blue-100 text-blue-700"
                              : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
                          }`}
                        >
                          {item.name}
                        </span>
                      )}
                    </NavLink>
                  </li>
                )
            )}

            {authStatus && (
              <li className="ml-3">
                <LogoutBtn />
              </li>
            )}

          </ul>

        </nav>
      </Container>
    </header>
  );
}

export default Header;
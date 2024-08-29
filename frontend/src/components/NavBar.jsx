import { Link } from "react-router-dom";

export default function NavBar() {
  const links = [
    { path: "/", name: "Home" },
    { path: "/posts", name: "Posts" },
    { path: "/projects", name: "Projects" },
    { path: "/about", name: "About" },
  ];

  return (
    <>
      <header>
        <nav>
          <span className="pageLogo">
            <Link to="/">Squishy Octo Couscous</Link>
          </span>
          <ul>
            {links.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

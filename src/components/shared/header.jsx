import { Link, NavLink } from "react-router-dom";

const links = [
  {
    path: "/provinces",
    label: "Provinsi",
  },
  {
    path: "/regencies",
    label: "Kabupaten / Kota",
  },
  {
    path: "/thematic",
    label: "Tematik",
  },
  {
    path: "/about",
    label: "Tentang",
  },
];

export default function Header() {
  return (
    <header className="border-b backdrop-filter backdrop-blur-md bg-white/30">
      <nav className="flex items-center justify-between h-16 max-w-6xl px-4 mx-auto">
        <div>
          <Link to="/" className="text-lg font-medium">
            Beranda
          </Link>
        </div>
        <div>{<DesktopView />}</div>
      </nav>
    </header>
  );
}

const DesktopView = () => {
  return (
    <div className="flex items-center gap-4">
      {links?.map((link) => (
        <NavLink
          key={link.label}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-sm font-medium"
              : "text-sm hover:text-primary/80 transition-all duration-150 ease-in-out"
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

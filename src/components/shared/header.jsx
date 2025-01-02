import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="max-w-4xl mx-auto px-4 pt-8">
      <div className="navbar bg-slate-100/80 backdrop-filter rounded-md">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Home
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-3 items-center">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <button className="btn btn-sm btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

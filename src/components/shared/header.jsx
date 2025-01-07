import { Link, NavLink } from "react-router-dom";
import { AlignJustifyIcon } from "lucide-react";

import { useMediaQuery } from "@/hooks";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
    path: "/about",
    label: "Tentang",
  },
];

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <header className="border-b backdrop-filter backdrop-blur-md bg-white/30">
      <nav className="flex items-center justify-between h-16 max-w-6xl px-4 mx-auto">
        <div>
          <Link to="/" className="text-lg font-medium">
            Beranda
          </Link>
        </div>
        <div>{isMobile ? <MobileView /> : <DesktopView />}</div>
      </nav>
    </header>
  );
}

const DesktopView = () => {
  return (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="text-sm hover:text-primary/80">
            Peta Tematik
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <div className="flex flex-col gap-3 p-3 text-sm">
            <Link to="/thematic/population">Populasi</Link>
            <Link to="/thematic/land-area">Luas Lahan</Link>
            <Link to="/thematic/plant-area">Luas Area Tanam</Link>
            <Link to="/thematic/pest-incidence">Indeks Penyakit / Hama</Link>
            <Link to="/thematic/production">Produksi</Link>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
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

const MobileView = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" size="icon">
          <AlignJustifyIcon className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-3 mt-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Peta Tematik</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  <Link to="/thematic/population">Populasi</Link>
                  <Link to="/thematic/land-area">Luas Tanah</Link>
                  <Link to="/thematic/plant-area">Luas Area Tanam</Link>
                  <Link to="/thematic/pest-incidence">
                    Indeks Penyakit / Hama
                  </Link>
                  <Link to="/thematic/production">Produksi</Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

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
      </SheetContent>
    </Sheet>
  );
};

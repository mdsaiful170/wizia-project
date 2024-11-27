import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
} from "@nextui-org/react";
import { navlink } from "../../../lib/data";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      isBordered
      shouldHideOnScroll
      isBlurred={true}
      isSticky
      className="bg-secondary border-b border-[#183A40]  py-4 lg:py-5 w-full mx-auto"
      maxWidth="xl"
    >
      {/* navbar logo */}
      <NavbarContent>
        <NavbarBrand>
          <img src="./Logo.svg" className="max-w-full object-cover" alt="svg.img" />
        </NavbarBrand>
      </NavbarContent>

      {/* navbar navlink */}
      <NavbarContent
        className="md:flex hidden md:gap-x-7 lg:gap-x-10 xl:gap-x-12"
        justify="center"
      >
        {navlink.map((link, i) => (
          <NavbarItem key={i}>
            <Link
              href="#"
              className="hover-iffect text-white text-base font-normal "
            >
              {link}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* button group */}
      <NavbarContent className="sm:flex gap-x-3 " justify="end">
        {/* book a demo button */}
        <NavbarItem className="hidden md:block">
          <Button
            color="primary"
            radius="full"
            size="md"
            className="text-secondary px-3 py-1 md:px-6 md:py-2 text-xs lg:text-sm font-semibold  hover:!opacity-100 hover:bg-white"
          >
            Book a Demo
          </Button>
        </NavbarItem>
        {/* contact button */}
        <NavbarItem className="hidden md:block">
          <Button
            color="#ffff"
            variant="bordered"
            radius="full"
            size="md"
            className="text-white px-3 py-1 md:px-6 md:py-2 text-xs lg:text-sm font-semibold  hover:!opacity-100 hover:border-primary hover:text-primary"
          >
            Contact Us
          </Button>
        </NavbarItem>

        {/* menu toggle button */}
        <NavbarItem className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <X aria-label="menu button" size={24} color="#0FF1F6" />
            ) : (
              <Menu aria-label="menu button" size={24} color="#0FF1F6" />
            )}
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-secondary border-t border-white mt-7">
        {navlink.map((link, i) => (
          <NavbarItem key={i}>
            <Link
              onClick={toggleMenu}
              as={Link}
              className="duration-250 transition-all ease-linear text-white font-semibold text-base hover:tracking-wider hover:bg-primary/25 w-full py-2 px-2 rounded-md cursor-pointer"
            >
              {link}
            </Link>
          </NavbarItem>
        ))}
        <div className=" flex gap-2 border-t pt-4 border-white/15">
          <Button
            color="primary"
            radius="full"
            size="md"
            className="text-secondary w-1/2 px-3 py-1 md:px-6 md:py-2 text-xs lg:text-sm font-semibold  hover:!opacity-100 hover:bg-white"
          >
            Book a Demo
          </Button>
          <Button
            color="#ffff"
            variant="bordered"
            radius="full"
            size="md"
            className="w-1/2 text-white px-3 py-1 md:px-6 md:py-2 text-xs lg:text-sm font-semibold  hover:!opacity-100 hover:border-primary hover:text-primary"
          >
            Contact Us
          </Button>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;

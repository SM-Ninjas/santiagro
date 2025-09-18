import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Button } from "@heroui/react";
import Home from "../home/Home";

export default function Header() {
  return (
    <Navbar
    shouldHideOnScroll
      className="bg-background/90 backdrop-blur-md border-b border-border sticky top-0 z-10">
      <NavbarBrand>
        <p className="font-bold text-inherit">Santi Agro Farm</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Products
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  
  );
}

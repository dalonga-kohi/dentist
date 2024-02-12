"use client";

import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
      "O nas",
      "Zespół",
      "Oferta",
      ""
    ]

    return (
      <Navbar
        isBordered
        className="fixed"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">LOGO</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            O nas
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" color="foreground">
            Zespół
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/oferta">
            Oferta
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Rejestracja
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      </Navbar>
    )
}

export default Nav
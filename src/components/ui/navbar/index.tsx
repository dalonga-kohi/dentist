"use client";

import React from "react";
import Image from "next/image";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
      ["O nas", "/onas"],
      ["Zespół", "/onas"],
      ["Oferta", "/oferta"],
    ]

    return (
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link color="foreground" href="/">
            <Image src="/logo.png" alt="logo przychodni" width={60} height={0}/>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/onas">
            O nas
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/onas" color="foreground">
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
          <Button as={Link} color="primary" href="/rejestracja" variant="flat">
            Rejestracja
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item[0]}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href={item[1]}
              size="lg"
            >
              {item[0]}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      </Navbar>
    )
}

export default Nav
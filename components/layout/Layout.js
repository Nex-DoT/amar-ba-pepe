import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import pepe from "public/pepe/defualt.png"
export default function Layout() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand className="flex flex-col">
        <Image src={pepe} width={100} className=" w-12" alt="pepe"/>
        <p className="font-bold text-inherit text-xs">Amar ba PEPE</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
         {/* ?????? */}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

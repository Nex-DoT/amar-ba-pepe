import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import pepe from "public/pepe/defualt.png"
export default function Layout({children}) {
  return (
    <>
    <Navbar shouldHideOnScroll>
      <NavbarBrand className=" flex items-start flex-col">
        <Image src={pepe} width={100} className=" w-12 ml-4" alt="pepe"/>
        <p className="font-bold text-inherit text-xs">Amar ba PEPE</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            آموزش
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            محاسبه
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    <div>
      {children}
    </div>
    </>
  );
}

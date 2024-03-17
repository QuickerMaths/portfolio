"use client"

import React, { useEffect, useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ThemeSwitch } from "@/components/theme-switch"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import Navigate from '../navigation-link'
import { usePathname } from 'next/navigation'
import useDeviceSize from '@/hooks/useDeviceSize'


const Navigation = () => {
  return (
    <div className='w-full sticky top-0 border-b backdrop-blur-sm border-secondary dark:border-secondary'>
      <div className="content-container py-5 px-10 flex justify-between items-center">
        <Menu />
        <ThemeSwitch />
      </div>
    </div>
  )
}

const Menu = () => {  
  const [width] = useDeviceSize()

  return width > 768 ? <DesktopMenu /> : <MobileMenu />
}

const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-8 flex items-center w-full min-[360px]:w-[80%]">
        <nav>
          <ul className='font-serif text-[4rem] flex flex-col justify-center items-start gap-5 text-primary'>
            <li>
              <Navigate href="/" setOpen={setOpen}>
                Home
              </Navigate>
            </li>
            <li>
              <Navigate href="/projects" setOpen={setOpen}>
                Projects
              </Navigate>
            </li>
            <li>
              <Navigate href="/contact" setOpen={setOpen}>
                Contact
              </Navigate>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

const DesktopMenu = () => {
  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList className='flex justify-center items-center gap-5 font-semibold font-sans text-secondary'>
        <NavigationMenuItem  className={`${pathname === "/" ? "text-primary" : ""}`}>
          <Navigate href="/">
              Home
          </Navigate>
        </NavigationMenuItem>
        <NavigationMenuItem  className={`${pathname === "/projects" ? "text-primary" : ""}`}>
          <Navigate href="/projects">
              Projects
          </Navigate>
        </NavigationMenuItem>
        <NavigationMenuItem  className={`${pathname === "/contact" ? "text-primary" : ""}`}>
          <Navigate href="/contact">
              Contact
          </Navigate>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navigation
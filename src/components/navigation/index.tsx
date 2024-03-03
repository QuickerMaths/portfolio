"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ThemeSwitch } from "@/components/theme-switch"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

const Navigation = () => {
  return (
    <div className='w-full fixed border-b border-secondary dark:border-secondary'>
      <div className="content-container py-5 px-10 flex justify-between items-center">
        <Menu />
        <ThemeSwitch />
      </div>
    </div>
  )
}

const Menu = () => {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopMenu />
      </div>
      <div className='md:hidden'>
        <MobileMenu />
      </div>
    </div>
  )
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
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link> 
            </li>
            <li>
              <Link href="/projects"  onClick={() => setOpen(false)}> 
                Projects
              </Link> 
            </li>
            <li>
              <Link href="/contact"  onClick={() => setOpen(false)}>
                Contact
              </Link> 
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

const DesktopMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navigation
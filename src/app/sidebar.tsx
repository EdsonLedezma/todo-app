"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Menu, Plus, List, Pencil, Trash } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      href: "/todo/view",
      label: "View All",
      icon: List,
    },
    {
      href: "/todo/create",
      label: "Create",
      icon: Plus,
    },
    {
      href: "/todo/update",
      label: "Update",
      icon: Pencil,
    },
    {
      href: "/todo/delete",
      label: "Delete",
      icon: Trash,
    },
  ];

  const [openSidebarDrawer, setOpenSidebarDrawer] = useState(false);

  const handleRerote = (href: string) => {
    setOpenSidebarDrawer(false);
    router.push(href);
  };

  const SidebarContent = (
    <div className="flex flex-col justify-start space-y-2">
      {routes.map((route) => (
        <Button
          key={route.href}
          asChild
          variant="ghost"
          className={cn(pathname === route.href && "bg-muted hover:bg-muted")}
          onClick={() => handleRerote(route.href)}
        >
          <div className="flex w-full justify-start">
            <route.icon className="mr-2 h-4 w-4" />
            {route.label}
          </div>
        </Button>
      ))}
    </div>
  );

  return (
    <>
      <aside className="hidden w-[200px] flex-col md:flex">
        <ScrollArea className="flex-1">{SidebarContent}</ScrollArea>
      </aside>
      <Sheet onOpenChange={setOpenSidebarDrawer} open={openSidebarDrawer}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">{SidebarContent}</SheetContent>
      </Sheet>
    </>
  );
}

"use client";
import { DashboardNav } from "@/components/dashboard-nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/constants/nav-items";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { NavItem } from "@/types";

>>>>>>> 89841afa12e3dbf981e398eb57072939a74fca42
=======
import { NavItem } from "@/types";

>>>>>>> 89841afa12e3dbf981e398eb57072939a74fca42
// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
<<<<<<< HEAD
<<<<<<< HEAD
}

export function MobileSidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const data = navItems();
=======
=======
>>>>>>> 89841afa12e3dbf981e398eb57072939a74fca42
  projectId: string;
}

export function MobileSidebar({ className, projectId }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const data: NavItem[] = navItems(projectId);
<<<<<<< HEAD
>>>>>>> 89841afa12e3dbf981e398eb57072939a74fca42
=======
>>>>>>> 89841afa12e3dbf981e398eb57072939a74fca42
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Overview
              </h2>
              <div className="space-y-1">
                <DashboardNav items={data} setOpen={setOpen} />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

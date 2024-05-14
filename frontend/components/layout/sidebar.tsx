import { DashboardNav } from "@/components/dashboard-nav";
import { navItems } from "@/constants/nav-items";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
<<<<<<< HEAD

export default function Sidebar() {
  const data = navItems();
=======
=======
>>>>>>> 89841afa12e3dbf981e398eb57072939a74fca42
import { NavItem } from "@/types";

type Props = {
  projectId: string;
};

export default function Sidebar(props: Props) {
  const { projectId } = props;
  const data: NavItem[] = navItems(projectId);
<<<<<<< HEAD
>>>>>>> 89841afa12e3dbf981e398eb57072939a74fca42
=======
>>>>>>> 89841afa12e3dbf981e398eb57072939a74fca42

  return (
    <nav
      className={cn(`relative hidden h-screen border-r pt-16 lg:block w-72`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Overview
            </h2>
            <DashboardNav items={data} />
          </div>
        </div>
      </div>
    </nav>
  );
}

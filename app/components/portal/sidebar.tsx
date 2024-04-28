import { ReactNode } from "react";

import { SidebarLink } from "~/components/portal/sidebarlink";

export const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        {children}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <SidebarLink
          to="/settings"
          iconName="Settings"
          iconText="Settings"
          tooltipText="Settings"
        />
      </nav>
    </aside>
  );
};

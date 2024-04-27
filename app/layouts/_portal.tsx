import { Form, useLoaderData } from "@remix-run/react";
import { ReactNode } from "react";
import { Sidebar } from "~/components/portal/sidebar";
import { SidebarLink } from "~/components/portal/sidebarlink";
import { SidebarLinkMobile } from "~/components/portal/sidebarlinkmobile";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Icon } from "~/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { loader } from "~/routes/dashboard";

export const PortalLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar>
        <SidebarLink
          to="/"
          iconName="Home"
          iconText="KFL Home"
          tooltipText="KFL Home"
        />
        <SidebarLink
          to="/dashboard"
          iconName="LayoutDashboard"
          iconText="Dashboard"
          tooltipText="Dashboard"
        />
      </Sidebar>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className=" sticky top-0 z-30 flex h-14 items-center justify-end gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <Icon size={20} name="PanelLeft" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <SidebarLinkMobile to="/" iconName="Home" text="Home" />
                <SidebarLinkMobile
                  to="/dashboard"
                  iconName="LayoutDashboard"
                  text="Dashboard"
                />
              </nav>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <img
                  src={user.imgSrc}
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Form action="/logout" method="post">
                  <button>Logout</button>
                </Form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          {children}
        </main>
      </div>
    </div>
  );
};

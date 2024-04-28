import { NavLink, useLoaderData } from "@remix-run/react";
import { ReactNode } from "react";
import { Sidebar } from "~/components/portal/sidebar";
import { SidebarLink } from "~/components/portal/sidebarlink";
import { SidebarLinkMobile } from "~/components/portal/sidebarlinkmobile";
import { Button } from "~/components/ui/button";
import { Icon } from "~/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { UserMenu } from "~/components/user/usermenu";
import { loader } from "~/routes/dashboard";

export const PortalLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar>
        <NavLink
          to="/"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground md:h-8 md:w-8"
        >
          <svg
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 125"
            className="h-9 w-9 fill-current"
          >
            <path d="M59.9,2.9c-2.3-1.5-5.1-1.7-8.5-0.7c-3,0.9-5.2,2.3-6.7,4c-4.5,5.2-0.7,12.2-0.7,12.3l0.1,0.2l4.9-2.1c0,0,0.9,0.8,1.5,2.3  l-7.6,4.1c-0.4,0.2-0.6,0.7-0.5,1.2c0,0.1,0.6,2.6,2.2,4.5c1.6,2,3.9,2.9,4,3c0.4,0.2,0.9,0,1.2-0.3l15.5-17.8l0-0.1  C65.3,13.1,64.5,6,59.9,2.9L59.9,2.9z M48.7,29.3c-0.7-0.4-1.7-1-2.5-2c-0.8-1-1.3-2.2-1.6-3l1.1-0.6l3.8,4.6L48.7,29.3z M50.7,27  l-3.4-4.1l3.7-2c0.2,1.2,0,1.8,0,1.8l1.7,1.9L50.7,27z M57.6,16.7c-0.7,0.8-1.9,0.9-2.7,0.2C54,16.2,54,15,54.7,14.1  c0.7-0.8,1.9-0.9,2.7-0.2C58.2,14.7,58.3,15.9,57.6,16.7L57.6,16.7z" />
            <path d="M8.1,74.6c-2.5,0-7.6,5.4-7.6,11.7C0.5,92.6,5,98,8.1,98c2.8,0,7.6-5.3,7.6-11.7C15.6,79.9,10.9,74.6,8.1,74.6L8.1,74.6z" />
            <g>
              <path d="M99,66.4c-0.9-2.4-3.5-3.6-5.9-2.8l-22,7.9l-3.5-7.1l-10.2,5.3L65.2,80c0.9,1.2,2.3,1.8,3.7,1.8c0.5,0,1-0.1,1.5-0.3   l25.8-9.3C98.6,71.4,99.9,68.8,99,66.4z" />
              <path d="M42,74.9l7.7-4l15.9-8.3c2.4-1.4,3.2-3.5,3.6-5.9c1-6.2,2.2-15.8,2.6-19.6l-10.5-2.5c-0.5-0.1-0.8-0.6-0.6-1   c0.1-0.5,0.6-0.8,1-0.6l26.9,6.2c2.1,0.5,4.2-0.8,4.7-3c0.5-2.1-0.8-4.2-3-4.7l-17.2-3.8l0.2-1.3c0.5-3-2-6.3-5.8-6.7   c-3.4-0.4-6.2,1.8-7.4,3.3l-6.5,8.2c-0.4,0.6-0.7,1.4-0.7,2.1l-0.1,20.5l-16.7,12c0,0-0.1,0.1-0.1,0.1c-0.2,0.1-0.4,0.3-0.5,0.5   c-0.1,0.1-0.1,0.1-0.2,0.2c-0.2,0.2-0.4,0.4-0.5,0.7L21.7,91.5c-0.2,0.3-0.3,0.5-0.3,0.6c-0.9,2.1-0.1,4.5,1.9,5.7   c0.7,0.4,1.5,0.6,2.3,0.6c0,0,20.3,0,20.3,0v-1.7H29.2c0.1-0.2,0.3-0.3,0.4-0.5L42,74.9z" />
            </g>
          </svg>
          <span className="sr-only">Home</span>
        </NavLink>
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
          <UserMenu imgSrc={user.imgSrc} />
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          {children}
        </main>
      </div>
    </div>
  );
};

import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, NavLink, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { DropdownMenuItem } from "~/components/ui/dropdown-menu";
import { UserMenu } from "~/components/user/usermenu";
import { authenticator } from "~/services/auth.server";

export const meta: MetaFunction = () => [
  { title: "Kicker Fantasy League (KFL)" },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await authenticator.isAuthenticated(request);

  return user;
};

export default function Index() {
  const user = useLoaderData<typeof loader>();

  return (
    <div className="h-screen w-screen bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Kicker Fantasy League</span>
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 125"
                className="h-10 w-auto fill-white"
              >
                <path d="M59.9,2.9c-2.3-1.5-5.1-1.7-8.5-0.7c-3,0.9-5.2,2.3-6.7,4c-4.5,5.2-0.7,12.2-0.7,12.3l0.1,0.2l4.9-2.1c0,0,0.9,0.8,1.5,2.3  l-7.6,4.1c-0.4,0.2-0.6,0.7-0.5,1.2c0,0.1,0.6,2.6,2.2,4.5c1.6,2,3.9,2.9,4,3c0.4,0.2,0.9,0,1.2-0.3l15.5-17.8l0-0.1  C65.3,13.1,64.5,6,59.9,2.9L59.9,2.9z M48.7,29.3c-0.7-0.4-1.7-1-2.5-2c-0.8-1-1.3-2.2-1.6-3l1.1-0.6l3.8,4.6L48.7,29.3z M50.7,27  l-3.4-4.1l3.7-2c0.2,1.2,0,1.8,0,1.8l1.7,1.9L50.7,27z M57.6,16.7c-0.7,0.8-1.9,0.9-2.7,0.2C54,16.2,54,15,54.7,14.1  c0.7-0.8,1.9-0.9,2.7-0.2C58.2,14.7,58.3,15.9,57.6,16.7L57.6,16.7z" />
                <path d="M8.1,74.6c-2.5,0-7.6,5.4-7.6,11.7C0.5,92.6,5,98,8.1,98c2.8,0,7.6-5.3,7.6-11.7C15.6,79.9,10.9,74.6,8.1,74.6L8.1,74.6z" />
                <g>
                  <path d="M99,66.4c-0.9-2.4-3.5-3.6-5.9-2.8l-22,7.9l-3.5-7.1l-10.2,5.3L65.2,80c0.9,1.2,2.3,1.8,3.7,1.8c0.5,0,1-0.1,1.5-0.3   l25.8-9.3C98.6,71.4,99.9,68.8,99,66.4z" />
                  <path d="M42,74.9l7.7-4l15.9-8.3c2.4-1.4,3.2-3.5,3.6-5.9c1-6.2,2.2-15.8,2.6-19.6l-10.5-2.5c-0.5-0.1-0.8-0.6-0.6-1   c0.1-0.5,0.6-0.8,1-0.6l26.9,6.2c2.1,0.5,4.2-0.8,4.7-3c0.5-2.1-0.8-4.2-3-4.7l-17.2-3.8l0.2-1.3c0.5-3-2-6.3-5.8-6.7   c-3.4-0.4-6.2,1.8-7.4,3.3l-6.5,8.2c-0.4,0.6-0.7,1.4-0.7,2.1l-0.1,20.5l-16.7,12c0,0-0.1,0.1-0.1,0.1c-0.2,0.1-0.4,0.3-0.5,0.5   c-0.1,0.1-0.1,0.1-0.2,0.2c-0.2,0.2-0.4,0.4-0.5,0.7L21.7,91.5c-0.2,0.3-0.3,0.5-0.3,0.6c-0.9,2.1-0.1,4.5,1.9,5.7   c0.7,0.4,1.5,0.6,2.3,0.6c0,0,20.3,0,20.3,0v-1.7H29.2c0.1-0.2,0.3-0.3,0.4-0.5L42,74.9z" />
                </g>
              </svg>
            </NavLink>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {user ? (
              <Button asChild>
                <UserMenu imgSrc={user.imgSrc}>
                  <DropdownMenuItem>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </DropdownMenuItem>
                </UserMenu>
              </Button>
            ) : (
              <Form action="/auth/google" method="post">
                <div className="max-w-sm px-6 sm:px-0">
                  <Button type="submit">
                    <svg
                      className="-ml-1 mr-2 h-4 w-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                    Sign in with Google<div></div>
                  </Button>
                </div>
              </Form>
            )}
          </div>
        </nav>
      </header>

      <div className="relative isolate flex h-full w-full overflow-hidden pt-14">
        <img
          src="https://images.unsplash.com/photo-1529663297269-6d349ec39b57?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover blur-sm brightness-[.25] grayscale"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#38bdf8] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Kicker Fantasy League
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Introducing the ultimate showdown in fantasy football — the
              Kickers Only Fantasy League! This isn't just any fantasy league;
              here, the spotlight shines on the unsung heroes of the gridiron:
              the kickers. Every high-stakes field goal, every game-winning
              extra point, they're all in your hands.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#34d399] to-[#38bdf8] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

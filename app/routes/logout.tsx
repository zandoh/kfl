import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";
import { logout } from "~/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  logout(request);
  await authenticator.logout(request, { redirectTo: "/" });
};

export const loader = async () => redirect("/");

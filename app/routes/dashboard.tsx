import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { PortalLayout } from "~/layouts/_portal";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  });

  return { user };
};

export default function Dashboard() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <PortalLayout>
      <h1>User email: {user.email}</h1>
    </PortalLayout>
  );
}

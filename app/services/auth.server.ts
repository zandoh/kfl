import { User } from "@prisma/client";
import { Authenticator } from "remix-auth";
import { GoogleStrategy } from "remix-auth-google";
import invariant from "tiny-invariant";
import { sessionStorage } from "~/session.server";

export const authenticator = new Authenticator<User>(sessionStorage, {
  sessionKey: "_session",
});

invariant(process.env.GOOGLE_CLIENT_ID, "GOOGLE_CLIENT_ID must be set");
invariant(process.env.GOOGLE_CLIENT_SECRET, "GOOGLE_CLIENT_SECRET must be set");

authenticator.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:3000/auth/google/callback`,
    },
    async ({ profile }) => {
      // @TODO zandoh find or create a user in database
      return profile as unknown as User;
    },
  ),
);

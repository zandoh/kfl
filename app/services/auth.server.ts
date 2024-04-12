import { User } from "@prisma/client";
import { Authenticator } from "remix-auth";
import { GoogleStrategy } from "remix-auth-google";
import invariant from "tiny-invariant";
import { createOAuthUser, getUserByEmail } from "~/models/user.server";
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
      console.log("profile ", profile);
      const existingUser = await getUserByEmail(profile._json.email);

      console.log("existingUser ", existingUser);

      if (existingUser) {
        return existingUser;
      }

      const user = await createOAuthUser({
        openId: profile._json.sub,
        email: profile._json.email,
        firstName: profile._json.given_name,
        lastName: profile._json.family_name,
        imgSrc: profile._json.picture,
      });

      console.log("user ", user);

      return user;
    },
  ),
);

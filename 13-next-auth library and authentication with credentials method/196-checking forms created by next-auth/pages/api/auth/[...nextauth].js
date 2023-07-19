import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      // // name: "credentials",
      // name: "botostart",

      // //  create form
      // credentials: {
      //   email: {
      //     label: "Email",
      //     type: "text",
      //     placeholder: "Enter your email",
      //   },
      //   password: {
      //     label: "Password",
      //     type: "password",
      //   },
      // },
      async authorize(credentials, req) {
        return { name: "Azam" };
      },
    }),
  ],
  pages: {
    //  کاربر را به مسیر تعریف شضده زیر هدایت می کند
    signIn: "/signin"
  }
};

export default NextAuth(authOptions);

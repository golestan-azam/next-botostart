import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignUpPage from "@/template/SignUpPage";

async function SignUp(props) {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <SignUpPage />;
}

export default SignUp;

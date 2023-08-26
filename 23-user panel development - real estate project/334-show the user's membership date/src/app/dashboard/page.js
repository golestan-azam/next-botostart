import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DashboardPage from "@/template/DashboardPage";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

async function Dashboard(props) {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });

  return <DashboardPage createdAt={user.createdAt} />;
}

export default Dashboard;

import Link from "next/link";

function SignupPage(props) {
  return (
    <div className="signin-form">
      <h3>Registration Form</h3>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
      <div>
        <p>Have an account?</p>
        <Link href="signin">Sign in</Link>
      </div>
    </div>
  );
}

export default SignupPage;

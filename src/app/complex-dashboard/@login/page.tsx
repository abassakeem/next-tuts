import Card from "@/components/card";

export default function LoginSlot() {
  return (
    <Card>
      <h1>Login</h1>
      <p>Welcome to the login page!</p>
      <p>Please enter your credentials to log in.</p>
      <form className="flex flex-col gap-4 ">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    </Card>
  );
}

import Card from "@/components/card";
import Link from "next/link";
export default function Notifications() {
  return (
    <Card>
      <h1>Notifications</h1>
      <p>Welcome to the notifications page!</p>
      <Link href="/complex-dashboard/archived">
        <button className="btn  px-2 text-black bg-white rounded-lg">Go to User Analytics</button>
      </Link>
    </Card>
  );
}

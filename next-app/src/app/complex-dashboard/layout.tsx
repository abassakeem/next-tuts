export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          {users}
          {revenue}
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  );
}

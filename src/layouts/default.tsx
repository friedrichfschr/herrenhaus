import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full  ">
      <div className="flex flex-1 w-full  flex-col h-full justify-between items-center">
        <Navbar />

        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}

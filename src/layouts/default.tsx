import { Footer, Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-full bg-blend-darken  backgrounddiv  flex flex-row "
      // style={{ backgroundColor: "rgb(255,255,255,0.8)" }}
    >
      {/* <div className="max-w-1/4 bg-background shrink hidden min-[1800px]:flex grow"></div> */}
      <div
        className={
          "flex flex-1 grow-1 w-full  flex-col h-full justify-between items-center "
          //  + "min-[2300px]:max-w-15/20"
        }
      >
        <Navbar />

        <main className="w-full ">{children}</main>
        <Footer />
      </div>
      {/* <div className="max-w-1/4 bg-background shrink hidden min-[1800px]:flex grow"></div> */}
    </div>
  );
}

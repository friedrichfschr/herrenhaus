import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";
import { GithubIcon, InstagramIcon, MailIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <div className=" h-[calc(100vh-130px)] w-full relative ">
        <Navbar />

        <div className="flex flex-1 flex-col h-full justify-between ">
          <main className="container mx-auto max-w-7xl px-6 pt-6">
            {children}
          </main>
          <footer className="w-full flex items-center justify-center py-6 gap-6 ">
            <Link
              isExternal
              href={siteConfig.links.instagram}
              title="Instagram"
            >
              <InstagramIcon className="text-default-500" />
            </Link>
            <Link isExternal href={siteConfig.links.mail} title="Mail">
              <MailIcon className="text-default-500" />
            </Link>
            <Link isExternal href={siteConfig.links.github} title="GitHub">
              <GithubIcon className="text-default-500" />
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}

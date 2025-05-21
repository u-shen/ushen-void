import Companies from "@/components/Companies";
import Navbar from "@/components/Navbar";
import SocialMedia from "@/components/SocialMedia";
import TechStack from "@/components/TechStack";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen">
      <Navbar />
      <div className="mt-4 grid grid-cols-1 gap-x-4 lg:grid-cols-5">
        <section
          className="col-span-1 scroll-mt-14 lg:col-span-2 lg:border-r-[1px]"
          id="about"
        >
          <div className="lg:fixed lg:w-min">
            <div className="mt-10">
              <h1 className="text-3xl xl:text-4xl">Abderrazzak</h1>
              <h2 className="text-6xl text-sky-300 xl:text-8xl">Farah.</h2>
              <p>
                Or you can call me{" "}
                <span className="text-xl text-sky-300">&quot;USHEN&quot;</span>
              </p>
            </div>
            <h3 className="mt-10 mb-2 text-2xl text-sky-300">Web Developer</h3>
            <Image
              src="/profile.png"
              height={200}
              width={200}
              alt="profile picture"
              className="rounded-full"
            ></Image>
            <div className="mt-4 flex flex-col gap-y-2 text-sm">
              <p>Hi, thanks for looking around :) </p>
              <p>
                I&apos;m a fullstack developer heavily focused on frontend!
                These days work as a freelancer.
              </p>
              <p className="mt-4 flex gap-x-2">
                <Icon
                  icon="ep:location"
                  className="cursor-pointer text-2xl hover:text-blue-300"
                />
                <span>Casablanca, Morocco</span>
              </p>
              <Button
                className="mt-4 w-max border-2 px-3 py-2"
                variant="outline"
              >
                <Icon icon="mdi:email-fast-outline" className="mr-2 text-xl" />
                <Link href="mailto:farah.ushen@gmail.com">Get in Touch</Link>
              </Button>
            </div>
            <div className="mt-5">
              <SocialMedia />
            </div>
          </div>
        </section>
        <section className="col-span-1 mt-6 flex flex-col lg:col-span-3">
          <TechStack />
          <Companies />
          <div className="mb-10 mt-6" id="contact">
            <h4 className="my-4 text-4xl">Say Hi.</h4>
                                <p>
              You could get in touch with me for a project work or social. I
              would defenitly reply :) You could either{" "}
              <Link
                href="mailto:farah.ushen@gmail.com"
                className="text-xl text-blue-300 hover:text-2xl"
              >
                mail
              </Link>{" "}
              me or connect with me any of the below social media
            </p>
            <div className="mt-4">
              <SocialMedia />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

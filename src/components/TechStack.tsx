"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";

const TechStack = () => {
  const [isExpanded, setExpandTech] = useState(false);

  return (
    <>
      <h4 className="text-4xl">What do I do.</h4>
      <p className="mt-3">
        I am a software professional for last{" "}
        <span className="text-xl text-blue-300">4 years!</span> I do fullstack
        development but heavily focused on frontend development. Hands on
        frontend architecture to react development in these years :)
      </p>
      <div className="mt-10 flex items-center gap-x-4">
        <p>Here are few techs I do these days</p>
      </div>
      <Card className="mt-4">
        <CardContent>
          <div className="mt-4 flex flex-col gap-5 transition-all ease-in">
            {!isExpanded && (
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex gap-x-2 align-middle">
                  <Icon icon="devicon:javascript" className="text-2xl" />
                  Javascript
                </li>
                <li className="flex gap-x-2 align-middle">
                  <Icon icon="devicon:typescript" className="text-2xl" />
                  Typescript
                </li>
                <li className="flex gap-x-2 align-middle">
                  <Icon icon="devicon:nodejs" className="text-2xl" />
                  Node
                </li>
                <li className="flex gap-x-2 align-middle">
                  <Icon icon="devicon:react" className="text-2xl" />
                  React
                </li>
                <li className="flex gap-x-2 align-middle">
                  <Icon icon="devicon:nextjs" className="text-2xl" />
                  NextJs
                </li>
                <li className="flex gap-x-2 align-middle">
                  <Icon icon="devicon:prisma" className="text-2xl" />
                  Prisma
                </li>
              </ul>
            )}

            {isExpanded && (
              <>
                <h5 className="my-2 w-max border-b-[1px] border-cyan-50 text-sky-300">
                  Frontend Centric
                </h5>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex gap-x-2 align-middle">
                    <Icon icon="devicon:javascript" className="text-2xl" />
                    Javascript
                  </li>
                  <li className="flex gap-x-2 align-middle">
                    <Icon icon="devicon:typescript" className="text-2xl" />
                    Typescript
                  </li>
                  <li className="flex gap-x-2 align-middle">
                    <Icon icon="devicon:react" className="text-2xl" />
                    React
                  </li>
                  <li className="flex gap-x-2 align-middle">
                    <Icon icon="devicon:nextjs" className="text-2xl" />
                    NextJs
                  </li>
                  <li className="flex gap-x-2 align-middle">
                    <Icon icon="devicon:redux" className="text-2xl" />
                    redux
                  </li>
                  <li className="flex gap-x-2 align-middle">
                    <Icon icon="devicon:tailwindcss" className="text-2xl" />
                    Tailwind
                  </li>
                </ul>
                <h5 className="my-2 w-max border-b-[1px] border-cyan-50 text-sky-300">
                  Backend Centric
                </h5>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex gap-x-2 align-middle">
                    <Icon icon="devicon:nodejs" className="text-2xl" />
                    Node
                  </li>
                  <li className="flex gap-x-2 align-middle">
                    <Icon
                      icon="fa6-brands:node-js"
                      className="text-2xl text-green-300"
                    />
                    Express
                  </li>
                  <li className="flex gap-x-2 align-middle">
                    <Icon icon="devicon:prisma" className="text-2xl" />
                    Prisma
                  </li>
                </ul>
                <h5 className="my-2 w-max border-b-[1px] border-cyan-50 text-sky-300">
                  Mobile development
                </h5>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex gap-x-2 align-middle">
                    <Icon icon="devicon:react" className="text-2xl" />
                    React Native
                  </li>
                  <li className="flex gap-x-2 align-middle">
                    <Icon
                      icon="ion:logo-pwa"
                      className="text-2xl text-green-300"
                    />
                    Web PWA
                  </li>
                </ul>
                <h5 className="my-2 w-max border-b-[1px] border-cyan-50 text-sky-300">
                  UI Frameworks
                </h5>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex gap-x-2 align-middle">
                    <Icon icon="devicon:antdesign" className="text-2xl" />
                    AntDesign
                  </li>
                  <li className="flex gap-x-2 align-middle">
                    <Icon
                      icon="simple-icons:expo"
                      className="text-xl text-green-300"
                    />
                    Expo
                  </li>
                  <li className="flex gap-x-2 align-middle">
                    <Icon
                      icon="devicon:materialui"
                      className="text-2xl text-green-300"
                    />
                    Material UI
                  </li>
                  <li className="flex gap-x-2 align-middle">
                    <Icon
                      icon="simple-icons:cssmodules"
                      className="text-2xl text-green-300"
                    />
                    CSS Modules
                  </li>
                </ul>
                <h5 className="my-2 w-max border-b-[1px] border-cyan-50 text-sky-300">
                  Tools
                </h5>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex gap-x-2 align-middle">
                    <Icon icon="devicon:neovim" className="text-2xl" />
                    NeoVim
                  </li>
                  <li className="flex gap-x-2 align-middle">
                    <Icon
                      icon="devicon:git"
                      className="text-2xl text-green-300"
                    />
                    Git
                  </li>
                  <li className="flex gap-x-2 align-middle">
                    <Icon
                      icon="devicon:linux"
                      className="text-2xl text-green-300"
                    />
                    Scripting
                  </li>
                </ul>
              </>
            )}
            <Button
              asChild
              variant="link"
              className="w-min cursor-pointer"
              onClick={() => setExpandTech(!isExpanded)}
            >
              <p className="underline">
                {isExpanded
                  ? "* click to collapse the tech stack"
                  : "* click to expand the tech stack"}
              </p>
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default TechStack;

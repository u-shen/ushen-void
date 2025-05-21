import { Icon } from "@iconify/react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Companies = () => {
  return (
    <div id="experience" className="scroll-mt-14">
      <h4 className="mt-8 text-4xl">What I did earlier.</h4>
      <p className="my-3">
        Over the past four years, I’ve had the opportunity to lead diverse
        projects independently. Each one has challenged me, contributed to my
        growth, and helped shape who I am today
      </p>
      <p>
        Still these are the{" "}
        <span className="text-blue-300">special projects</span> that hold a
        special place in my heart 💕
      </p>
      <div className="my-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between">
              <p>ADVANCED DASHBOARD</p>
              <div>
                <Image
                  src={"/nextuple_logo.png"}
                  width={100}
                  height={40}
                  alt="nextuple company logo"
                />
              </div>
            </CardTitle>
            <CardDescription>
              Frontend Lead as Freelancer (2019 - 2023)
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-y-2">
            <p>
              - Dashboard with settings management, profile, courses, and much
              more
            </p>
            <p>
              - Data visualization, Alerts and notifications, User-specific
              views
            </p>
            <div className="mt-4 hidden gap-3 md:flex">
              <Badge>React</Badge>
              <Badge>React Query</Badge>
              <Badge>React Hook Form</Badge>
              <Badge>Redux Toolkit</Badge>
              <Badge>Yup</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Icon icon="ep:location" className="text-2xl" />
            <p>Casablanca, Morocco </p>
          </CardFooter>
        </Card>
      </div>

      <div className="my-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between">
              <p>SOCIAL MEDIA APP</p>
              <div>
                <Image
                  src={"/babbel.svg"}
                  width={100}
                  height={40}
                  alt="Babbel company logo"
                />
              </div>
            </CardTitle>
            <CardDescription>
              Sr. engineer & frontend lead (2012 - 2018)
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-y-2">
            <p>
              - Social React application with room chat, post publishing, and
              like system
            </p>
            <p>- Real-time chat, Like system, Authentication system</p>
            <div className="mt-4 hidden gap-3 md:flex">
              <Badge>React</Badge>
              <Badge>Typescript</Badge>
              <Badge>Firebase</Badge>
              <Badge>React-Hook-Form</Badge>
              <Badge>Zod</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Icon icon="ep:location" className="text-2xl" />
            <p>Casablanca, Morocco </p>
          </CardFooter>
        </Card>
      </div>

      <div className="my-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between">
              <p> SAAS EXPENSES TRACKER </p>
              <div>
                <Image
                  src={"/yahoo.png"}
                  width={100}
                  height={40}
                  alt="yahoo company logo"
                />
              </div>
            </CardTitle>
            <CardDescription>
              Sr. engineer & tech lead (2006 - 2012)
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-y-2">
            <p>- Full Stack SaaS expense tracking in Next.js</p>
            <p>- Authentication system, Payment features</p>
            <div className="mt-4 hidden gap-3 md:flex">
              <Badge>Next</Badge>
              <Badge>Typescript</Badge>
              <Badge>Prisma</Badge>
              <Badge>Kind Auth</Badge>
              <Badge>Stripe</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Icon icon="ep:location" className="text-2xl" />
            <p>Casablanca, Morocco </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Companies;

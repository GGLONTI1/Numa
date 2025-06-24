"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { register as registerUser } from "@/lib/appwrite/auth";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: {
    fullName: string;
    email: string;
    password: string;
  }) => {
    try {
      const user = await registerUser(data.email, data.password, data.fullName);
      router.push("/");
    } catch (error: any) {
      console.error("Registration failed:", error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="items-center mb-2">Create an Account</CardTitle>
          <CardDescription>Start your journey with Numa today</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  {...register("fullName", { required: true })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", { required: true })}
                />
              </div>
              <Button
                type="submit"
                className="mt-4 w-full bg-green-600 hover:bg-green-500 text-white"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </CardContent>
        <div className="mt-8 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link href="/signIn" className="font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SignUpForm;

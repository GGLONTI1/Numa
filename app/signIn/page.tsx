import SignInForm from "@/components/forms/SignInForm";

const SignInPage = () => {
  return (
<<<<<<< HEAD
    <div>
      <SignInForm />
=======
    <div className="flex items-center justify-center min-h-[calc(100vh-100px)]  px-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="items-center mb-2">Sign In to Numa</CardTitle>
          <CardDescription>
            Access your legal research dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <div className="mt-8 text-center">
          <p className="text-sm ">
            Don&apos;t have an account?{" "}
            <Link href="/signUp" className="font-medium">
              Sign up
            </Link>
          </p>
        </div>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            <Image src="/google.png" alt="Google Icon" width={15} height={15} />
            Login with Google
          </Button>
        </CardFooter>
      </Card>
>>>>>>> 5048596a31440c2dcebd799120d00341e1df3f1a
    </div>
  );
};

export default SignInPage;

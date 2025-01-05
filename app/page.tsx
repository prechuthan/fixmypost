import { LoginButton } from "@/components/login-button";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react"

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-violet-500">
      <div className="space-y-6 ">
        <h1 className="text-6xl font-bold text-white drop-shadow-md">fixmypost.</h1>
        <p className="text-white text-lg">get viral captions in 20 seconds!</p>
        <div>
          <LoginButton>
            <Button size="lg" variant="secondary">
            <LogIn /> <span className="font-bold">Sign In</span>
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

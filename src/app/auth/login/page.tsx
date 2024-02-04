import { Login } from "@/app/actions/login";
import { LoginForm } from "@/components/loginForm";
import { Card, CardContent } from "@/components/ui/card";

export default function SignIn() {
  return (
    <div className="w-6/12 p-10 mx-auto">
      <Card>
        <CardContent className="pt-8">
          <LoginForm handleSubmit={Login} />
        </CardContent>
      </Card>
    </div>
  );
}

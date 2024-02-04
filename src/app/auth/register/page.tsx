import { Register } from "@/app/actions/register";
import { RegisterForm } from "@/components/registerForm";
import { Card, CardContent } from "@/components/ui/card";

export default function SignUp() {
  return (
    <div className="w-6/12 p-10 mx-auto">
      <Card>
        <CardContent className="pt-8">
          <RegisterForm handleSubmit={Register} />
        </CardContent>
      </Card>
    </div>
  );
}

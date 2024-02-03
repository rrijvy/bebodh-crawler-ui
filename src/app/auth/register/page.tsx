import { Register } from "@/app/actions/register";
import { RegisterForm } from "@/components/registerForm";
import { Card, CardContent } from "@/components/ui/card";
import { RegisterRequestSchema } from "@/models/registerRequestSchema";

export default function SignUp() {
  const handleSubmit = (data: RegisterRequestSchema) => {
    Register(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-6/12 p-10 mx-auto">
      <Card>
        <CardContent className="pt-8">
          <RegisterForm handleSubmit={handleSubmit} />
        </CardContent>
      </Card>
    </div>
  );
}

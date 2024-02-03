import { RegisterForm } from "@/components/registerForm";
import { Card, CardContent } from "@/components/ui/card";

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="w-6/12 p-10 mx-auto">
      <Card>
        <CardContent className="pt-8">
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  );
}

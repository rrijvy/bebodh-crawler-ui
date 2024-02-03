import { Login } from "@/app/actions/login";
import { LoginForm } from "@/components/loginForm";
import { Card, CardContent } from "@/components/ui/card";
import { LoginRequestSchema } from "@/models/loginRequestSchema";

export default function SignIn() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data: LoginRequestSchema = {
      username: (formData.get("email") ?? "") as string,
      password: (formData.get("password") ?? "") as string,
    };

    await Login(data)
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
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}

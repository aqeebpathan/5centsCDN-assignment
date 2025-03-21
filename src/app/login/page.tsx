import LoginForm from "../_components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <section className="m-4 w-xs">
        <header className="mb-10 text-5xl tracking-tight">Login.</header>
        <LoginForm />
      </section>
    </div>
  );
};

export default LoginPage;

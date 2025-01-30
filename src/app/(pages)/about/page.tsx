import LoginButton from "@/components/LoginButton";

export default function About() {
  return (
    <>
      <section className="mt-12">
        <h1 className="text-3xl font-bold text-center mb-6">Bem-vindo ao TaskTide!</h1>
        <p className="text-center text-gray-600">About page</p>
      </section>
      <section className="m-6">
        <LoginButton />
      </section>
    </>
  );
}

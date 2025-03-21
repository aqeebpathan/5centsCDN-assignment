import Link from "next/link";

export default function Home() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center transition-colors delay-200">
      {/* <header className="absolute top-20 text-3xl text-neutral-700/35 font-bold">
          Dynamic Dashboard
        </header> */}
      <div className="m-4 max-w-md">
        <h1 className="text-3xl leading-none">Hey there,</h1>
        <p className="my-4">
          Thank you for visiting! Here’s my solution, where I’ve implemented all
          the features mentioned in the assignment..
        </p>
        <Link
          className="bg-foreground text-background mt-6 flex h-10 items-center justify-center gap-2 rounded-xl border border-solid border-transparent px-4 text-sm font-medium transition-colors hover:bg-[#383838] sm:h-12 sm:w-auto sm:px-5 sm:text-base dark:hover:bg-[#ccc]"
          href="/dashboard"
          rel="noopener noreferrer"
        >
          Go to Dashboard
        </Link>
      </div>
    </section>
  );
}

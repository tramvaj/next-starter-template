export const metadata = {
  title: "template",
  description: "this is a placeholder for a website",
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="text-center space-y-4">
        <h1 className="text-4xl font-semibold">
          template (header)
        </h1>
        <p className="text-base text-gray-600">
          this is a placeholder for a website (this is body)
        </p>
      </main>
    </div>
  );
}

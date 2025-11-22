import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function About() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About Page</h1>
        <p className="text-lg mb-8">
          This is a Next.js project demonstrating reusable components, routing, and TypeScript integration.
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Button Examples</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="small" shape="rounded-sm" onClick={() => alert('Small button clicked!')}>
              Small Button
            </Button>
            <Button size="medium" shape="rounded-md" onClick={() => alert('Medium button clicked!')}>
              Medium Button
            </Button>
            <Button size="large" shape="rounded-full" onClick={() => alert('Large button clicked!')}>
              Large Button
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0D0A07]">
      <div className="text-center">
        <h1 className="text-6xl font-display text-white italic mb-4">404</h1>
        <p className="text-foreground/60">Page not found.</p>
        <a href="/" className="mt-6 inline-block text-primary hover:underline">← Back to home</a>
      </div>
    </div>
  );
}

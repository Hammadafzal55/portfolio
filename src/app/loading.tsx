export default function Loading() {
  return (
    <div className="preloader">
      <div className="preloader-core">
        <div className="preloader-ring" />
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          Next.js
        </p>
        <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
          Loading experience...
        </h2>
      </div>
    </div>
  );
}

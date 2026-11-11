import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiNewspaperLine } from "react-icons/ri";

export default function Review() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <header className="border-b border-stone-800 bg-stone-900 text-white">
        <div className="mx-auto flex w-11/12 max-w-6xl items-center justify-between gap-5 py-5">
          <Link
            href="/"
            className="flex items-center gap-1 text-sm text-stone-300 transition hover:text-white sm:text-base"
          >
            <IoIosArrowRoundBack className="text-2xl" aria-hidden="true" />
            Reading Group
          </Link>
          <span className="hidden text-sm uppercase tracking-[0.24em] text-stone-400 sm:block">
            McGill University
          </span>
        </div>
      </header>

      <section className="border-b border-red-900/15 bg-red-700 text-white">
        <div className="mx-auto w-11/12 max-w-6xl py-14 sm:py-20">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10">
            <RiNewspaperLine className="text-2xl" aria-hidden="true" />
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-red-100">
            Ideas, papers, and perspectives
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            McGill Machine Learning Review
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-red-50 sm:text-xl">
            A home for thoughtful reviews of machine learning research from the McGill community.
          </p>
        </div>
      </section>

      <section className="mx-auto w-11/12 max-w-6xl py-14 sm:py-20" aria-labelledby="articles-heading">
        <div className="mb-9 flex items-end justify-between gap-5 border-b border-stone-300 pb-5">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">Latest issue</p>
            <h2 id="articles-heading" className="text-3xl font-bold sm:text-4xl">Articles</h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-stone-500 sm:block">
            Long-form perspectives on machine learning and its place in society.
          </p>
        </div>

        <div className="flex min-h-64 items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-white px-7 py-14 text-center shadow-sm">
          <div className="max-w-lg">
            <RiNewspaperLine className="mx-auto text-4xl text-red-700" aria-hidden="true" />
            <h3 className="mt-5 text-2xl font-semibold text-stone-900">Articles coming soon</h3>
            <p className="mt-3 leading-relaxed text-stone-600">
              New writing from the McGill machine learning community will appear here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

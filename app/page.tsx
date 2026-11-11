import Image from 'next/image'
import Link from 'next/link';
import { RiDiscordFill, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import getPostMetadata from "../components/getPostMetadata"
import getPresentations from "../components/getPresentations"
import PresentationInfoPopover from "../components/PresentationInfoPopover";
import { getPresentationDescription } from "../components/presentationDescriptions";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.slice(0, 3).map((post) => (
    <div key={post.slug}>
      <Link href={`/blog/${post.slug}`}>
          <p className="text-blue-500 text-lg mb-1">{post.title}</p>
          <p className="text-white/60 text-sm">{post.date}</p>
      </Link>
    </div>
  ));

  const presentations = getPresentations();
  const presentationPreviews = presentations.slice(0, 6).map((pres, index) => (
    <div key={index}>
      <PresentationInfoPopover
        title={pres.title}
        description={getPresentationDescription(pres)}
        titleClassName="mb-1 text-lg font-semibold text-[#ff3737] focus-visible:outline-[#ff3737]"
      />
      {pres.presenter && <p className="text-white/80 text-sm">{pres.presenter}</p>}
      {pres.affiliation && <p className="text-white/60 text-xs">{pres.affiliation}</p>}
      <p className="text-white/50 text-xs mt-1">{pres.date}</p>
    </div>
  ));  

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">

      <div className="relative flex w-full flex-col overflow-hidden bg-black px-4 pb-6 pt-20 text-center sm:px-6 sm:pb-8 md:pt-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(185,28,28,0.14),transparent_62%)]" />

          <nav className="absolute right-4 top-4 z-20 flex flex-row items-center gap-2 sm:right-6 sm:top-5" aria-label="Social links">
            <Link
              href="https://discord.gg/bUQKQZCkDQ"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Join our Discord"
              title="Discord"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-[#5865F2] text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <RiDiscordFill className="text-2xl" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.instagram.com/mcgill.ml/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Visit Instagram"
              title="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <RiInstagramLine className="text-2xl" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/mcgill-ml/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Visit LinkedIn"
              title="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-[#0A66C2] text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <RiLinkedinFill className="text-2xl" aria-hidden="true" />
            </Link>
          </nav>

          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
            <h1
              className="w-full px-2 text-center text-3xl font-bold leading-tight text-[#ff9f9f] sm:px-10 sm:text-4xl md:text-5xl"
              style={{fontFamily: 'Georgia, "Times New Roman", serif'}}
            >
              McGill Machine Learning Group
            </h1>

            <p
              className="mt-3 border-white px-[19px] pb-[23px] text-lg text-white md:text-xl"
              style={{fontFamily: 'Georgia, "Times New Roman", serif'}}
            >
              Investigating the cutting edge of ML.
            </p>

          </div>

          <div className="relative z-10 mx-auto mt-6 w-full max-w-7xl rounded-[2rem] bg-stone-900 p-2.5 shadow-2xl sm:p-3">
            <div className="grid aspect-[1059/433] w-full grid-cols-[minmax(0,1.9fr)_minmax(0,1fr)] grid-rows-2 gap-2 sm:gap-3">
            <figure className="group relative row-span-2 overflow-hidden rounded-2xl border border-white/10 bg-stone-800 shadow-2xl">
              <Image
                src="/images/home-crowd.jpg"
                alt="A crowded McGill machine learning group meeting"
                fill
                priority
                sizes="68vw"
                className="object-cover object-center transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
              <figcaption className="absolute bottom-2 left-2 max-w-[calc(100%-1rem)] rounded-full border border-white/20 bg-black/45 px-1.5 py-0.5 text-left text-[0.42rem] font-semibold uppercase leading-tight tracking-[0.1em] text-white backdrop-blur-sm sm:bottom-4 sm:left-4 sm:max-w-[calc(100%-2rem)] sm:px-3 sm:py-1 sm:text-xs sm:tracking-[0.16em]">
                Hiroki Naganuma (UdeM, Mila)
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-stone-800 shadow-xl">
              <Image
                src="/images/home-buildings.jpg"
                alt="Montreal buildings viewed from above"
                fill
                sizes="32vw"
                className="object-cover object-[center_61%] transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <figcaption className="absolute bottom-1.5 left-1.5 max-w-[calc(100%-0.75rem)] rounded-lg border border-white/20 bg-black/45 px-1.5 py-0.5 text-left text-[0.42rem] font-semibold uppercase leading-tight tracking-[0.1em] text-white backdrop-blur-sm sm:bottom-3 sm:left-3 sm:max-w-[calc(100%-1.5rem)] sm:rounded-xl sm:px-3 sm:py-1 sm:text-[0.65rem] sm:tracking-[0.16em]">
                View from the workshop
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-stone-800 shadow-xl">
              <Image
                src="/images/home-whiteboard.jpg"
                alt="A machine learning presentation at the whiteboard"
                fill
                sizes="32vw"
                className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <figcaption className="absolute bottom-1.5 left-1.5 max-w-[calc(100%-0.75rem)] rounded-lg border border-white/20 bg-black/45 px-1.5 py-0.5 text-left text-[0.42rem] font-semibold uppercase leading-tight tracking-[0.1em] text-white backdrop-blur-sm sm:bottom-3 sm:left-3 sm:max-w-[calc(100%-1.5rem)] sm:rounded-xl sm:px-3 sm:py-1 sm:text-[0.65rem] sm:tracking-[0.16em]">
                Presentation on self-play (RL)
              </figcaption>
            </figure>
            </div>
          </div>
      </div>

      <div className="bg-black px-4 py-4 sm:px-6 sm:py-5">
        <Link
          href="/review"
          className="relative flex aspect-[4/1] w-full items-center justify-center overflow-hidden rounded-3xl bg-[linear-gradient(115deg,#ff3737_0%,#d21f2b_48%,#8b0015_100%)] px-6 text-center text-2xl font-semibold text-white shadow-xl shadow-red-950/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white sm:text-4xl lg:text-5xl"
          style={{fontFamily: 'Georgia, "Times New Roman", serif'}}
        >
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.12),transparent_46%,rgba(0,0,0,0.06))]" />
          <span className="relative z-10">McGill Machine Learning Review</span>
        </Link>
      </div>

      <div className='flex flex-col items-center bg-black py-5 text-white'>

        <div className='homepage-serif flex w-3/4 flex-col items-start justify-start lg:w-1/2 xl:w-1/2 2xl:w-1/2'>

        <div className='mt-10 mb-5'>
          <h2 className="mb-4 flex text-3xl font-bold text-[#ff9f9f]" style={{fontFamily: 'Georgia, "Times New Roman", serif'}}>
            About
          </h2> 
          <p className="text-lg text-white">
            We are the McGill Machine Learning Group, a student-led university organization. Our mandate is investigating cutting-edge advancements in ML research, and experimenting with them in projects.
          </p>
          <p className="mt-6 text-lg text-white">
            We hold weekly student-led sessions discussing ML advancements. A few times a year, we directly invite professors, researchers, and ML startup founders, to hold public seminars for the student community through us.
          </p>
          <p className="mt-6 text-lg text-white">
            We build ML physical projects, such as our automated robot arm, where we implement and fine-tune various policies to achieve generalization.
          </p>
        </div>

          <div className='mt-10 mb-5'>

          <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-4'>

          <div>
            <h2 className="mb-1 flex text-3xl font-bold text-[#ff9f9f]">
              Recent Presentations
            </h2>
            <p className="mb-2 text-sm text-white/60 md:mb-0">Click on any title to view info.</p>
          </div>

          <Link href="/presentations">
            <div className="flex items-center text-lg text-white underline">
              <p>View all presentations</p>
              <IoIosArrowRoundForward className="ml-1 text-2xl"/>
            </div>
          </Link>

          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
              {presentationPreviews}
            </div>
          </div>

          <div className='mt-10 mb-5'>
            <h2 className="mb-4 flex text-3xl font-bold text-[#ff9f9f]">
              Executive Team
            </h2>
            <div className="grid grid-cols-1 gap-x-10 gap-y-4 text-white sm:grid-cols-2">
              <div><p className="text-lg font-semibold">Dani Kalaaji</p><p className="text-sm text-[#ffe0e0]/75">President</p></div>
              <div><p className="text-lg font-semibold">Le Tuan Huy (Tony) Nguyen</p><p className="text-sm text-[#ffe0e0]/75">Vice-President</p></div>
              <div><p className="text-lg font-semibold">Arthur Feld</p><p className="text-sm text-[#ffe0e0]/75">VP External</p></div>
              <div><p className="text-lg font-semibold">Béatrice Richer</p><p className="text-sm text-[#ffe0e0]/75">VP External</p></div>
              <div><p className="text-lg font-semibold">Denis Kul</p><p className="text-sm text-[#ffe0e0]/75">Social Media Coordinator</p></div>
              <div><p className="text-lg font-semibold">Aymen Boustani</p><p className="text-sm text-[#ffe0e0]/75">Presenter</p></div>
              <div><p className="text-lg font-semibold">Georges Hawi</p><p className="text-sm text-[#ffe0e0]/75">Presenter</p></div>
            </div>
          </div>

          <div className='mt-10 mb-5'>

          <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-4'>

          <h2 className="mb-2 flex text-3xl font-bold text-[#ff9f9f] md:mb-0">
            Latest Posts
          </h2>

          <Link href="/blog">
            <div className="flex items-center text-lg text-white underline">
              <p>View all posts</p>
              <IoIosArrowRoundForward className="ml-1 text-2xl"/>
            </div>
          </Link>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 text-lg">
            {postPreviews}
          </div>

          </div>

          <div className='mt-10 mb-5 pb-14'>
          <h2 className="mb-4 flex text-3xl font-bold text-[#ff9f9f]">
            Contact
          </h2> 
            <p className="text-lg text-white">
            We&apos;re a small, bootstrapped, student-run organization. 
            If you&apos;d like to get involved, please &#8239;
            <Link href="https://discord.gg/cgWxx94WTg" target="_blank" className='text-blue-500 underline'>join our Discord</Link> and stay tuned for updates.
            </p>
          </div>
          
        </div>
      </div>

    </main>
  )
}

import Link from 'next/link';
import getPresentations from "../../components/getPresentations"
import PresentationInfoPopover from "../../components/PresentationInfoPopover";
import { getPresentationDescription } from "../../components/presentationDescriptions";


function Presentations() {
    const presentations = getPresentations();

    // Function to determine season and year from date
    const getSeason = (dateStr: string) => {
        const [year, month] = dateStr.split("-").map(Number);

        if (month >= 1 && month <= 4) {
            return `Winter ${year}`;
        } else if (month >= 5 && month <= 8) {
            return `Summer ${year}`;
        } else {
            return `Fall ${year}`;
        }
    };

    // Group presentations by season
    const groupedPresentations: { [key: string]: typeof presentations } = {};
    presentations.forEach((pres) => {
        const season = getSeason(pres.date);
        if (!groupedPresentations[season]) {
            groupedPresentations[season] = [];
        }
        groupedPresentations[season].push(pres);
    });

    // Render grouped presentations
    const presentationList = Object.keys(groupedPresentations).map((season) => (
        <div key={season} className="mb-10">
            <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">{season}</h3>
            <div className="flex flex-col space-y-3">
                {groupedPresentations[season].map((pres, index) => (
                    <div key={index} className="rounded-r-xl border-y border-r border-white/[0.06] border-l-2 border-l-[#7f1d1d] bg-white/[0.025] px-4 py-4 transition-colors hover:bg-white/[0.045]">
                        <PresentationInfoPopover
                            title={pres.title}
                            description={getPresentationDescription(pres)}
                            titleClassName="mb-2 text-xl font-semibold leading-snug text-[#f2a3a3] transition-colors hover:text-[#ffc0c0] focus-visible:outline-[#f2a3a3] sm:text-2xl"
                        />
                        {pres.type ? (
                            <span className="mb-2 inline-block rounded border border-[#5f242a] bg-[#2a1114] px-2 py-1 text-xs font-semibold text-[#eab0b0]">
                                {pres.type}
                            </span>
                        ) : pres.guestPresenter ? (
                            <span className="mb-2 inline-block rounded border border-[#5f242a] bg-[#2a1114] px-2 py-1 text-xs font-semibold text-[#eab0b0]">
                                Guest Presenter
                            </span>
                        ) : (
                            <span className="mb-2 inline-block rounded border border-white/10 bg-white/[0.06] px-2 py-1 text-xs font-semibold text-slate-300">
                                Reading Group Discussion
                            </span>
                        )}
                        {pres.presenter && <p className="text-base font-semibold text-white/90">{pres.presenter}</p>}
                        {pres.affiliation && <p className="text-slate-600 text-sm">{pres.affiliation}</p>}
                        <p className="text-slate-500 text-sm mt-1">{pres.date}</p>
                        {pres.paper && (
                            <a
                                href={pres.paper}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 inline-block text-sm text-[#f2a3a3] hover:text-[#ffc0c0] hover:underline"
                            >
                                📄 View Paper
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    ));

    return (
      <main className="flex min-h-screen flex-col bg-black text-white">

        <div className='flex flex-col items-center justify-center w-full text-center'>

            <div className='flex row justify-between pt-4 pb-4 w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
            <Link href="/">
                <p className="flex items-center text-xl text-white hover:underline">mcgill.ml</p>
            </Link>

            <Link href="/">
                <p className="flex items-center text-lg text-white hover:underline">Home</p>
            </Link>
            </div>

            <hr className="w-full border-gray-700"/>
        </div>

        <div className='flex flex-col items-center w-full mt-10 pb-14'>
            <div className='flex w-[86%] flex-col items-left justify-left sm:w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                <p className='text-3xl mb-1 text-white'>Presentations</p>
                <p className="mb-5 text-sm text-slate-500">Click on any title to view info.</p>

                <div className="flex flex-col">
                {presentationList}
                </div>

            </div>
        </div>
    </main>
    )
  }

  export default Presentations;

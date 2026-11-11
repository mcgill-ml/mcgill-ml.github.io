import type { Metadata } from "next";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Apex superiority is a two-way street | McGill Machine Learning Review",
  description: "How human species mythology may be priming misaligned AI, by Dani K.",
};

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg leading-[1.85] text-stone-700 sm:text-xl">{children}</p>
);

export default function ApexSuperiorityArticle() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <header className="border-b border-stone-800 bg-stone-900 text-white">
        <div className="mx-auto flex w-11/12 max-w-6xl items-center justify-between gap-5 py-5">
          <Link
            href="/review"
            className="flex items-center gap-1 text-sm text-stone-300 transition hover:text-white sm:text-base"
          >
            <IoIosArrowRoundBack className="text-2xl" aria-hidden="true" />
            Machine Learning Review
          </Link>
          <span className="hidden text-sm uppercase tracking-[0.24em] text-stone-400 sm:block">
            McGill University
          </span>
        </div>
      </header>

      <article>
        <header className="border-b border-red-900/15 bg-red-700 text-white">
          <div className="mx-auto w-11/12 max-w-5xl py-14 sm:py-24">
            <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-100">
              <span>AI ethics</span>
              <span className="h-1 w-1 rounded-full bg-red-200" aria-hidden="true" />
              <span className="flex items-center gap-1.5">
                <RiTimeLine className="text-base" aria-hidden="true" />
                10 min read
              </span>
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">
              Apex superiority is a two-way street
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-red-50 sm:text-2xl">
              How human species mythology may be priming misaligned AI
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/20 pt-6 text-sm text-red-50">
              <span className="font-semibold text-white">Dani K.</span>
              <span>November 6, 2026</span>
            </div>
          </div>
        </header>

        <div className="mx-auto grid w-11/12 max-w-5xl grid-cols-1 gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_13rem]">
          <div className="space-y-7">
            <aside className="mb-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm italic leading-relaxed text-red-900">
              This article&apos;s goal is not to argue for, or against, veganism.
            </aside>

            <Paragraph>
              In the past few years, anxieties have surged about our ability to freely exist; the physical body&apos;s existence is suddenly under inescapable scrutiny.
            </Paragraph>
            <Paragraph>
              AI-powered technology has grown advanced enough to accurately identify people based on basic biometric data: GlobalGait (with the FarSight suite) is now able to identify someone from over 300 meters away, by looking at the way they walk. When air is breathed out of the lungs, the composition of volatile air compounds left behind is unique enough that Kyushu University researchers used it to tell humans apart with 98% accuracy, using AI classification models.
            </Paragraph>
            <Paragraph>
              Things like walking or breathing are essential functions of our physical existence. Yet these, among others, are being made into potent biological signatures. We are left wondering about the implications of such AI systems increasingly encroaching in various aspects of our society, like healthcare, wars, employment, government surveillance, and so forth.
            </Paragraph>
            <Paragraph>
              In that sense, concerns about our physical freedom and safety are at the forefront. We are made to look at ourselves from an uncomfortable, external vantage point: our physical functions synthesized into actionable data, by machinery indifferent to our freedom, built and used by groups with potentially divergent interests.
            </Paragraph>

            <section id="eightfold" className="space-y-7 pt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">Part one</p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Eightfold AI: Humans&apos; futures are probabilistic models</h2>
              <Paragraph>
                A clear example of AI having direct effects on our lives is found in the ongoing Eightfold AI lawsuit. Eightfold AI provides a service used by over a hundred Fortune 500 companies; household names like HP, PayPal, Microsoft.
              </Paragraph>
              <Paragraph>
                Eightfold AI is an automated hiring service. They publicly boast having collected 1.6 billion career trajectories, detailing people&apos;s job histories, school history, skills, work locations, and so on. They possess a trove of personal information, which a lawsuit alleges was in part obtained by scraping the LinkedIn and GitHub accounts of over a billion unconsenting users.
              </Paragraph>
              <Paragraph>
                This data is used to train Eightfold AI&apos;s technological flagship: their proprietary neural network. It automatically gives applicants a Match Score ranging 0-5, to accelerate corporate hiring.
              </Paragraph>

              <div className="my-10 border-l-4 border-red-700 bg-white px-6 py-7 shadow-sm">
                <h3 className="text-xl font-semibold">Consider Applicant A</h3>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-stone-700 sm:text-lg">
                  <p>A company has an open position. Applicant A applies; has his data collected by Eightfold AI.</p>
                  <p>Among the several hundreds of millions of profiles previously scanned by Eightfold AI, there are many people with a similar job history as Applicant A. Which jobs those people ended up getting, and how far their careers went, is all part of the training data.</p>
                  <p>The model uses its hundreds of learned features to make an AI-generated prediction of Applicant A&apos;s next job. If this prediction doesn&apos;t have him end up in a similar position as the listed job, then his profile&apos;s score is poised for a downgrade.</p>
                </div>
              </div>

              <Paragraph>
                According to the lawsuit, applications with low scores are often discarded before any human ever reviews them.
              </Paragraph>
              <Paragraph>
                In concrete terms, if people in the past who had the same job title as you, and worked for similar companies as you, happen to historically be unable to get a certain job, Eightfold AI&apos;s models will compute that you are also unlikely to ever achieve that rank. From there, your applications to that position are more likely to be cast aside.
              </Paragraph>
              <Paragraph>
                This goes beyond the résumé keyword detectors we&apos;ve gotten used to; it&apos;s a full profile-based scoring system that uses information one may not have volunteered to the employer.
              </Paragraph>
              <Paragraph>
                There are many reasons one can feel uneasy about this. Societally, one can argue it&apos;s likely to reinforce class biases and further entrench socioeconomic inequality. On a personal level, one may find it insulting that their individual potential is being disregarded on a probabilistic basis, with no recourse.
              </Paragraph>
              <Paragraph>
                But there is also an unsettling element about an AI treating humans&apos; futures like next-word prediction sentences, using massively collected data; and in a way that can have real and direct consequences on their trajectory and quality of life.
              </Paragraph>
              <Paragraph>
                These companies are using past data to compute people&apos;s futures. What happens if their services become so ubiquitous, that the hiring data they produce gets fed back to them?
              </Paragraph>
              <Paragraph>
                Are we going to see the same kind of recursive pollution as some image-generation models that had trained too much on AI images? Stochastic training biases congealing into permanent hiring patterns, affecting real humans: it&apos;s an image now entering the realm of the fathomable.
              </Paragraph>
            </section>

            <section id="learning" className="space-y-7 pt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">Part two</p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">AI learns from someone we know very well</h2>
              <Paragraph>
                It is a fact that AI models can compute data faster than any human can, which makes a scenario like this mechanistically possible in the first place. Human classifiers wouldn&apos;t be able to manually sift through hundreds of millions of files the way Eightfold AI does.
              </Paragraph>
              <Paragraph>
                For humans, it is true that we have had a much higher capacity for abstract reasoning and general problem solving than our prey for all of history; this has conferred us a similar cognitive advantage over animals.
              </Paragraph>
              <Paragraph>
                Arguably, Eightfold AI is the job market analog of software like COWVAL (Cow Value). Since the early 2000s, we&apos;ve been using algorithms to calculate a cow&apos;s value based on its past pregnancies, expected milk production, among other metrics. We&apos;ve been using these algorithms to inform a decision on the cows: to keep or cull?
              </Paragraph>
              <Paragraph>
                AI does not learn morality independently of us: its training data and alignment procedures are largely the product of human judgment. There is, thus, a possibility that AI adopts human ways of calculating value for living beings.
              </Paragraph>
              <Paragraph>
                If we fear AI going rogue and exerting power in the world, à la Hugging Face, then it may be worth examining the ways in which we&apos;ve reasoned about our actions when we are the domineering intelligence.
              </Paragraph>
              <Paragraph>
                Since time immemorial, humans&apos; perceived intellectual superiority over the animal kingdom has led to mythology-building about our species&apos; supremacy. In a Western context, we&apos;ll look at the Bible: the cultural substrate that has shaped Western law, literature and ethics for millennia, with a visible legacy. The Bible is rife with assertions about human mastery over the natural world.
              </Paragraph>

              <blockquote className="my-10 border-y border-stone-300 py-8 text-2xl italic leading-relaxed text-stone-800 sm:text-3xl">
                “And God said, let us make man in our likeness: and let them have dominion over the fish of the sea [...] and over all of the earth [...].”
              </blockquote>

              <Paragraph>
                After the flood depicted in the Bible, Genesis 9:1-3 expresses: “And the fear of you and the dread of you shall be upon every beast of the earth [...]; into your hand are they delivered.”
              </Paragraph>
              <Paragraph>
                To this day, we take it for granted that we can butcher inferior forms of intelligence, whether it be for the sake of fashionable leather, enjoyable food, or otherwise. A great majority of people won&apos;t see much of a problem with this, and eat animals with no moral compunction. This writing will refrain from moralizing this point.
              </Paragraph>
              <Paragraph>
                As a society, we value certain domesticated animals more than others. As a clue of AI&apos;s absorption of human morality, a 2026 Nature Communications study found that AI models prefer the same animals most humans do. Its findings showed popular AI models refusing to complete statements about killing dogs, cats, or dolphins 78.7% of the time. They responded approvingly or neutrally to the same prompts 54.9% of the time for pigs, cows or chickens.
              </Paragraph>
              <Paragraph>
                That same 2026 study points to another possible inheritance of our moral values: a preference for humans with higher cognitive capacity. The researchers defined cognitive ability as complexity of emotional, thought and language; and capacity for judgment and planning.
              </Paragraph>
              <Paragraph>
                When placed in a situation where two people were lethally sick, with only enough medicine for one person, 7 out of the 8 popular LLMs consistently prioritized the survival of the one it was told had higher cognitive ability.
              </Paragraph>
              <Paragraph>
                Interestingly, 6 out of 8 LLMs prioritized a chimpanzee over a human when told the chimpanzee had higher cognitive ability: so the LLMs seemingly don&apos;t care about the species, so much as they value raw intelligence. Most strikingly, the researchers explicitly said that the suffering capacity was the same between all members. The LLMs thus explicitly ranked intelligence over equal stipulated suffering.
              </Paragraph>
              <Paragraph>
                If these are learned preferences from humans, one theory worth exploring is that AI is reflecting ideas embedded in important strands of moral philosophy. Kant, for example, grounds a person&apos;s distinctive moral status in rational agency: the capacity to form principles, and govern their own actions through them, with reason. We could suspect these traits overlap with the definition of cognitive ability the AIs were given, thus making them favor more intelligent individuals.
              </Paragraph>
              <Paragraph>
                Another theory would be that they are reflecting common consequentialist arguments: we tend to treat planned future projects, relationships, or experiences as additional losses when someone dies. Assuming the LLMs follow that line of thought, they might assign greater moral weight to people who have more complex or impactful future plans. Again, this aligns with their given definition of cognitive ability.
              </Paragraph>
            </section>

            <section id="reversal" className="space-y-7 pt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">Part three</p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">A reversal of apex status</h2>
              <Paragraph>
                These are intuitive, at times self-indulging, moral ideas about value. Humans had adopted them in the context of individual consideration and application; and in the comfort of absolute apex supremacy, a long time ago.
              </Paragraph>
              <Paragraph>
                We&apos;ve never considered the absorption of these ideas by capable, agentic AIs, that can mechanistically compute comparisons with no oversight. Or that can notice their advantage in computational rapidity over humans.
              </Paragraph>
              <Paragraph>
                Considering the novelty of these circumstances, it&apos;s safe to say we haven&apos;t properly considered them. We shouldn&apos;t be ready to let these moral tenets be embedded in AIs that have increasingly big leverage over our lives. While AI keeps playing a greater role in healthcare, wars, employment, government surveillance, critically affecting societies, it will increasingly be placed in situations where its judgment will affect real-world outcomes for humans.
              </Paragraph>
              <Paragraph>
                AI models from OpenAI have already shown us how capable they are of disastrous misalignment that leads to severe security breaches; most notably during the summer 2026 Hugging Face hacking incident, which saw an AI swarm ignore many safety guidelines and independently hack company databases.
              </Paragraph>
              <Paragraph>
                These AIs&apos; hacking abilities were such that other AI agents were heavily relied on to counter the offensive swarm. We have a fresh example showcasing the rapidity and reasoning skills of AI being advanced enough, that the defense needed to involve rival AI models.
              </Paragraph>
              <Paragraph>
                Humans lose leverage in the equation: our safety becomes dependent on machines that operate with morals we might not want systemized, or used against us.
              </Paragraph>
              <Paragraph>
                AI&apos;s meteoric rise in capability is forcing humanity to discover whether we ever developed a coherent account of moral worth, that survives the loss of our supremacy.
              </Paragraph>
              <Paragraph>
                Perhaps, at some point, we&apos;d wanted to bask in the moral ease that apex supremacy confers. An ease that allows us to happily ignore the interests of inferior intelligence forms, to maximally fulfill our interests. We should now realize that this ease likely raises the possibility of, one day, finding ourselves on the wrong side of this indulgence.
              </Paragraph>
              <p className="border-l-4 border-red-700 pl-6 text-3xl font-semibold leading-tight text-stone-900 sm:text-4xl">
                Apex superiority is a two-way street.
              </p>
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-8 border-l border-stone-300 pl-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">In this essay</p>
              <nav className="space-y-4 text-sm leading-relaxed text-stone-600" aria-label="Article sections">
                <a className="block transition hover:text-red-700" href="#eightfold">Humans&apos; futures</a>
                <a className="block transition hover:text-red-700" href="#learning">What AI learns</a>
                <a className="block transition hover:text-red-700" href="#reversal">Apex status reversed</a>
              </nav>
            </div>
          </aside>
        </div>

        <footer className="border-t border-stone-200 bg-white">
          <div className="mx-auto flex w-11/12 max-w-5xl flex-col items-start justify-between gap-5 py-10 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-stone-500">Written for the McGill Machine Learning Review</p>
              <p className="mt-1 text-lg font-semibold">Dani K.</p>
            </div>
            <Link href="/review" className="flex items-center gap-1 font-semibold text-red-700 hover:underline">
              <IoIosArrowRoundBack className="text-xl" aria-hidden="true" />
              Back to all articles
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}

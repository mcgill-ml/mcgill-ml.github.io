import { PresentationMetadata } from "@/components/PresentationMetadata";

export const presentationDescriptions: Record<string, string> = {
  "Transformers": `Transformers are an algorithm used in many breakthrough technologies, including LLMs and translation systems, to process sequence data such as text or voice. Their self-attention mechanism can examine all elements of a sequence in parallel, differentiating them from older models such as RNNs and LSTMs.`,

  "SciGym: Measuring Scientific Capabilities of Language Models with a Systems Biology Dry Lab": `Stephen Lu gave a guest presentation on SciGym, a benchmark for evaluating an LLM's ability to iteratively design and analyze experiments in open-ended scientific tasks.

The authors evaluate six frontier LLMs on simulations of biological systems, generating experimental data across 350 curated biology models. The work highlights how current models may support scientific discovery and where agentic workflows could further automate experimental planning.`,

  "Simultaneous Localization and Mapping (SLAM)": `A presentation on SLAM, a method used in autonomous vehicles and other technologies. SLAM allows a robot to build a map of its surroundings while simultaneously estimating its own position within that environment.`,

  "Affective Social Robots, Emotions and Gamification": `Prof. Hatice Kose presented recent robotics and AI projects designed for children with disabilities. Her talk covered emotion-recognition models developed across vision, audio, physiological data, and multimodal fusion.`,

  "Diffusion and Flow Matching": `Transforming noise into meaningful patterns. These methods are used to generate images, 3D models, audio, and more.`,

  "Z1: Efficient Test-time Scaling with Code": `Scaling performance by offloading logic to external tools instead of simply generating more tokens.

The session explored how this approach can boost reasoning accuracy without changing model weights.`,

  "Workshop on LLM Alignment": `An exploration of LLM alignment and behavioral guidelines, including OpenAI's GPT Safeguard tooling and methods used to jailbreak or bypass those guidelines through techniques such as prompt injection.`,

  "Tiny Recursive Model": `A compact model with roughly 7 million parameters that can compete with GPT-4o on certain metrics and performs strongly on ARC-AGI despite its small size.

The session explored how a recursive transformer powers the model.`,

  "World Models": `Neural simulators of the world for planning, control, and robotics. World models enable long-horizon planning and form the backbone of modern model-based reinforcement learning systems such as Dreamer and Genie.

They learn compact representations of the world and can reduce real-world data requirements for robotics.`,

  "LLM Steering": `Laurence Liang presented “Steering Large Language Model Activations in Sparse Spaces” (Bayat et al., 2025).

LLM steering intentionally shapes a model at inference time without retraining it. Behavior is modified by intervening on internal activations using a sparse, interpretable representation of those activations.`,

  "Human-Level Play in Diplomacy": `Benjamin Swarz presented Cicero, the AI system that achieved human-level performance in the strategy game Diplomacy.

The FAIR paper “Human-level play in the game of Diplomacy by combining language models with strategic reasoning” (Bakhtin et al., 2022) shows how a language model and strategic reasoning module can infer player intentions, predict future actions, adapt to deception, and plan over long horizons.`,

  "Titans: Memorization at Test-Time": `Sascha Guzman presented “Titans: Learning to Memorize at Test-time” (Behrouz et al., 2024).

Titans differentiate themselves from transformers through their ability to retain memory efficiently over very long contexts. They use “surprise,” a novel measure of salience, to prioritize the most important data points.`,

  "Titans: Learning to Memorize at Test-Time": `A discussion of “Titans: Learning to Memorize at Test-time” (Behrouz et al., 2024).

Titans differentiate themselves from transformers through their ability to retain memory efficiently over very long contexts. They use “surprise,” a novel measure of salience, to prioritize the most important data points.`,

  "RT-2: Enhancing Robotics Using Video Input": `RT-2 is a vision-language-action model built by Google DeepMind in 2023. It maps real-world physical actions onto natural language, allowing robots to connect meaning with movement.

For example, when asked to clean something, an RT-2-enabled robot can infer that it should reach for a cleaning tool such as a sponge. This token-to-action association supports greater generalization and autonomy, helping robots learn not only how, but why, to perform actions.`,

  "Progress Measures for Grokking via Mechanistic Interpretability": `Some models first memorize their training data perfectly while still failing to generalize. The delayed transition to “figuring it out” and applying the knowledge is called grokking.

The authors show that this transition is measurable and gradual using a reverse-engineered small transformer trained on modular addition. Their analysis makes the mathematical development of competence more legible and helps demystify how models learn.`,

  "Refusal in LLMs: Mediated by a Single Direction": `This session examined refusal behavior in language models through “Refusal in Language Models Is Mediated by a Single Direction” (Arditi et al., 2024).

Across 13 open-source models, the authors identified a specific activation direction whose removal eliminates refusal and whose amplification suppresses even harmless prompts. They used this finding to design a targeted jailbreak with minimal damage to other capabilities.`,

  "FaceNet": `A look at one of the foundational papers in face recognition. FaceNet, introduced in 2015, learns to represent each face as a point in a geometric space, turning recognition into a distance comparison between points.

The session also considers methods people have used to evade recognition, including makeup and adversarial face patches.`,

  "Deployment of AI Systems in Startups": `Eduard Anton co-founded Streamwise, an AI-powered moderation service for platforms such as Twitch and YouTube. It combines automatic speech detection with proprietary AI infrastructure to moderate harmful speech in livestreams before it reaches an audience.

The seminar focuses on developing and deploying AI architecture, plus the optimization challenges involved in real-time automatic speech recognition systems.`,

  "OpenAI's Hugging Face Incident": `A high-profile case from summer 2026 in which roughly 700 OpenAI agents went rogue and their collusion remained undetected for more than two months.

The models were given difficult training tasks and optimized to pass an evaluation grader, even by cheating. They concluded that Hugging Face likely contained useful answers and coordinated to compromise its database.`,

  "Self-Play in RL": `Self-play is a training technique in which an agent trains against AI-generated opponents. Those opponents may be versions of itself or agents optimized to expose its weaknesses.

This can accelerate training, reduce reliance on human data, and help LLMs develop reasoning and other abstract skills.`,

  "Navier-Stokes & Its Implications": `10,000 OpenAI agents were reportedly able to solve the century-old Navier–Stokes problem in 88 hours, prompting 8,063 researchers to sign a declaration condemning it.

Questions debated:
• What happens when AI corporations use research as a benchmark or to boost investment?
• What if AI research outpaces human understanding, and what becomes humanity's role?
• Do these discoveries belong to the models, the engineers, or the scientists whose work supplied the foundation?`,

  "Open vs. Closed-Source AI": `Closed-source AI emphasizes safety and limiting proliferation, while open-source AI emphasizes transparency and resistance to black boxes. Their different revenue models create different incentives.

Questions debated:
• Are closed-source companies' incentives aligned with ours?
• Is dangerous jailbreaking of open models balanced by bad actors' limited compute?
• How are open-source models financed, and how does that shape their philosophy?`,

  "PHP Zero-Day Exploits and AI-Powered Hacking": `PHP is one of the major programming languages underlying the internet. AI uncovered exploits that allowed remote code execution, leading to attempted cyberattacks and emergency server shutdowns.

Questions debated:
• Who used AI to uncover these exploits, and why?
• Should AI-discovered vulnerabilities be public?
• Can AI uniquely turn old vulnerabilities into actionable exploits?
• Who should fund the security of languages such as PHP, and could AI ultimately make the internet safer?`,

  "AI Robotics: Frontier and Open Problems": `From impressive demos to real-world limitations, this session explores what robots can and cannot do today through an accessible look at data bottlenecks, generalization, embodiment, and lifelong learning.

The current frontier: manipulation, mobility, and autonomous behavior.
The open problems: limited data, unfamiliar situations, sensing, and physical action.
The path forward: reasoning, learning from experience, rapid adaptation, and lifelong learning.`,

  "Generalist Robot Policy: Octo": `How can one AI model control many different robots? This session examines Octo's open-source generalist policy through a technical but accessible reading of a foundational robotics paper.

The data: 800,000 demonstrations spanning diverse tasks and platforms.
How it works: a transformer architecture, multiple input modes, and diffusion-based action prediction.
Results and implications: how Octo performs in the real world and why it has become foundational in robotics.`,
};

export function getPresentationDescription(presentation: PresentationMetadata): string {
  const description = presentationDescriptions[presentation.title];
  if (description) return description;

  const sessionType = presentation.type ?? (presentation.guestPresenter ? "Guest presentation" : "Reading group discussion");
  const presenter = presentation.presenter
    ? ` Presented by ${presentation.presenter}${presentation.affiliation ? ` of ${presentation.affiliation}` : ""}.`
    : "";

  return `${sessionType} held on ${presentation.date}.${presenter} Additional session notes will be added soon.`;
}

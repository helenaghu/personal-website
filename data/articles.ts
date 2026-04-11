export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
};

export const articles: Article[] = [
  {
    slug: "on-paying-attention",
    title: "On Paying Attention",
    description:
      "There is a kind of looking that goes deeper than observation. On the practice of slowing down to see.",
    date: "2024-11-12",
    content: `There's a particular quality of light in the late afternoon that most people walk past without noticing. It doesn't announce itself. It arrives slowly, spreading across floors and walls like something being remembered rather than seen for the first time.

I've been thinking about attention — about what it means to really look at something, or listen to someone, or read a book slowly enough that it has time to change you.

We live in an era that rewards speed. The faster you process information, the more you can consume, the more productive you appear. But certain things resist speed. A painting requires you to stand in front of it long enough that it can start speaking. A friendship deepens only through accumulated hours, not efficiency hacks.

The writer Annie Dillard said: "How we spend our days is, of course, how we spend our lives." What she's pointing at is the weight of ordinary time — that the texture of a Tuesday afternoon is not less real than a milestone or a crisis.

I've been practicing something I think of as deliberate attention: sitting with a cup of coffee without looking at my phone, finishing a thought before starting another, taking a longer walk home to see the same streets differently. None of it is dramatic. None of it shows up anywhere important.

But something accumulates. A kind of presence. A richer sense of being somewhere rather than moving through somewhere. The goal isn't productivity or mindfulness as a brand. It's just to be more fully here — to let ordinary life have the chance to be interesting before reaching for something else.`,
  },
  {
    slug: "notes-on-keeping-a-notebook",
    title: "Notes on Keeping a Notebook",
    description:
      "A notebook is not a diary. It is something more like a conversation with a future self you can't quite predict.",
    date: "2024-09-03",
    content: `I've kept notebooks since I was seventeen. Not journals exactly — I'm not consistent enough for that. More like a place to put things that need somewhere to go.

There are different kinds of notebooks for different purposes. Some people fill them with to-do lists and plans. Mine tend to accumulate observations, fragments of sentences, things overheard, quotations that seemed important at the time, small drawings of chairs or window frames.

The writer Joan Didion wrote that she kept a notebook to remember not what happened but how it felt to be a certain person at a certain time. That distinction matters. A notebook isn't a record of events. It's a record of consciousness — partial, slanted, unreliable in exactly the ways that make it true.

I return to old notebooks sometimes. The person who wrote those entries feels familiar but distant, like meeting someone you used to know. Their preoccupations surprise me. Things I thought were passing phases turn out to have been persistent. Things I was sure would matter have vanished entirely.

What I've come to value about the practice: it makes you notice. When you're in the habit of writing things down, you start to look more carefully, listen more closely. You develop a certain alertness, not anxious but curious — the sense that anything might be worth recording.

You don't need a beautiful notebook. You don't need to write every day. You just need to put something down, honestly, and keep doing it. The value isn't in any single entry. It's in the long conversation with yourself.`,
  },
  {
    slug: "in-praise-of-walking",
    title: "In Praise of Walking",
    description:
      "Walking is the most honest form of thinking I know. The body moves and the mind loosens.",
    date: "2024-06-20",
    content: `Almost every idea I've had worth having came to me while walking.

This isn't mystical — it's probably something to do with the rhythm of footsteps, the low-grade distraction of navigating space, the fact that you can't easily check your phone while crossing a street. Walking puts the mind into a particular gear: not focused, not unfocused, but something looser and more associative than either.

Philosophers have always walked. Aristotle's school was called the Peripatetics — the walkers. Nietzsche said that only thoughts that come while walking have any value. Thoreau wrote an entire essay on the subject. There's a reason for this. The walk creates just enough friction to dislodge fixed thinking.

I've noticed that the best walks have no destination or a very modest one. Walking to somewhere specific tends to collapse the attention into the goal. Walking with only a direction — south, toward the river, wherever the street leads — allows for real wandering. You see more. You notice more. You arrive at thoughts rather than forcing them.

The city is best explored on foot. You develop an intimate knowledge of streets that no map can give you: where the bakery with no sign is, which block is quietest at noon, the courtyard you discovered by accident that nobody seems to know about. This knowledge is slow and proprietary and useless in almost any practical sense, which is precisely why it feels valuable.

Walk more. Slowly. Without headphones if you can stand it. The world is full of things to notice.`,
  },
  {
    slug: "the-texture-of-cities",
    title: "The Texture of Cities",
    description:
      "What makes a city feel like a place rather than a backdrop. Notes from years of looking.",
    date: "2024-03-14",
    content: `I've been thinking about what makes certain cities feel inhabited in a way others don't.

It's not beauty, exactly. Some of the most compelling cities are not beautiful at all — they're worn, layered, slightly illegible. What they have is texture: the sense that time has moved through them and left traces. A worn stone step. Paint over paint over plaster. A building that has been four different things. These marks are not failures to maintain but a kind of memory.

The urban theorist Jane Jacobs wrote about the value of old buildings, meaning buildings that are not new — not historic necessarily, just not recently constructed. Old buildings are cheaper, which means they can house uses that couldn't exist in expensive new space: the eccentric bookshop, the cheap restaurant, the music rehearsal studio. Newness tends toward the generic because it prices out everything that doesn't perform well immediately.

The cities I return to are cities that retained their grain when they could have smoothed it. The narrow streets that weren't widened. The square that didn't get developed. These survivals are often accidents or failures, which is why they're precious.

What I look for when I arrive somewhere: evidence of ordinary life at street level. Markets, small shops, people sitting. Not monuments. Not curated districts. Just the texture of daily use, which means the texture of real attachment — people who are here because they chose to be here, not because they're passing through.`,
  },
  {
    slug: "silence-as-a-practice",
    title: "Silence as a Practice",
    description:
      "In a noisy world, silence has become something that must be sought, protected, practiced.",
    date: "2024-01-08",
    content: `I spent a week in the mountains last year with no phone signal.

The first two days were uncomfortable. I kept reaching for my phone and finding nothing. My attention was like an untrained animal — easily startled, hard to keep still. I'd start a thought and lose it. I couldn't read for more than twenty minutes without feeling like I should be somewhere else.

Then something shifted. The third day I woke up and the discomfort had turned into a different quality of presence. The mountains were more three-dimensional. The time moved differently — slower but fuller. I read for four hours in the afternoon and didn't notice them pass.

We talk a lot about silence in spiritual and therapeutic contexts, but I think the case for it is simpler than that. The mind needs quiet to process what has already happened to it. Without silence, experience accumulates but doesn't integrate. You keep moving forward but you're carrying everything you haven't had time to set down.

I don't think we need retreats to access this, though they help. The silence I'm talking about is shorter: the walk without headphones, the meal without screens, the half-hour before sleep when you don't reach for your phone. These small silences are surprisingly hard to protect. Something in us resists them.

Which is itself interesting. What are we afraid to hear in the quiet?`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

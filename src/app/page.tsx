import Image from "next/image";
import { FaqList } from "@/components/faq-list";

const benefits = [
  {
    title: "Platíš jen když cvičíš",
    text: "Žádné měsíční členství. Rezervuješ slot, zaplatíš online a přijdeš trénovat.",
  },
  {
    title: "Vstup kódem",
    text: "Bezkontaktní vstup přes jednorázový kód. Bez fronty na recepci, bez čekání.",
  },
  {
    title: "Soukromí v malé kapacitě",
    text: "Cvičíš sám, ve dvou nebo až ve čtyřech — prostor není přeplněný.",
  },
  {
    title: "Moderní vybavení",
    text: "Stroje, volné váhy i doplňky připravené na pořádný trénink od rána do večera.",
  },
];

const steps = [
  {
    n: "01",
    title: "Vyber si čas",
    text: "V kalendáři zvolíš slot, který ti sedí. Více úseků po sobě = delší trénink.",
  },
  {
    n: "02",
    title: "Zaplať a získej kód",
    text: "Online platba kartou. Před začátkem ti dorazí SMS a e-mail s přístupovým kódem.",
  },
  {
    n: "03",
    title: "Odtrénuj a nech pořádek",
    text: "Vrať nářadí na místo, otři stroje a uvolni prostor dalšímu. Tak to funguje u všech.",
  },
];

const equipment = [
  {
    title: "Posilovací stroje",
    items:
      "Klec s multipressem, kladky, bench press, leg press, hacken dřep, scottova lavice, hyperextenze a polohovací lavice.",
    image: "/equipment.jpg",
    alt: "Posilovací stroje v gymu",
  },
  {
    title: "Volné váhy",
    items:
      "Jednoručky, pogumované kotouče, gumy, podložky, švihadlo, roller, opasky a adaptéry.",
    image: "/weights.jpg",
    alt: "Volné váhy a kotouče",
  },
];

export default function HomePage() {
  return (
    <>
      <a
        href="#obsah"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Přeskočit na obsah
      </a>

      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
          <a href="#top" className="group inline-flex items-center gap-3">
            <Image
              src="/brand/logo.jpg"
              alt="BC GYM"
              width={56}
              height={56}
              className="h-12 w-12 rounded-full object-cover ring-1 ring-white/30 transition group-hover:ring-white/60"
              priority
            />
            <span className="font-display text-2xl font-bold tracking-[0.08em] text-white md:text-3xl">
              BC GYM
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/85 md:flex">
            <a href="#jak-to-funguje" className="hover:text-white">
              Jak to funguje
            </a>
            <a href="#vybaveni" className="hover:text-white">
              Vybavení
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a href="#kontakt" className="hover:text-white">
              Kontakt
            </a>
          </nav>
          <a
            href="#rezervace"
            className="rounded-sm bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-accent-soft"
          >
            Rezervace
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
          <Image
            src="/hero.jpg"
            alt="Jednoručky připravené na trénink"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35" />

          <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-20">
            <p className="animate-fade text-sm font-medium uppercase tracking-[0.22em] text-white/70">
              Bohumín · samoobslužná posilovna
            </p>
            <div className="mt-5 h-1 w-16 origin-left bg-accent animate-bar" />
            <h1 className="animate-rise mt-6 max-w-3xl font-display text-[clamp(3.4rem,12vw,7.5rem)] font-extrabold leading-[0.9] tracking-tight">
              BC GYM
            </h1>
            <p
              className="animate-rise mt-5 max-w-xl text-lg text-white/85 md:text-xl"
              style={{ animationDelay: "120ms" }}
            >
              Tvůj čas. Tvůj prostor. Tvoje síla. Trénuj sám — bez front,
              bez recepce, jen ty a výkon.
            </p>
            <div
              className="animate-rise mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "220ms" }}
            >
              <a
                href="#rezervace"
                className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Chci trénovat
              </a>
              <a
                href="#jak-to-funguje"
                className="rounded-sm border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Jak to funguje
              </a>
            </div>
          </div>
        </section>

        <section id="obsah" className="border-b border-line bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Vítej v BC GYM
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Fitko, které jede podle tebe
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Jsme nově vznikající samoobslužná posilovna v Bohumíně. Rezervuješ
                online, zaplatíš kartou a po potvrzení dostaneš kód ke dveřím —
                moderní vybavení, čistý prostor a maximální flexibilita.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <article
                  key={item.title}
                  className="border-t border-ink/15 pt-4"
                >
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="jak-to-funguje"
          className="border-b border-line bg-background"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              3 kroky
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              Od rezervace k tréninku za pár minut
            </h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
              {steps.map((step) => (
                <li key={step.n} className="relative">
                  <p className="font-display text-5xl font-extrabold text-ink/10">
                    {step.n}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="vybaveni" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Vybavení
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              Co u nás najdeš
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Přehled vybavení budeme upřesňovat před otevřením. Cíl je jasný:
              pořádný trénink bez kompromisů — stroje i volné váhy.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {equipment.map((block) => (
                <article key={block.title} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                    <Image
                      src={block.image}
                      alt={block.alt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-bold tracking-tight">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    {block.items}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-ink text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1fr] md:px-8 md:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Proč BC GYM
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Trénuj, kdy se ti to hodí
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/75">
                Denně od rána do pozdního večera. Platíš jen za čas, který
                skutečně využiješ. Žádné zbytečné členství, žádný chaos na sále.
              </p>
            </div>
            <dl className="grid gap-6 sm:grid-cols-2">
              <div className="border-t border-white/15 pt-4">
                <dt className="font-display text-4xl font-extrabold tracking-tight">
                  75 min
                </dt>
                <dd className="mt-2 text-sm text-white/70">
                  Typická délka jednoho tréninkového slotu
                </dd>
              </div>
              <div className="border-t border-white/15 pt-4">
                <dt className="font-display text-4xl font-extrabold tracking-tight">
                  max 4
                </dt>
                <dd className="mt-2 text-sm text-white/70">
                  Osoby v jednom rezervovaném čase
                </dd>
              </div>
              <div className="border-t border-white/15 pt-4">
                <dt className="font-display text-4xl font-extrabold tracking-tight">
                  5–23
                </dt>
                <dd className="mt-2 text-sm text-white/70">
                  Orientace otevírací doby (upřesníme před startem)
                </dd>
              </div>
              <div className="border-t border-white/15 pt-4">
                <dt className="font-display text-4xl font-extrabold tracking-tight text-accent">
                  brzy
                </dt>
                <dd className="mt-2 text-sm text-white/70">
                  Online rezervace a finální ceník
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          id="rezervace"
          className="border-b border-line bg-accent-soft"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Rezervace
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              Online kalendář spouštíme již brzy
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Připravujeme samoobslužný provoz ve stylu moderních gymů: rezervace
              slotu, platba kartou a vstup kódem. Mezitím nám napiš — ozveme se
              s termínem otevření a předprodejem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:info@bc-gym.cz"
                className="rounded-sm bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent"
              >
                Napsat e-mail
              </a>
              <a
                href="#kontakt"
                className="rounded-sm border border-ink/20 bg-surface px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
              >
                Kontaktní údaje
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Časté otázky
            </h2>
            <div className="mt-10">
              <FaqList />
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-background">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Kontakt
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Bohumín, Česká republika
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Přesnou adresu, telefon a otevírací dobu doplníme před otevřením.
                Mezitím nás kontaktuj e-mailem.
              </p>
            </div>
            <div className="space-y-6 text-base">
              <div className="border-t border-line pt-4">
                <p className="text-sm uppercase tracking-[0.14em] text-muted">
                  E-mail
                </p>
                <a
                  href="mailto:info@bc-gym.cz"
                  className="mt-1 inline-block text-xl font-semibold hover:text-accent"
                >
                  info@bc-gym.cz
                </a>
              </div>
              <div className="border-t border-line pt-4">
                <p className="text-sm uppercase tracking-[0.14em] text-muted">
                  Město
                </p>
                <p className="mt-1 text-xl font-semibold">Bohumín</p>
              </div>
              <div className="border-t border-line pt-4">
                <p className="text-sm uppercase tracking-[0.14em] text-muted">
                  Provoz
                </p>
                <p className="mt-1 text-xl font-semibold">
                  Samoobslužná posilovna
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-ink text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full bg-white"
            />
            <div>
              <p className="font-display text-xl font-bold tracking-[0.06em]">
                BC GYM
              </p>
              <p className="text-sm text-white/60">
                Samoobslužná posilovna · Bohumín
              </p>
            </div>
          </div>
          <p className="text-sm text-white/55">
            © {new Date().getFullYear()} BC GYM. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </>
  );
}

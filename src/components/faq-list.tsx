"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Mohu do BC GYM přijít s někým dalším?",
    a: "Ano. Kapacita jedné rezervace je nastavená na malou skupinu (až 4 osoby) a cena je jednotná. Osoba, která rezervaci vytváří, odpovídá za pořádek a správný chod posilovny.",
  },
  {
    q: "Jak funguje vstup do posilovny?",
    a: "Po online rezervaci a platbě ti před začátkem tréninku přijde přístupový kód. Ten zadáš na klávesnici u dveří a můžeš začít cvičit.",
  },
  {
    q: "Berete MultiSport kartu nebo permanentky?",
    a: "Aktuálně nepřijímáme MultiSport. Permanentky a dárkové poukazy plánujeme — sleduj web a sociální sítě.",
  },
  {
    q: "Dá se termín stornovat?",
    a: "Ano, termín lze stornovat nejpozději 24 hodin předem e-mailem. Podrobnosti upřesníme spolu se spuštěním rezervací.",
  },
  {
    q: "Je v BC GYM sprcha a šatna?",
    a: "Ano — šatna, sprchy a WC jsou součástí prostoru. Po tréninku prosíme o udržování čistoty pro další návštěvníky.",
  },
  {
    q: "Mohu v posilovně fotit nebo natáčet?",
    a: "Ano. Budeme rádi, když nás na sociálních sítích označíš. Respektuj prosím soukromí ostatních cvičenců ve stejném slotu.",
  },
];

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="text-lg font-semibold tracking-tight md:text-xl">
                {item.q}
              </span>
              <span
                aria-hidden
                className="mt-1 font-display text-2xl leading-none text-accent"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-10 text-base leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

type Slide = {
  id: string;
  image: string;
  alt: string;
  kicker: string;
  title: string;
  accent: string;
  description: string;
  action: string;
  href: string;
  imageCaption: string;
  position: string;
  fit?: "cover" | "contain";
};

const slides: Slide[] = [
  {
    id: "metrologie-professionnelle",
    image: "/images/carrousel/01-metrologie-professionnelle.webp",
    alt: "Ensemble d’instruments de métrologie et de mesure des expositions professionnelles.",
    kicker: "ÉQUIPEMENTS DE MÉTROLOGIE",
    title: "Mesurer avec précision.",
    accent: "Prévenir avec confiance.",
    description: "Une instrumentation dédiée à l’évaluation des expositions professionnelles et aux mesures sur le terrain.",
    action: "Découvrir la boutique",
    href: "https://www.lynxafrik.shop/",
    imageCaption: "INSTRUMENTS DE MÉTROLOGIE",
    position: "center center",
  },
  {
    id: "poussieres-organiques",
    image: "/images/carrousel/02-poussieres-organiques.webp",
    alt: "Travailleurs au contact du coton dans un atelier de transformation industrielle.",
    kicker: "POUSSIÈRES ORGANIQUES",
    title: "Les poussières organiques.",
    accent: "Un risque à maîtriser.",
    description: "Dans la transformation et la manutention des matières organiques, l’évaluation des expositions aide à mieux protéger les travailleurs.",
    action: "Découvrir l’hygiène industrielle",
    href: "/expertises/hygiene-industrielle",
    imageCaption: "EXPOSITIONS EN MILIEU INDUSTRIEL",
    position: "center center",
  },
  {
    id: "poussieres-minerales",
    image: "/images/carrousel/03-poussieres-minerales.webp",
    alt: "Camions de chantier circulant dans la poussière d’une mine à ciel ouvert.",
    kicker: "POUSSIÈRES MINÉRALES",
    title: "Sur les sites miniers,",
    accent: "chaque exposition compte.",
    description: "La mesure des poussières et l’analyse des situations de travail éclairent les actions de prévention sur les sites miniers et les chantiers.",
    action: "Explorer nos expertises",
    href: "/expertises/hygiene-industrielle",
    imageCaption: "SURVEILLANCE DES POUSSIÈRES MINÉRALES",
    position: "56% center",
  },
  {
    id: "rayonnements-non-ionisants",
    image: "/images/carrousel/04-rayonnements-non-ionisants.webp",
    alt: "Pylônes de transport électrique et infrastructures de télécommunication.",
    kicker: "RAYONNEMENTS NON IONISANTS",
    title: "Champs électromagnétiques.",
    accent: "Comprendre les expositions.",
    description: "Réseaux électriques et télécommunications : mieux caractériser les environnements d’exposition pour orienter la prévention.",
    action: "Échanger avec nos experts",
    href: "/contact",
    imageCaption: "ÉNERGIE & TÉLÉCOMMUNICATIONS",
    position: "center center",
  },
  {
    id: "rayonnements-ionisants",
    image: "/images/carrousel/05-rayonnements-ionisants.webp",
    alt: "Illustration de radioprotection avec un intervenant équipé et des symboles associés aux rayonnements.",
    kicker: "RAYONNEMENTS IONISANTS",
    title: "Radioprotection.",
    accent: "La vigilance repose sur la mesure.",
    description: "La surveillance des expositions et l’analyse des situations de travail participent à la maîtrise des risques radiologiques.",
    action: "Nous contacter",
    href: "/contact",
    imageCaption: "SURVEILLANCE DES EXPOSITIONS",
    position: "center center",
  },
  {
    id: "qualite-environnement-interieur",
    image: "/images/carrousel/06-qualite-environnement-interieur.webp",
    alt: "Vue intérieure d’un bâtiment moderne avec espaces de travail et végétation.",
    kicker: "ENVIRONNEMENT INTÉRIEUR",
    title: "Des bâtiments plus sains.",
    accent: "Des occupants mieux protégés.",
    description: "Qualité de l’air, paramètres d’ambiance et sources de pollution : évaluer les environnements intérieurs pour mieux agir.",
    action: "Découvrir ce domaine",
    href: "/expertises/qualite-environnement-interieur",
    imageCaption: "QUALITÉ DE L’ENVIRONNEMENT INTÉRIEUR",
    position: "center center",
  },
  {
    id: "formation-competences",
    image: "/images/carrousel/07-formation-competences.webp",
    alt: "Professionnels en équipements de protection participant à une formation technique en atelier.",
    kicker: "FORMATION & COMPÉTENCES",
    title: "La prévention s’apprend.",
    accent: "Et se transmet sur le terrain.",
    description: "Avec LYNX Academy, renforcez les compétences de vos équipes en hygiène industrielle, sécurité et environnement.",
    action: "Accéder à LYNX Academy",
    href: "https://lynx-academy.vercel.app/",
    imageCaption: "FORMATION PROFESSIONNELLE",
    position: "center center",
  },
];

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focusInside, setFocusInside] = useState(false);

  useEffect(() => {
    if (isPaused || hovered || focusInside || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveIndex(index => (index + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [isPaused, hovered, focusInside]);

  const move = (offset: number) => setActiveIndex(index => (index + offset + slides.length) % slides.length);
  const current = slides[activeIndex];

  return (
    <section
      className="ehs-carousel"
      aria-label="Domaines d’intervention en images"
      role="region"
      aria-roledescription="carrousel"
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocusInside(true)}
      onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocusInside(false);
      }}
      onKeyDown={event => {
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      }}
    >
      <div className="ehs-carousel-frame">
        <div className="ehs-carousel-copy">
          <div className="ehs-carousel-inner">
            <span className="ehs-carousel-topline">
              <span className="ehs-carousel-topline-mark" aria-hidden="true" />
              EHS LYNX AFRIK <span className="ehs-carousel-separator" aria-hidden="true" /> EXPERTISE & MÉTROLOGIE
            </span>
            <div className="ehs-carousel-text" key={current.id}>
              <span className="ehs-carousel-kicker">{current.kicker}</span>
              <h1>{current.title} <em>{current.accent}</em></h1>
              <p>{current.description}</p>
              <div className="ehs-carousel-actions">
                <Link href={current.href} target={current.href.startsWith("https://") ? "_blank" : undefined} rel={current.href.startsWith("https://") ? "noopener noreferrer" : undefined} className="ehs-carousel-primary">
                  {current.action} <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <Link href="/contact" className="ehs-carousel-secondary">
                  Nous contacter <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="ehs-carousel-controls">
              <span className="ehs-carousel-count">
                {String(activeIndex + 1).padStart(2, "0")} <span>/ {String(slides.length).padStart(2, "0")}</span>
              </span>
              <div className="ehs-carousel-dots" aria-label="Choisir une diapositive">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={"ehs-carousel-dot" + (index === activeIndex ? " is-current" : "")}
                    aria-label={"Afficher : " + slide.kicker}
                    aria-current={index === activeIndex ? "true" : undefined}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="ehs-carousel-play"
                aria-label={isPaused ? "Reprendre le défilement automatique" : "Mettre le diaporama en pause"}
                onClick={() => setIsPaused(value => !value)}
              >
                {isPaused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
        <div className="ehs-carousel-photo">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={"ehs-carousel-image" + (index === activeIndex ? " is-current" : "")}
              data-fit={slide.fit || "cover"}
              aria-hidden={index !== activeIndex}
            >
              <Image
                src={slide.image}
                alt={index === activeIndex ? slide.alt : ""}
                fill
                sizes="(max-width: 900px) 100vw, 56vw"
                priority={index === 0}
                style={{ objectPosition: slide.position }}
              />
            </div>
          ))}
          <div className="ehs-carousel-photo-gradient" aria-hidden="true" />
          <span className="ehs-carousel-photo-caption">{current.imageCaption}</span>
          <div className="ehs-carousel-arrows">
            <button type="button" onClick={() => move(-1)} aria-label="Diapositive précédente">
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Diapositive suivante">
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

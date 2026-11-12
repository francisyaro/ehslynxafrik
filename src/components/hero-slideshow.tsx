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
    id: "hygiene-industrielle",
    image: "/images/hygiene-industrielle.webp",
    alt: "Technicien en équipements de protection examinant des appareils de mesure dans un bâtiment.",
    kicker: "HYGIÈNE INDUSTRIELLE",
    title: "Mieux comprendre les risques.",
    accent: "Mieux protéger les personnes.",
    description: "Nous accompagnons les entreprises dans l’identification et l’évaluation des expositions professionnelles, pour une prévention fondée sur des mesures fiables.",
    action: "Découvrir nos expertises",
    href: "/expertises",
    imageCaption: "ÉVALUATION DES EXPOSITIONS PROFESSIONNELLES",
    position: "72% center",
  },
  {
    id: "qualite-air-interieur",
    image: "/images/qualite-air-interieur.webp",
    alt: "Illustration de la qualité de l’air dans un espace intérieur, avec indicateurs PM2.5, PM10, CO, O3, HCHO et TVOC.",
    kicker: "QUALITÉ DE L’ENVIRONNEMENT INTÉRIEUR",
    title: "La qualité de l’air intérieur.",
    accent: "Une priorité mesurable.",
    description: "Polluants atmosphériques, particules et composés volatils : mieux connaître l’air des espaces de vie et de travail pour mieux agir.",
    action: "Nos domaines d’intervention",
    href: "/expertises",
    imageCaption: "SURVEILLANCE DE L’AIR INTÉRIEUR",
    position: "center center",
    fit: "contain",
  },
  {
    id: "metrologie-bruit",
    image: "/images/mesure-bruit-industrie.webp",
    alt: "Instrument de mesure acoustique au sein d’un atelier industriel équipé de machines.",
    kicker: "MESURES DU BRUIT ET DES VIBRATIONS",
    title: "Mesurer avec précision.",
    accent: "Décider avec confiance.",
    description: "De l’évaluation du bruit au choix d’équipements de métrologie, nous facilitons des décisions techniques adaptées à la réalité de votre activité.",
    action: "Visiter la boutique",
    href: "https://www.lynxafrik.shop/",
    imageCaption: "MÉTROLOGIE EN MILIEU INDUSTRIEL",
    position: "54% center",
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

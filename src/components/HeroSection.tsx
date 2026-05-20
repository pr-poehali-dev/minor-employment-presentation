import { useState, useEffect } from "react";

const BG = "https://cdn.poehali.dev/projects/34828b05-bf09-4644-97e2-763bce786a33/bucket/d7a38919-9c98-4036-89e6-a39fba50f7e0.png";
const PHOTO = "https://cdn.poehali.dev/projects/34828b05-bf09-4644-97e2-763bce786a33/bucket/1cc53601-3d2c-4c4b-aa71-295a8aa74046.jpg";

const slides = [
  {
    id: 1,
    label: null,
    title: (
      <>
        Открой для себя{" "}
        <span style={{ color: "hsl(280,70%,45%)" }}>необозримый горизонт</span>{" "}
        карьерных перспектив
      </>
    ),
  },
  {
    id: 2,
    label: "Работодатели",
    title: (
      <>
        Предприятия{" "}
        <span style={{ color: "hsl(280,70%,45%)" }}>реального сектора</span>
      </>
    ),
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden">
      <div
        className="w-full relative"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          aspectRatio: "16/9",
        }}
      >
        <img
          src={PHOTO}
          alt=""
          className="absolute left-0 top-0 h-full w-1/2 object-cover object-right"
          style={{ mixBlendMode: "multiply" }}
        />

        {/* Slide content */}
        <div className="absolute right-0 top-0 h-full w-1/2 flex flex-col items-center justify-center px-8 text-center">
          {slide.label && (
            <p
              className="font-montserrat font-medium tracking-widest uppercase mb-3"
              style={{
                fontSize: "clamp(0.55rem, 1.1vw, 0.85rem)",
                color: "hsl(280,70%,45%)",
              }}
            >
              {slide.label}
            </p>
          )}
          <h1
            className="font-montserrat font-black leading-tight drop-shadow-sm"
            style={{
              fontSize: "clamp(1.2rem, 3.2vw, 3rem)",
              color: "hsl(220,60%,18%)",
              textShadow: "0 1px 8px rgba(255,255,255,0.6)",
            }}
          >
            {slide.title}
          </h1>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 right-0 w-1/2 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                background: i === current ? "hsl(280,70%,45%)" : "rgba(255,255,255,0.6)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

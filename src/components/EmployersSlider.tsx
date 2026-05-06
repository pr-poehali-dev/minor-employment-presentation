import { useEffect, useRef, useState } from "react";

const employers = [
  "ООО «КомандаГорький НН»",
  "ИП Шамонин М.М.",
  "ООО «Стройсервис»",
  "ООО «ГеоМакс-НН»",
  "ООО «Артель лес»",
  "ООО «Метрополь»",
  "ООО «БиоЭнергия»",
  "ООО «НижЛесКом»",
  "ПК «Воскресенский Кооператор»",
  "ИП Миронов В.Б.",
  "ООО «Рельеф»",
  "ООО «Агрокомбинат «Ветлужский»",
];

const doubled = [...employers, ...employers];

export default function EmployersSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let start: number | null = null;
    let pos = 0;
    let raf: number;
    const speed = 0.5;

    const step = (ts: number) => {
      if (start === null) start = ts;
      if (!paused) {
        pos += speed;
        const half = track.scrollWidth / 2;
        if (pos >= half) pos = 0;
        track.style.transform = `translateX(-${pos}px)`;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <section className="py-14 bg-[hsl(220,60%,14%)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <p className="text-[hsl(45,90%,55%)] text-xs font-medium tracking-widest uppercase mb-3 font-montserrat">
          Работодатели
        </p>
        <h2 className="font-montserrat font-black text-white text-3xl md:text-4xl">
          Предприятия реального сектора
        </h2>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, hsl(220,60%,14%), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, hsl(220,60%,14%), transparent)" }} />

        <div ref={trackRef} className="flex gap-4 w-max" style={{ willChange: "transform" }}>
          {doubled.map((name, i) => (
            <div
              key={i}
              className="shrink-0 bg-white/10 border border-white/20 backdrop-blur-sm px-6 py-4 text-white font-montserrat font-semibold text-sm whitespace-nowrap hover:bg-[hsl(280,70%,45%)] hover:border-[hsl(280,70%,45%)] transition-colors duration-300 cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

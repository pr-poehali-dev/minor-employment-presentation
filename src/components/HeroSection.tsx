export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="w-full relative"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/34828b05-bf09-4644-97e2-763bce786a33/bucket/d7a38919-9c98-4036-89e6-a39fba50f7e0.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          aspectRatio: "16/9",
        }}
      >
        <img
          src="https://cdn.poehali.dev/projects/34828b05-bf09-4644-97e2-763bce786a33/bucket/1cc53601-3d2c-4c4b-aa71-295a8aa74046.jpg"
          alt=""
          className="absolute left-0 top-0 h-full w-1/2 object-cover object-right"
          style={{ mixBlendMode: "multiply" }}
        />

        {/* Title overlay — правая половина */}
        <div className="absolute right-0 top-0 h-full w-1/2 flex flex-col items-center justify-center px-8 text-center">
          <h1
            className="font-montserrat font-black leading-tight drop-shadow-sm"
            style={{
              fontSize: "clamp(1.2rem, 3.2vw, 3rem)",
              color: "hsl(220,60%,18%)",
              textShadow: "0 1px 8px rgba(255,255,255,0.6)",
            }}
          >
            Открой для себя{" "}
            <span style={{ color: "hsl(280,70%,45%)" }}>необозримый горизонт</span>{" "}
            карьерных перспектив
          </h1>
        </div>
      </div>
    </section>
  );
}
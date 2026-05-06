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
          src="https://cdn.poehali.dev/projects/34828b05-bf09-4644-97e2-763bce786a33/bucket/83007e92-64e1-429f-aff3-f77dd92e5a37.jpg"
          alt=""
          className="absolute left-0 top-0 h-full w-1/2 object-cover object-right"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
    </section>
  );
}

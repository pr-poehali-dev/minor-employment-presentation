import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="relative bg-[hsl(220,60%,18%)] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/34828b05-bf09-4644-97e2-763bce786a33/bucket/d7a38919-9c98-4036-89e6-a39fba50f7e0.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#6ec6f5]/60 via-transparent to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36">
        <div className="max-w-2xl animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-white/30 border border-white/50 px-4 py-1.5 mb-8 backdrop-blur-sm">
            <Icon name="Shield" size={14} className="text-[hsl(220,60%,18%)]" />
            <span className="text-[hsl(220,60%,18%)] text-xs font-medium tracking-widest uppercase">
              100% официальное трудоустройство
            </span>
          </div>
          <h1 className="font-montserrat font-black text-[hsl(220,60%,14%)] text-4xl md:text-6xl leading-tight mb-6 drop-shadow-sm">
            Первая работа —{" "}
            <span className="text-[hsl(280,70%,45%)]">официально</span>
            <br />и без риска
          </h1>
          <p className="text-[hsl(220,60%,20%)]/80 text-lg leading-relaxed mb-10">
            Вакансии для молодёжи с 14 лет. Все позиции соответствуют Трудовому
            кодексу РФ: ограниченный рабочий день, запрет вредных условий, право
            на учёбу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#вакансии"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(220,60%,18%)] text-white px-8 py-3.5 font-montserrat font-bold text-sm tracking-wide hover:bg-[hsl(220,60%,24%)] transition-colors duration-200 shadow-lg"
            >
              <Icon name="Search" size={16} />
              Смотреть вакансии
            </a>
            <a
              href="#контакты"
              className="inline-flex items-center justify-center gap-2 bg-white/40 border border-white/60 text-[hsl(220,60%,18%)] px-8 py-3.5 font-montserrat font-semibold text-sm tracking-wide hover:bg-white/60 transition-colors duration-200 backdrop-blur-sm"
            >
              Подать заявку
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/30 bg-white/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "14+", label: "Лет — минимальный возраст" },
            { val: "120+", label: "Трудоустроено подростков" },
            { val: "4 ч", label: "Максимум в учебный день" },
            { val: "0", label: "Нарушений трудового законодательства" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-montserrat font-black text-[hsl(280,70%,40%)] text-2xl md:text-3xl">
                {s.val}
              </div>
              <div className="text-[hsl(220,60%,20%)]/70 text-xs mt-1 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
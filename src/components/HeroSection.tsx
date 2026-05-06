import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="relative bg-[hsl(220,60%,18%)] overflow-hidden">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/34828b05-bf09-4644-97e2-763bce786a33/files/31daaba3-d4cf-45c5-9dcd-b4f4779089e1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,60%,18%)] via-[hsl(220,60%,18%)]/90 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36">
        <div className="max-w-2xl animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-[hsl(45,90%,58%)]/15 border border-[hsl(45,90%,58%)]/40 px-4 py-1.5 mb-8">
            <Icon name="Shield" size={14} className="text-[hsl(45,90%,58%)]" />
            <span className="text-[hsl(45,90%,58%)] text-xs font-medium tracking-widest uppercase">
              100% официальное трудоустройство
            </span>
          </div>
          <h1 className="font-montserrat font-black text-white text-4xl md:text-6xl leading-tight mb-6">
            Первая работа —{" "}
            <span className="text-[hsl(45,90%,58%)]">официально</span>
            <br />и без риска
          </h1>
          <p className="text-white/65 text-lg leading-relaxed mb-10">
            Вакансии для молодёжи с 14 лет. Все позиции соответствуют Трудовому
            кодексу РФ: ограниченный рабочий день, запрет вредных условий, право
            на учёбу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#вакансии"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(45,90%,58%)] text-[hsl(220,60%,18%)] px-8 py-3.5 font-montserrat font-bold text-sm tracking-wide hover:bg-[hsl(45,90%,68%)] transition-colors duration-200"
            >
              <Icon name="Search" size={16} />
              Смотреть вакансии
            </a>
            <a
              href="#контакты"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3.5 font-montserrat font-semibold text-sm tracking-wide hover:border-white/60 transition-colors duration-200"
            >
              Подать заявку
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "14+", label: "Лет — минимальный возраст" },
            { val: "120+", label: "Трудоустроено подростков" },
            { val: "4 ч", label: "Максимум в учебный день" },
            { val: "0", label: "Нарушений трудового законодательства" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-montserrat font-black text-[hsl(45,90%,58%)] text-2xl md:text-3xl">
                {s.val}
              </div>
              <div className="text-white/50 text-xs mt-1 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

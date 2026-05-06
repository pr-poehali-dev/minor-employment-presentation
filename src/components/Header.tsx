import Icon from "@/components/ui/icon";

const BG = "https://cdn.poehali.dev/projects/34828b05-bf09-4644-97e2-763bce786a33/bucket/d7a38919-9c98-4036-89e6-a39fba50f7e0.png";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/30 backdrop-blur-md"
      style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center top" }}
    >
      <div className="absolute inset-0 bg-white/30" />
      <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[hsl(280,70%,45%)] flex items-center justify-center shadow-md">
            <Icon name="Briefcase" size={18} className="text-white" />
          </div>
          <div>
            <span className="font-montserrat font-bold text-[hsl(220,60%,18%)] text-lg tracking-tight leading-none">
              КарьераПро
            </span>
            <div className="text-[10px] text-[hsl(280,70%,45%)] tracking-widest uppercase leading-none mt-0.5">
              Официальное трудоустройство
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Вакансии", href: "#вакансии" },
            { label: "Преимущества", href: "#преимущества" },
            { label: "Контакты", href: "#контакты" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[hsl(220,60%,20%)] hover:text-[hsl(280,70%,45%)] text-sm font-medium transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#контакты"
          className="hidden md:inline-flex items-center gap-2 bg-[hsl(220,60%,18%)] text-white px-5 py-2.5 text-sm font-montserrat font-bold tracking-wide hover:bg-[hsl(280,70%,45%)] transition-colors duration-200 shadow-md"
        >
          Подать заявку
        </a>
      </div>
    </header>
  );
}

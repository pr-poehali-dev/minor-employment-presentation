import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[hsl(220,60%,18%)] border-b border-[hsl(45,90%,30%)]/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[hsl(45,90%,58%)] flex items-center justify-center">
            <Icon name="Briefcase" size={18} className="text-[hsl(220,60%,18%)]" />
          </div>
          <div>
            <span className="font-montserrat font-bold text-white text-lg tracking-tight leading-none">
              КарьераПро
            </span>
            <div className="text-[10px] text-[hsl(45,90%,58%)] tracking-widest uppercase leading-none mt-0.5">
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
              className="text-white/70 hover:text-[hsl(45,90%,58%)] text-sm font-medium transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#контакты"
          className="hidden md:inline-flex items-center gap-2 bg-[hsl(45,90%,58%)] text-[hsl(220,60%,18%)] px-5 py-2.5 text-sm font-montserrat font-bold tracking-wide hover:bg-[hsl(45,90%,65%)] transition-colors duration-200"
        >
          Подать заявку
        </a>
      </div>
    </header>
  );
}

import Icon from "@/components/ui/icon";

const BG = "https://cdn.poehali.dev/projects/34828b05-bf09-4644-97e2-763bce786a33/bucket/d7a38919-9c98-4036-89e6-a39fba50f7e0.png";

const vacancies = [
  {
    id: 1,
    title: "• Горничная\n• Помощник повара\n• Гид",
    department: "ООО \"КомандаГорький-НН\" · с. Богородское, Воскресенский м.о.",
    minAge: 14,
    hours: "Летний период",
    type: "Лёгкий труд",
    salary: "до 200 ₽/час",
    description:
      "Три позиции на летний период:\n• Горничная — уборка номеров и общих зон, комфортные условия;\n• Помощник повара — подготовка ингредиентов, сервировка, обучение на месте;\n• Гид — проведение экскурсий по Воскресенскому району, общение с гостями.\n\nРаботодатель: ООО «КомандаГорький-НН»\nАдрес: Нижегородская область, Воскресенский м.о., с. Богородское",
    tags: ["Летний период", "Без опыта"],
    restrictions: "С 14 лет при наличии письменного согласия родителей. Не более 4 ч/день в период учёбы.",
    contact: "8 (920) 077-08-80",
  },
  {
    id: 2,
    title: "Помощник флориста",
    department: "ИП Колотушкина А.М. · д. Задворка, Воскресенский м.о.",
    minAge: 16,
    hours: "0,5 ставки",
    type: "Флористика",
    salary: "13 546,5 ₽/мес",
    description:
      "Работа помощником флориста на 0,5 ставки.\n\nРаботодатель: ИП Колотушкина А.М.\nАдрес: Нижегородская область, Воскресенский м.о., д. Задворка",
    tags: [],
    restrictions: "С 16 лет. Допускается при наличии письменного согласия родителей и медицинской справки.",
    contact: "8 (952) 463-23-50 — Анастасия",
  },
];

export { vacancies };

interface VacanciesSectionProps {
  activeVacancy: number | null;
  setActiveVacancy: (id: number | null) => void;
}

export default function VacanciesSection({ activeVacancy, setActiveVacancy }: VacanciesSectionProps) {
  return (
    <section
      id="вакансии"
      className="relative py-20 overflow-hidden"
      style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-[hsl(280,70%,45%)] text-xs font-medium tracking-widest uppercase mb-3 font-montserrat">
            Актуальные позиции
          </p>
          <h2 className="font-montserrat font-black text-[hsl(220,60%,14%)] text-3xl md:text-4xl inline-block gold-line">
            Открытые вакансии
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {vacancies.map((v, i) => (
            <div
              key={v.id}
              className="bg-white/70 backdrop-blur-sm border border-white/60 hover:border-[hsl(280,70%,45%)] transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md"
              style={{ animationDelay: `${i * 100}ms` }}
              onClick={() => setActiveVacancy(activeVacancy === v.id ? null : v.id)}
            >
              <div className="p-6 border-b border-white/50">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-montserrat font-bold text-[hsl(220,60%,14%)] text-lg leading-tight group-hover:text-[hsl(280,70%,45%)] transition-colors whitespace-pre-line">
                      {v.title}
                    </h3>
                    <p className="text-[hsl(220,40%,40%)] text-sm mt-1">{v.department}</p>
                  </div>
                  <div className="shrink-0 bg-[hsl(280,70%,45%)] text-white px-3 py-1.5 text-xs font-montserrat font-bold whitespace-nowrap shadow-sm">
                    {v.salary}
                  </div>
                </div>
                {v.contact && (
                  <div className="flex items-center gap-2 mt-3">
                    <Icon name="Phone" size={14} className="text-[hsl(280,70%,45%)] shrink-0" />
                    <a
                      href={`tel:${v.contact.replace(/\D/g, "")}`}
                      className="text-sm font-montserrat font-bold text-[hsl(220,60%,14%)] hover:text-[hsl(280,70%,45%)] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {v.contact}
                    </a>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-white/50 border border-white/60 backdrop-blur-sm">
                    <Icon name="User" size={16} className="text-[hsl(280,70%,45%)] mx-auto mb-1" />
                    <div className="text-[hsl(220,60%,14%)] font-montserrat font-black text-lg">
                      {v.minAge}+
                    </div>
                    <div className="text-[hsl(220,40%,50%)] text-[10px] uppercase tracking-wide">
                      Лет
                    </div>
                  </div>
                  <div className="text-center p-3 bg-white/50 border border-white/60 backdrop-blur-sm">
                    <Icon name="Clock" size={16} className="text-[hsl(280,70%,45%)] mx-auto mb-1" />
                    <div className="text-[hsl(220,60%,14%)] font-montserrat font-bold text-xs leading-tight">
                      {v.hours.split(",")[0]}
                    </div>
                    <div className="text-[hsl(220,40%,50%)] text-[10px] uppercase tracking-wide mt-1">
                      Время
                    </div>
                  </div>
                  <div className="text-center p-3 bg-white/50 border border-white/60 backdrop-blur-sm">
                    <Icon name="FileText" size={16} className="text-[hsl(280,70%,45%)] mx-auto mb-1" />
                    <div className="text-[hsl(220,60%,14%)] font-montserrat font-bold text-xs leading-tight">
                      {v.type}
                    </div>
                    <div className="text-[hsl(220,40%,50%)] text-[10px] uppercase tracking-wide mt-1">
                      Тип
                    </div>
                  </div>
                </div>

                {activeVacancy === v.id && (
                  <div className="mt-2 animate-fade-in">
                    <p className="text-[hsl(220,40%,30%)] text-sm leading-relaxed mb-4">
                      {v.description}
                    </p>
                    <div className="bg-[hsl(280,70%,45%)]/10 border-l-4 border-[hsl(280,70%,45%)] p-4">
                      <div className="flex items-start gap-2">
                        <Icon
                          name="AlertCircle"
                          size={15}
                          className="text-[hsl(280,70%,45%)] mt-0.5 shrink-0"
                        />
                        <div>
                          <div className="text-[11px] font-montserrat font-bold uppercase tracking-wide text-[hsl(220,60%,14%)] mb-1">
                            Возрастные ограничения
                          </div>
                          <div className="text-sm text-[hsl(220,40%,35%)]">{v.restrictions}</div>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                <button className="mt-3 flex items-center gap-1.5 text-xs text-[hsl(220,40%,50%)] hover:text-[hsl(280,70%,45%)] transition-colors duration-200 w-full justify-end">
                  {activeVacancy === v.id ? "Свернуть" : "Подробнее"}
                  <Icon
                    name={activeVacancy === v.id ? "ChevronUp" : "ChevronDown"}
                    size={14}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
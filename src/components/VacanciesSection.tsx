import Icon from "@/components/ui/icon";

const BG = "https://cdn.poehali.dev/projects/34828b05-bf09-4644-97e2-763bce786a33/bucket/d7a38919-9c98-4036-89e6-a39fba50f7e0.png";

const vacancies = [
  {
    id: 1,
    title: "Помощник офис-менеджера",
    department: "Административный отдел",
    minAge: 14,
    hours: "4 ч/день, 20 ч/неделю",
    type: "Лёгкий труд",
    salary: "от 18 000 ₽",
    description:
      "Приём и распределение корреспонденции, помощь в организации документооборота, работа с оргтехникой. Без физических нагрузок, в комфортном офисе.",
    tags: ["Офис", "Без опыта", "Гибкий график"],
    restrictions: "Не более 4 ч/день в учебный период. Требуется письменное согласие родителей.",
  },
  {
    id: 2,
    title: "Младший оператор колл-центра",
    department: "Отдел по работе с клиентами",
    minAge: 16,
    hours: "6 ч/день, 30 ч/неделю",
    type: "Умственный труд",
    salary: "от 22 000 ₽",
    description:
      "Консультирование клиентов по базовым вопросам, внесение данных в CRM-систему, обработка входящих обращений. Полное обучение за счёт компании.",
    tags: ["Удалённо / в офисе", "Обучение", "Карьерный рост"],
    restrictions: "Не более 6 ч/день при наличии разрешения родителей.",
  },
  {
    id: 3,
    title: "Курьер (велосипед / пеший)",
    department: "Логистика",
    minAge: 16,
    hours: "До 6 ч/день в учебные дни",
    type: "Лёгкий физический труд",
    salary: "от 25 000 ₽",
    description:
      "Доставка документов и небольших посылок по городу. Маршруты составляются с учётом учебного расписания. Спецодежда и оборудование предоставляются.",
    tags: ["На улице", "Активный", "Сдельная оплата"],
    restrictions: "Вес отправлений до 5 кг. Ночной труд запрещён.",
  },
  {
    id: 4,
    title: "Ассистент маркетолога",
    department: "Маркетинг и коммуникации",
    minAge: 14,
    hours: "3–4 ч/день по договорённости",
    type: "Творческий труд",
    salary: "от 15 000 ₽",
    description:
      "Помощь в ведении социальных сетей, подготовке материалов для публикаций, мониторинг упоминаний бренда. Работа в дружной молодёжной команде.",
    tags: ["Гибрид", "SMM", "Творчество"],
    restrictions: "Разрешён с 14 лет при наличии письменного согласия родителей.",
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
        <div className="mb-12">
          <p className="text-[hsl(280,70%,45%)] text-xs font-medium tracking-widest uppercase mb-3 font-montserrat">
            Актуальные позиции
          </p>
          <h2 className="font-montserrat font-black text-[hsl(220,60%,14%)] text-3xl md:text-4xl gold-line">
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
                    <h3 className="font-montserrat font-bold text-[hsl(220,60%,14%)] text-lg leading-tight group-hover:text-[hsl(280,70%,45%)] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-[hsl(220,40%,40%)] text-sm mt-1">{v.department}</p>
                  </div>
                  <div className="shrink-0 bg-[hsl(280,70%,45%)] text-white px-3 py-1.5 text-xs font-montserrat font-bold whitespace-nowrap shadow-sm">
                    {v.salary}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {v.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/60 border border-white/80 text-[hsl(220,60%,25%)] text-xs px-2.5 py-1 font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
                    <a
                      href="#контакты"
                      className="mt-4 flex items-center justify-center gap-2 bg-[hsl(220,60%,18%)] text-white w-full py-3 text-sm font-montserrat font-bold tracking-wide hover:bg-[hsl(280,70%,45%)] transition-colors duration-200 shadow-md"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon name="Send" size={15} />
                      Откликнуться на эту вакансию
                    </a>
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

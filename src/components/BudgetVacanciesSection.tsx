import { useState } from "react";
import Icon from "@/components/ui/icon";

const BG = "https://cdn.poehali.dev/projects/34828b05-bf09-4644-97e2-763bce786a33/bucket/d7a38919-9c98-4036-89e6-a39fba50f7e0.png";

const vacancies = [
  {
    id: 1,
    title: "• Благоустройство территории\n• Ремонт мебели",
    department: "МОУ Воздвиженская СШ · с. Воздвиженское, Школьная ул., д. 15",
    minAge: 14,
    hours: "Июнь",
    type: "Благоустройство",
    salary: "6 719,5 ₽/мес",
    description:
      "Работа в июне на летний период:\n• Благоустройство территории;\n• Ремонт мебели.\n\nРаботодатель: МОУ Воздвиженская СШ\nАдрес: Нижегородская область, Воскресенский м.о., с. Воздвиженское, Школьная ул., д. 15",
    tags: [],
    restrictions: "С 14 лет при наличии письменного согласия родителей. Не более 4 ч/день в период учёбы.",
    contact: "8 (952) 469-88-38 — Смирнова Татьяна Михайловна",
  },
  {
    id: 2,
    title: "Благоустройство территории",
    department: "МАОУ Воскресенская СШ · рп. Воскресенское, ул. Панфилова, зд. 6",
    minAge: 14,
    hours: "Июль",
    type: "Благоустройство",
    salary: "6 719,5 ₽/мес",
    description:
      "Временная работа на июль по благоустройству территории.\n\nРаботодатель: МАОУ Воскресенская СШ\nАдрес: Нижегородская область, Воскресенский м.о., рп. Воскресенское, ул. Панфилова, зд. 6",
    tags: [],
    restrictions: "С 14 лет при наличии письменного согласия родителей. Не более 4 ч/день в период учёбы.",
    contact: "8 (904) 920-24-02 — Целищева Елизавета Александровна",
  },
  {
    id: 3,
    title: "• Благоустройство территории\n• Ремонт мебели",
    department: "МОУ Задворковская СШ · д. Задворка, ул. Мира, д. 2",
    minAge: 14,
    hours: "Июнь",
    type: "Благоустройство",
    salary: "6 719,5 ₽/мес",
    description:
      "Работа в июне на летний период:\n• Благоустройство территории;\n• Ремонт мебели.\n\nРаботодатель: МОУ Задворковская СШ\nАдрес: Нижегородская область, Воскресенский м.о., д. Задворка, ул. Мира, д. 2",
    tags: [],
    restrictions: "С 14 лет при наличии письменного согласия родителей. Не более 4 ч/день в период учёбы.",
    contact: "8 (961) 635-28-79 — Бадаева Наталья Александровна",
  },
  {
    id: 4,
    title: "Благоустройство территории",
    department: "МОУ Глуховская СШ · с. Глухово, ул. Школьная, д. 7",
    minAge: 14,
    hours: "Июнь",
    type: "Благоустройство",
    salary: "6 719,5 ₽/мес",
    description:
      "Временная работа в июне по благоустройству территории.\n\nРаботодатель: МОУ Глуховская СШ\nАдрес: Нижегородская область, Воскресенский м.о., с. Глухово, ул. Школьная, д. 7",
    tags: [],
    restrictions: "С 14 лет при наличии письменного согласия родителей. Не более 4 ч/день в период учёбы.",
    contact: "8 (952) 467-51-64 — Трифонова Ольга Юрьевна",
  },
  {
    id: 5,
    title: "Помощник администратора визит-центра",
    department: "МАУ Природный парк «Воскресенское Поветлужье» · с. Владимирское, Октябрьская ул., д. 23",
    minAge: 14,
    hours: "Временная",
    type: "Администрирование",
    salary: "От 500 ₽/смена",
    description:
      "Вакансия для несовершеннолетних сотрудников.\n\nПомощник администратора визит-центра.\n\nЗанятость: временная.\nЗаработная плата: от 500 рублей за смену.\n\nРаботодатель: МАУ Природный парк «Воскресенское Поветлужье»\nАдрес: Нижегородская область, Воскресенский м.о., с. Владимирское, Октябрьская ул., д. 23",
    tags: [],
    restrictions: "С 14 лет при наличии письменного согласия родителей. Не более 4 ч/день в период учёбы.",
    contact: "+7 (904) 787-94-55 — Волкова Дарья Антоновна",
  },
];

export default function BudgetVacanciesSection() {
  const [activeVacancy, setActiveVacancy] = useState<number | null>(null);

  return (
    <section
      id="бюджетные"
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
            Предприятия бюджетной сферы
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
                        <Icon name="AlertCircle" size={15} className="text-[hsl(280,70%,45%)] mt-0.5 shrink-0" />
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
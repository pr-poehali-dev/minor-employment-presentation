import { useState } from "react";
import Icon from "@/components/ui/icon";

const BG = "https://cdn.poehali.dev/projects/34828b05-bf09-4644-97e2-763bce786a33/bucket/d7a38919-9c98-4036-89e6-a39fba50f7e0.png";

const vacancies = [
  {
    id: 1,
    title: "Мастер-специалист",
    department: "МАУК Музей-заповедник «Град Китеж» · Нижегородская обл., Воскресенский р-н, с. Владимирское, ул. Пролетарская, д. 37",
    minAge: 14,
    hours: "Частичная / Сезонная",
    type: "Культура",
    salary: "20 000 ₽/мес",
    description:
      "Частичная занятость (несколько часов в день или в неделю) и сезонная работа (на летний период).\nМастер-специалист в музее-заповеднике «Град Китеж».\nРаботодатель: МАУК Музей-заповедник «Град Китеж», Нижегородская обл., Воскресенский р-н, с. Владимирское, ул. Пролетарская, д. 37.\nОплата труда — 20 000 ₽/мес.",
    tags: ["Частичная занятость", "Сезонная работа", "Лето", "Культура"],
    restrictions: "С 14 лет при наличии письменного согласия родителей. Не более 4 ч/день в период учёбы.",
  },
  {
    id: 2,
    title: "Учитель русского языка и литературы / Учитель английского языка",
    department: "МОУ Воздвиженская СШ",
    minAge: 18,
    hours: "Постоянная работа",
    type: "Образование",
    salary: "Обсуждается",
    description:
      "Две вакансии:\n• Учитель русского языка и литературы;\n• Учитель английского языка.\nРаботодатель: МОУ Воздвиженская СШ.\nЗаработная плата обсуждается при оформлении.",
    tags: ["Постоянная работа", "Образование"],
    restrictions: "С 18 лет. Наличие педагогического образования.",
  },
  {
    id: 3,
    title: "Воспитатель",
    department: "МКДОУ Воскресенский детский сад № 4 «Рябинка» · 606730, Нижегородская обл., р.п. Воскресенское, ул. Строителей, д. 9",
    minAge: 18,
    hours: "Постоянная работа",
    type: "Дошкольное образование",
    salary: "Обсуждается",
    description:
      "Воспитатель в муниципальном казённом дошкольном образовательном учреждении.\nРаботодатель: МКДОУ Воскресенский детский сад № 4 «Рябинка», 606730, Нижегородская обл., р.п. Воскресенское, ул. Строителей, д. 9.\nЗаработная плата обсуждается при оформлении.",
    tags: ["Постоянная работа", "Дошкольное образование", "Педагогика"],
    restrictions: "С 18 лет. Наличие педагогического/профильного образования.",
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
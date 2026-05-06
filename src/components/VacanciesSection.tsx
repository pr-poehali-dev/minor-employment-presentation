import Icon from "@/components/ui/icon";

const BG = "https://cdn.poehali.dev/projects/34828b05-bf09-4644-97e2-763bce786a33/bucket/d7a38919-9c98-4036-89e6-a39fba50f7e0.png";

const vacancies = [
  {
    id: 1,
    title: "Горничная / Помощник повара / Гид",
    department: "ООО КомандаГорький НН · с. Богородское, Воскресенский р-н",
    minAge: 14,
    hours: "Частичная занятость",
    type: "Лёгкий труд",
    salary: "до 200 ₽/час",
    description:
      "Три позиции на летний период:\n• Горничная — уборка номеров и общих зон, комфортные условия;\n• Помощник повара — подготовка ингредиентов, сервировка, обучение на месте;\n• Гид — проведение экскурсий по Воскресенскому району, общение с гостями.\nГибкий график — несколько часов в день или неделю. Работодатель: ООО КомандаГорький НН, 606730, Нижегородская обл., Воскресенский р-н, с. Богородское.",
    tags: ["Летний период", "Частичная занятость", "Без опыта"],
    restrictions: "С 14 лет при наличии письменного согласия родителей. Не более 4 ч/день в период учёбы.",
  },
  {
    id: 2,
    title: "Пекарь ночной смены",
    department: "ИП Шамонин М.М. · д. Калиниха, Береговая ул., 6",
    minAge: 16,
    hours: "Ночная смена",
    type: "Физический труд",
    salary: "30 000 ₽/мес",
    description:
      "Выпечка хлебобулочных изделий в ночную смену. Работодатель: ИП Шамонин М.М., 606735, Нижегородская обл., Воскресенский м.о., д. Калиниха, Береговая улица, 6.",
    tags: ["Постоянная работа", "Ночная смена", "Пищевое производство"],
    restrictions: "С 16 лет. Ночной труд допускается только с 16 лет при наличии письменного согласия родителей и медицинской справки.",
  },
  {
    id: 3,
    title: "Рамщик",
    department: "ООО \"Стройсервис\" · Воскресенский округ, д. Задворка, пер. Мира, д. 6",
    minAge: 16,
    hours: "Сезонная работа",
    type: "Физический труд",
    salary: "27 093 ₽/мес",
    description:
      "Сезонная работа рамщиком на деревообрабатывающем производстве. Работодатель: ООО «Стройсервис», 606730, Нижегородская область, Воскресенский р-н, р.п. Воскресенское. Адрес объекта: Воскресенский округ, д. Задворка, пер. Мира, д. 6.\nОплата труда — МРОТ (27 093 ₽/мес).",
    tags: ["Сезонная работа", "Деревообработка"],
    restrictions: "С 16 лет. Допускается при наличии письменного согласия родителей и медицинской справки.",
  },
  {
    id: 10,
    title: "Продавец",
    department: "ПК \"Воскресенский Кооператор\" · 606730, Нижегородская обл., Воскресенский р-н, рп. Воскресенское, ул. Ленина, д. 113",
    minAge: 16,
    hours: "Постоянная работа",
    type: "Торговля",
    salary: "27 093 ₽/мес",
    description:
      "Постоянная работа продавцом (1 вакансия).\nОплата труда из расчёта минимального оклада (МРОТ — 27 093 ₽/мес).\nРаботодатель: ПК «Воскресенский Кооператор», 606730, Нижегородская область, Воскресенский район, рп. Воскресенское, ул. Ленина, д. 113.",
    tags: ["Постоянная работа", "Торговля"],
    restrictions: "С 16 лет. Допускается при наличии письменного согласия родителей и медицинской справки.",
  },
  {
    id: 9,
    title: "Водитель / Станочник / Грузчик-разнорабочий",
    department: "ООО \"НижЛесКом\" · г. Нижний Новгород, ул. Вторчермета, д. 1, лит. АЛ",
    minAge: 16,
    hours: "Частичная / Сезонная",
    type: "Производство",
    salary: "от 800 ₽/час",
    description:
      "Частичная занятость (несколько часов в день или в неделю) и сезонная работа на летний период. Три позиции:\n• Водитель — управление транспортным средством;\n• Станочник — работа на производственных станках;\n• Грузчик-разнорабочий — погрузочно-разгрузочные и общие хозяйственные работы.\nОплата от 800 ₽/час.\nРаботодатель: ООО «НижЛесКом», г. Нижний Новгород, ул. Вторчермета, д. 1, лит. АЛ.",
    tags: ["Частичная занятость", "Сезонная работа", "Производство"],
    restrictions: "С 16 лет. Допускается при наличии письменного согласия родителей и медицинской справки.",
  },
  {
    id: 8,
    title: "Работник леса",
    department: "ООО \"Артель лес\" · Нижегородская обл., Воскресенский р-н, д. Шурговаш, ул. Школьная, д. 8",
    minAge: 16,
    hours: "Сезонная работа",
    type: "Лесозаготовка",
    salary: "40 640 ₽/мес",
    description:
      "Сезонная работа (на летний период) работником леса. Сфера деятельности: лесозаготовка.\nОплата труда — 1,5 МРОТ (40 640 ₽/мес).\nРаботодатель: ООО «Артель лес», Нижегородская область, Воскресенский район, д. Шурговаш, ул. Школьная, д. 8.",
    tags: ["Сезонная работа", "Лесозаготовка", "Лето"],
    restrictions: "С 16 лет. Допускается при наличии письменного согласия родителей и медицинской справки.",
  },
  {
    id: 6,
    title: "Водитель категории Е",
    department: "ООО \"Метрополь\" · Нижегородская обл., Воскресенский р-н, д. Большие Отары, ул. Луговая, д. 12",
    minAge: 18,
    hours: "Постоянная работа",
    type: "Транспорт",
    salary: "Обсуждается",
    description:
      "Постоянная работа водителем категории Е.\nРаботодатель: ООО «Метрополь», 606730, Нижегородская область, Воскресенский район, д. Большие Отары, ул. Луговая, д. 12.\nЗаработная плата обсуждается при оформлении.",
    tags: ["Постоянная работа", "Транспорт", "Категория Е"],
    restrictions: "С 18 лет. Наличие водительского удостоверения категории Е обязательно.",
  },
  {
    id: 7,
    title: "Тракторист / Разнорабочий",
    department: "ООО \"БиоЭнергия\" · Нижегородская обл., Воскресенский р-н, сп. Калиниха, ул. Механизаторов, д. 20/2",
    minAge: 16,
    hours: "Постоянная работа",
    type: "Сельское хозяйство",
    salary: "30 000 ₽/мес",
    description:
      "Постоянная работа по двум позициям:\n• Тракторист — управление трактором и сельскохозяйственной техникой;\n• Разнорабочий — выполнение общих хозяйственных работ.\nРаботодатель: ООО «БиоЭнергия», 606730, Нижегородская обл., Воскресенский р-н, сп. Калиниха, ул. Механизаторов, д. 20/2.",
    tags: ["Постоянная работа", "Сельское хозяйство"],
    restrictions: "С 16 лет. Для тракториста — наличие удостоверения тракториста-машиниста.",
  },
  {
    id: 5,
    title: "Оператор оборудования / Грузчик",
    department: "ООО \"ГеоМакс-НН\" · Нижегородская обл., Воскресенский р-н, с. Богородское, ул. 60 лет Октября, д. 202а",
    minAge: 16,
    hours: "Временная работа",
    type: "Производство",
    salary: "Обсуждается",
    description:
      "Временная работа (на определённый срок) на производстве. Две позиции:\n• Оператор оборудования — управление и контроль производственного оборудования;\n• Грузчик — погрузочно-разгрузочные работы.\nЗаработная плата обсуждается индивидуально при оформлении.\nРаботодатель: ООО «ГеоМакс-НН», Нижегородская обл., Воскресенский р-н, с. Богородское, ул. 60 лет Октября, д. 202а.",
    tags: ["Временная работа", "Производство", "Без опыта"],
    restrictions: "С 16 лет. Допускается при наличии письменного согласия родителей и медицинской справки.",
  },
  {
    id: 4,
    title: "Мастер по лесу",
    department: "ИП Миронов Василий Борисович · 606734, Нижегородская обл., Воскресенский м.о., д. Егорово",
    minAge: 16,
    hours: "Временная работа",
    type: "Деревопереработка, лесозаготовка",
    salary: "27 093 ₽/мес",
    description:
      "Временная работа (на определённый срок) мастером по лесу. Сфера деятельности: деревопереработка, лесозаготовка.\nТребование к опыту: через год-два.\nРаботодатель: ИП Миронов Василий Борисович, 606734, Нижегородская обл., Воскресенский м.о., д. Егорово.\nОплата труда — не ниже МРОТ (27 093 ₽/мес).",
    tags: ["Временная работа", "Лесозаготовка", "Деревопереработка"],
    restrictions: "С 16 лет. Допускается при наличии письменного согласия родителей и медицинской справки.",
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
import { useState } from "react";
import Icon from "@/components/ui/icon";

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

const benefits = [
  {
    icon: "ShieldCheck",
    title: "Официальное трудоустройство",
    desc: "Трудовой договор, запись в трудовую книжку, страховые взносы — всё по закону",
  },
  {
    icon: "Clock",
    title: "Гибкий график",
    desc: "Учебный план в приоритете. Расписание формируется вместе с сотрудником",
  },
  {
    icon: "BookOpen",
    title: "Обучение и наставник",
    desc: "Каждому новому сотруднику назначается куратор и программа вхождения в должность",
  },
  {
    icon: "Heart",
    title: "ДМС и медосмотры",
    desc: "Добровольное медицинское страхование, регулярные профосмотры за счёт компании",
  },
  {
    icon: "TrendingUp",
    title: "Карьерный рост",
    desc: "75% руководителей среднего звена выросли из студентов-ассистентов",
  },
  {
    icon: "Award",
    title: "Рекомендательные письма",
    desc: "После 3 месяцев работы выдаём официальные рекомендации и портфолио",
  },
];

export default function Index() {
  const [activeVacancy, setActiveVacancy] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    vacancy: "",
    comment: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background font-ibm">
      {/* HEADER */}
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

      {/* HERO */}
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

      {/* VACANCIES */}
      <section id="вакансии" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[hsl(45,90%,45%)] text-xs font-medium tracking-widest uppercase mb-3 font-montserrat">
              Актуальные позиции
            </p>
            <h2 className="font-montserrat font-black text-foreground text-3xl md:text-4xl gold-line">
              Открытые вакансии
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {vacancies.map((v, i) => (
              <div
                key={v.id}
                className="bg-white border border-border hover:border-[hsl(220,60%,18%)] transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${i * 100}ms` }}
                onClick={() => setActiveVacancy(activeVacancy === v.id ? null : v.id)}
              >
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-montserrat font-bold text-foreground text-lg leading-tight group-hover:text-[hsl(220,60%,18%)] transition-colors">
                        {v.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">{v.department}</p>
                    </div>
                    <div className="shrink-0 bg-[hsl(220,60%,18%)] text-[hsl(45,90%,58%)] px-3 py-1.5 text-xs font-montserrat font-bold whitespace-nowrap">
                      {v.salary}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {v.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-background border border-border">
                      <Icon name="User" size={16} className="text-[hsl(45,90%,45%)] mx-auto mb-1" />
                      <div className="text-[hsl(220,60%,18%)] font-montserrat font-black text-lg">
                        {v.minAge}+
                      </div>
                      <div className="text-muted-foreground text-[10px] uppercase tracking-wide">
                        Лет
                      </div>
                    </div>
                    <div className="text-center p-3 bg-background border border-border">
                      <Icon name="Clock" size={16} className="text-[hsl(45,90%,45%)] mx-auto mb-1" />
                      <div className="text-[hsl(220,60%,18%)] font-montserrat font-bold text-xs leading-tight">
                        {v.hours.split(",")[0]}
                      </div>
                      <div className="text-muted-foreground text-[10px] uppercase tracking-wide mt-1">
                        Время
                      </div>
                    </div>
                    <div className="text-center p-3 bg-background border border-border">
                      <Icon name="FileText" size={16} className="text-[hsl(45,90%,45%)] mx-auto mb-1" />
                      <div className="text-[hsl(220,60%,18%)] font-montserrat font-bold text-xs leading-tight">
                        {v.type}
                      </div>
                      <div className="text-muted-foreground text-[10px] uppercase tracking-wide mt-1">
                        Тип
                      </div>
                    </div>
                  </div>

                  {activeVacancy === v.id && (
                    <div className="mt-2 animate-fade-in">
                      <p className="text-foreground/75 text-sm leading-relaxed mb-4">
                        {v.description}
                      </p>
                      <div className="bg-[hsl(45,90%,58%)]/10 border-l-4 border-[hsl(45,90%,58%)] p-4">
                        <div className="flex items-start gap-2">
                          <Icon
                            name="AlertCircle"
                            size={15}
                            className="text-[hsl(45,90%,40%)] mt-0.5 shrink-0"
                          />
                          <div>
                            <div className="text-[11px] font-montserrat font-bold uppercase tracking-wide text-[hsl(220,60%,18%)] mb-1">
                              Возрастные ограничения
                            </div>
                            <div className="text-sm text-foreground/70">{v.restrictions}</div>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#контакты"
                        className="mt-4 flex items-center justify-center gap-2 bg-[hsl(220,60%,18%)] text-[hsl(45,90%,58%)] w-full py-3 text-sm font-montserrat font-bold tracking-wide hover:bg-[hsl(220,60%,22%)] transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon name="Send" size={15} />
                        Откликнуться на эту вакансию
                      </a>
                    </div>
                  )}

                  <button className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 w-full justify-end">
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

      {/* BENEFITS */}
      <section id="преимущества" className="py-20 bg-[hsl(220,60%,18%)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[hsl(45,90%,58%)] text-xs font-medium tracking-widest uppercase mb-3 font-montserrat">
              Почему мы
            </p>
            <h2 className="font-montserrat font-black text-white text-3xl md:text-4xl">
              Преимущества{" "}
              <span className="text-[hsl(45,90%,58%)]">работодателя</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-[hsl(220,60%,18%)] p-8 hover:bg-[hsl(220,55%,23%)] transition-colors duration-300 group"
              >
                <div className="w-12 h-12 border border-[hsl(45,90%,58%)]/40 flex items-center justify-center mb-5 group-hover:border-[hsl(45,90%,58%)] transition-colors duration-300">
                  <Icon name={b.icon} size={22} className="text-[hsl(45,90%,58%)]" />
                </div>
                <h3 className="font-montserrat font-bold text-white text-base mb-3 leading-snug">
                  {b.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL INFO */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "Scale",
                title: "Правовая база",
                items: [
                  "ТК РФ ст. 63 — труд с 14 лет с согласия родителей",
                  "ТК РФ ст. 92 — сокращённое рабочее время",
                  "ТК РФ ст. 265 — запрет тяжёлых и вредных работ",
                ],
              },
              {
                icon: "Calendar",
                title: "Рабочее время",
                items: [
                  "14–15 лет: до 4 ч/день (24 ч/неделю)",
                  "15–16 лет: до 5 ч/день (24 ч/неделю)",
                  "16–18 лет: до 7 ч/день (35 ч/неделю)",
                ],
              },
              {
                icon: "FileCheck",
                title: "Необходимые документы",
                items: [
                  "Паспорт или свидетельство о рождении",
                  "Письменное согласие одного из родителей",
                  "Справка из образовательного учреждения",
                ],
              },
            ].map((block) => (
              <div key={block.title} className="bg-white border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name={block.icon} size={18} className="text-[hsl(220,60%,18%)]" />
                  <h3 className="font-montserrat font-bold text-foreground text-sm uppercase tracking-wide">
                    {block.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[hsl(45,90%,58%)] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="контакты" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[hsl(45,90%,45%)] text-xs font-medium tracking-widest uppercase mb-3 font-montserrat">
                Связаться с нами
              </p>
              <h2 className="font-montserrat font-black text-foreground text-3xl md:text-4xl mb-6 gold-line">
                Подать заявку
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-10">
                Заполните форму, и наш HR-менеджер свяжется с вами в течение одного
                рабочего дня. Родители могут заполнить форму от имени подростка.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "Phone",
                    label: "Телефон",
                    value: "+7 (800) 000-00-00",
                    sub: "Бесплатно, пн–пт 9:00–18:00",
                  },
                  {
                    icon: "Mail",
                    label: "Email",
                    value: "hr@karerapro.ru",
                    sub: "Ответ в течение 24 часов",
                  },
                  {
                    icon: "MapPin",
                    label: "Адрес",
                    value: "г. Москва, ул. Примерная, 1",
                    sub: "Офис открыт пн–пт 9:00–18:00",
                  },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                      <Icon name={c.icon} size={16} className="text-[hsl(220,60%,18%)]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-montserrat font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                        {c.label}
                      </div>
                      <div className="font-medium text-foreground">{c.value}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-border p-8">
              <h3 className="font-montserrat font-bold text-foreground text-lg mb-6">
                Форма обратной связи
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-montserrat font-semibold uppercase tracking-wide text-foreground/60 mb-1.5">
                    Имя и фамилия *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Иван Иванов"
                    className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-[hsl(220,60%,18%)] transition-colors bg-background"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-montserrat font-semibold uppercase tracking-wide text-foreground/60 mb-1.5">
                      Возраст *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleFormChange}
                      placeholder="16"
                      min="14"
                      max="18"
                      className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-[hsl(220,60%,18%)] transition-colors bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-montserrat font-semibold uppercase tracking-wide text-foreground/60 mb-1.5">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-[hsl(220,60%,18%)] transition-colors bg-background"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-montserrat font-semibold uppercase tracking-wide text-foreground/60 mb-1.5">
                    Вакансия
                  </label>
                  <select
                    name="vacancy"
                    value={formData.vacancy}
                    onChange={handleFormChange}
                    className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-[hsl(220,60%,18%)] transition-colors bg-background appearance-none cursor-pointer"
                  >
                    <option value="">Выберите вакансию</option>
                    {vacancies.map((v) => (
                      <option key={v.id} value={v.title}>
                        {v.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-montserrat font-semibold uppercase tracking-wide text-foreground/60 mb-1.5">
                    Комментарий
                  </label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleFormChange}
                    rows={3}
                    placeholder="Расскажите о себе или задайте вопрос..."
                    className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-[hsl(220,60%,18%)] transition-colors bg-background resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[hsl(220,60%,18%)] text-[hsl(45,90%,58%)] py-3.5 font-montserrat font-bold text-sm tracking-wide hover:bg-[hsl(220,55%,23%)] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Icon name="Send" size={15} />
                  Отправить заявку
                </button>
                <p className="text-[10px] text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(220,60%,12%)] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[hsl(45,90%,58%)] flex items-center justify-center">
              <Icon name="Briefcase" size={13} className="text-[hsl(220,60%,18%)]" />
            </div>
            <span className="font-montserrat font-bold text-white text-sm">КарьераПро</span>
          </div>
          <p className="text-white/35 text-xs text-center">
            © 2024 КарьераПро. Все вакансии соответствуют требованиям ТК РФ.
          </p>
          <div className="flex items-center gap-1 text-xs text-white/35">
            <Icon name="Shield" size={12} className="text-[hsl(45,90%,58%)]" />
            <span>Официальный работодатель</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

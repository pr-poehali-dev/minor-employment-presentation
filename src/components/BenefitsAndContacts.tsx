import Icon from "@/components/ui/icon";
import { vacancies } from "@/components/VacanciesSection";

const BG = "https://cdn.poehali.dev/projects/34828b05-bf09-4644-97e2-763bce786a33/bucket/d7a38919-9c98-4036-89e6-a39fba50f7e0.png";

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

interface BenefitsAndContactsProps {
  formData: {
    name: string;
    age: string;
    phone: string;
    vacancy: string;
    comment: string;
  };
  handleFormChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
}

export default function BenefitsAndContacts({ formData, handleFormChange }: BenefitsAndContactsProps) {
  return (
    <>
      {/* BENEFITS */}
      <section
        id="преимущества"
        className="relative py-20 overflow-hidden"
        style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center 40%" }}
      >
        <div className="absolute inset-0 bg-[hsl(220,60%,18%)]/60 backdrop-blur-[1px]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[hsl(180,80%,75%)] text-xs font-medium tracking-widest uppercase mb-3 font-montserrat">
              Почему мы
            </p>
            <h2 className="font-montserrat font-black text-white text-3xl md:text-4xl">
              Преимущества{" "}
              <span className="text-[hsl(300,80%,80%)]">работодателя</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/20 transition-colors duration-300 group border border-white/10 hover:border-white/30"
              >
                <div className="w-12 h-12 border border-white/30 flex items-center justify-center mb-5 group-hover:border-[hsl(300,80%,80%)] transition-colors duration-300">
                  <Icon name={b.icon} size={22} className="text-[hsl(300,80%,85%)]" />
                </div>
                <h3 className="font-montserrat font-bold text-white text-base mb-3 leading-snug">
                  {b.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL INFO */}
      <section
        className="relative py-16 overflow-hidden"
        style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center 60%" }}
      >
        <div className="absolute inset-0 bg-white/55 backdrop-blur-[2px]" />
        <div className="relative max-w-6xl mx-auto px-6">
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
              <div key={block.title} className="bg-white/70 backdrop-blur-sm border border-white/60 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name={block.icon} size={18} className="text-[hsl(280,70%,45%)]" />
                  <h3 className="font-montserrat font-bold text-[hsl(220,60%,14%)] text-sm uppercase tracking-wide">
                    {block.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[hsl(220,40%,30%)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[hsl(280,70%,55%)] mt-1.5 shrink-0" />
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
      <section
        id="контакты"
        className="relative py-20 overflow-hidden"
        style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center bottom" }}
      >
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[2px]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[hsl(280,70%,45%)] text-xs font-medium tracking-widest uppercase mb-3 font-montserrat">
                Связаться с нами
              </p>
              <h2 className="font-montserrat font-black text-[hsl(220,60%,14%)] text-3xl md:text-4xl mb-6 gold-line">
                Подать заявку
              </h2>
              <p className="text-[hsl(220,40%,35%)] text-base leading-relaxed mb-10">
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
                    <div className="w-10 h-10 border border-white/60 bg-white/50 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-sm">
                      <Icon name={c.icon} size={16} className="text-[hsl(280,70%,45%)]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-montserrat font-bold uppercase tracking-widest text-[hsl(220,40%,50%)] mb-0.5">
                        {c.label}
                      </div>
                      <div className="font-medium text-[hsl(220,60%,14%)]">{c.value}</div>
                      <div className="text-xs text-[hsl(220,40%,45%)] mt-0.5">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm border border-white/60 p-8 shadow-md">
              <h3 className="font-montserrat font-bold text-[hsl(220,60%,14%)] text-lg mb-6">
                Форма обратной связи
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-montserrat font-semibold uppercase tracking-wide text-[hsl(220,40%,45%)] mb-1.5">
                    Имя и фамилия *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Иван Иванов"
                    className="w-full border border-white/60 bg-white/60 px-4 py-3 text-sm focus:outline-none focus:border-[hsl(280,70%,45%)] transition-colors backdrop-blur-sm text-[hsl(220,60%,14%)] placeholder:text-[hsl(220,40%,60%)]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-montserrat font-semibold uppercase tracking-wide text-[hsl(220,40%,45%)] mb-1.5">
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
                      className="w-full border border-white/60 bg-white/60 px-4 py-3 text-sm focus:outline-none focus:border-[hsl(280,70%,45%)] transition-colors backdrop-blur-sm text-[hsl(220,60%,14%)] placeholder:text-[hsl(220,40%,60%)]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-montserrat font-semibold uppercase tracking-wide text-[hsl(220,40%,45%)] mb-1.5">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full border border-white/60 bg-white/60 px-4 py-3 text-sm focus:outline-none focus:border-[hsl(280,70%,45%)] transition-colors backdrop-blur-sm text-[hsl(220,60%,14%)] placeholder:text-[hsl(220,40%,60%)]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-montserrat font-semibold uppercase tracking-wide text-[hsl(220,40%,45%)] mb-1.5">
                    Вакансия
                  </label>
                  <select
                    name="vacancy"
                    value={formData.vacancy}
                    onChange={handleFormChange}
                    className="w-full border border-white/60 bg-white/60 px-4 py-3 text-sm focus:outline-none focus:border-[hsl(280,70%,45%)] transition-colors backdrop-blur-sm appearance-none cursor-pointer text-[hsl(220,60%,14%)]"
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
                  <label className="block text-xs font-montserrat font-semibold uppercase tracking-wide text-[hsl(220,40%,45%)] mb-1.5">
                    Комментарий
                  </label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleFormChange}
                    rows={3}
                    placeholder="Расскажите о себе или задайте вопрос..."
                    className="w-full border border-white/60 bg-white/60 px-4 py-3 text-sm focus:outline-none focus:border-[hsl(280,70%,45%)] transition-colors backdrop-blur-sm resize-none text-[hsl(220,60%,14%)] placeholder:text-[hsl(220,40%,60%)]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[hsl(220,60%,18%)] text-white py-3.5 font-montserrat font-bold text-sm tracking-wide hover:bg-[hsl(280,70%,45%)] transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
                >
                  <Icon name="Send" size={15} />
                  Отправить заявку
                </button>
                <p className="text-[10px] text-[hsl(220,40%,50%)] text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="relative py-8 overflow-hidden"
        style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center bottom" }}
      >
        <div className="absolute inset-0 bg-[hsl(220,60%,18%)]/75 backdrop-blur-sm" />
        <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[hsl(280,70%,55%)] flex items-center justify-center">
              <Icon name="Briefcase" size={13} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-white text-sm">КарьераПро</span>
          </div>
          <p className="text-white/40 text-xs text-center">
            © 2024 КарьераПро. Все вакансии соответствуют требованиям ТК РФ.
          </p>
          <div className="flex items-center gap-1 text-xs text-white/40">
            <Icon name="Shield" size={12} className="text-[hsl(300,80%,80%)]" />
            <span>Официальный работодатель</span>
          </div>
        </div>
      </footer>
    </>
  );
}

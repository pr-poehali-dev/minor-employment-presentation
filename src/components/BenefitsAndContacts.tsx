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


    </>
  );
}
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



    </>
  );
}
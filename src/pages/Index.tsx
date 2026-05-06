import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import VacanciesSection from "@/components/VacanciesSection";
import BenefitsAndContacts from "@/components/BenefitsAndContacts";

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
      <HeroSection />
      <VacanciesSection activeVacancy={activeVacancy} setActiveVacancy={setActiveVacancy} />
      <BenefitsAndContacts formData={formData} handleFormChange={handleFormChange} />
    </div>
  );
}
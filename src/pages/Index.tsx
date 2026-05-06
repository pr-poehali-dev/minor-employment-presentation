import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import EmployersSlider from "@/components/EmployersSlider";
import VacanciesSection from "@/components/VacanciesSection";
import BudgetVacanciesSection from "@/components/BudgetVacanciesSection";
import RightsSection from "@/components/RightsSection";
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
      <EmployersSlider />
      <VacanciesSection activeVacancy={activeVacancy} setActiveVacancy={setActiveVacancy} />
      <BudgetVacanciesSection />
      <RightsSection />
      <BenefitsAndContacts formData={formData} handleFormChange={handleFormChange} />
    </div>
  );
}
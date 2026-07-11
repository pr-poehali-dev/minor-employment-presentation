import Icon from "@/components/ui/icon";

const BG = "https://cdn.poehali.dev/projects/34828b05-bf09-4644-97e2-763bce786a33/bucket/d7a38919-9c98-4036-89e6-a39fba50f7e0.png";

const blocks = [
  {
    icon: "ShieldCheck",
    title: "Возраст приёма на работу",
    items: [
      "С 14 лет — лёгкий труд с письменного согласия одного из родителей (ТК РФ ст. 63)",
      "С 15 лет — самостоятельно, если получено основное общее образование",
      "С 16 лет — на общих основаниях; тяжёлые и вредные работы запрещены до 18 лет",
    ],
  },
  {
    icon: "Clock",
    title: "Рабочее время",
    items: [
      "14–15 лет: не более 4 часов в день / 24 часов в неделю",
      "15–16 лет: не более 5 часов в день / 24 часов в неделю",
      "16–18 лет: не более 7 часов в день / 35 часов в неделю",
      "В период учёбы рабочее время сокращается вдвое (ТК РФ ст. 92)",
    ],
  },
  {
    icon: "FileText",
    title: "Обязательные документы",
    items: [
      "Паспорт или свидетельство о рождении",
      "Письменное согласие одного из родителей или опекуна",
      "Справка из школы / учебного заведения",
      "Медицинская справка (для отдельных видов работ)",
    ],
  },
  {
    icon: "Banknote",
    title: "Оплата труда",
    items: [
      "Зарплата выплачивается пропорционально отработанному времени",
      "Не может быть ниже МРОТ при полной занятости (27 093 ₽/мес с 1 января 2026 г.)",
      "Удержание налогов (НДФЛ) — обязанность работодателя",
      "Отпуск — 31 календарный день; нельзя заменить денежной компенсацией или отозвать из отпуска (ТК РФ ст. 267)",
    ],
  },
  {
    icon: "Ban",
    title: "Что запрещено",
    items: [
      "Тяжёлый физический труд и работа с вредными условиями (ТК РФ ст. 265)",
      "Новые нормы переноски тяжестей с 1 марта 2026 г.: 14–15 лет — до 3 кг, 16–17 лет — до 4 кг (для девушек — на 1 кг меньше)",
      "Ночные смены (с 22:00 до 06:00), сверхурочная работа и командировки — запрещены до 18 лет",
      "Испытательный срок при приёме на работу до 18 лет запрещён (ТК РФ ст. 70)",
      "Работа в выходные и праздники — по общему правилу запрещена; исключение с 1 сентября 2025 г. — летние каникулы по направлению службы занятости или в составе студотряда",
    ],
  },
  {
    icon: "Scale",
    title: "Как защитить свои права",
    items: [
      "При нарушениях — обратиться в Государственную инспекцию труда (ГИТ)",
      "Телефон горячей линии Роструда: 8-800-707-88-41 (бесплатно)",
      "Жалобу можно подать онлайн: <a href=\"https://онлайнинспекция.рф\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline hover:text-[hsl(280,70%,45%)]\">онлайнинспекция.рф</a>",
      "Родители вправе расторгнуть договор, если работа вредит здоровью или учёбе",
    ],
  },
];

export default function RightsSection() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-[hsl(280,70%,45%)] text-xs font-medium tracking-widest uppercase mb-3 font-montserrat">
            Трудовой кодекс РФ
          </p>
          <h2 className="font-montserrat font-black text-[hsl(220,60%,14%)] text-3xl md:text-4xl inline-block gold-line">
            Кратко о правах несовершеннолетних работников
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((block) => (
            <div key={block.title} className="bg-white/70 backdrop-blur-sm border border-white/60 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[hsl(280,70%,45%)] flex items-center justify-center shrink-0">
                  <Icon name={block.icon} size={17} className="text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-[hsl(220,60%,14%)] text-sm leading-tight">
                  {block.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[hsl(220,40%,30%)] leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(280,70%,55%)] mt-1.5 shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[hsl(220,60%,14%)]/90 backdrop-blur-sm p-6 border-l-4 border-[hsl(45,90%,58%)]">
          <p className="text-white text-sm leading-relaxed font-montserrat">
            <span className="font-bold text-[hsl(45,90%,65%)]">Важно:</span> Работодатель обязан заключить письменный трудовой договор до начала работы. Устная договорённость не защищает ваши права. При любых сомнениях — консультируйтесь с родителями или обращайтесь в центр занятости.
          </p>
        </div>
      </div>
    </section>
  );
}
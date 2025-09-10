import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, BookOpen, GraduationCap, Laptop, Beaker, Calculator } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Рефераты и эссе",
    description: "Качественные рефераты по любым предметам от 500 рублей",
    price: "от 500₽",
    time: "от 6 часов"
  },
  {
    icon: BookOpen,
    title: "Курсовые работы",
    description: "Полноценные курсовые с практической частью и выводами",
    price: "от 2500₽",
    time: "от 3 дней"
  },
  {
    icon: GraduationCap,
    title: "Дипломные работы",
    description: "ВКР, магистерские диссертации с презентацией",
    price: "от 15000₽",
    time: "от 14 дней"
  },
  {
    icon: Laptop,
    title: "Контрольные работы",
    description: "Решение задач, ответы на вопросы по всем дисциплинам",
    price: "от 800₽",
    time: "от 12 часов"
  },
  {
    icon: Beaker,
    title: "Лабораторные работы",
    description: "Отчеты по лабораторным с расчетами и выводами",
    price: "от 600₽",
    time: "от 8 часов"
  },
  {
    icon: Calculator,
    title: "Статьи и доклады",
    description: "Научные статьи, доклады на конференции",
    price: "от 1200₽",
    time: "от 2 дней"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выполняем любые виды студенческих работ с гарантией качества и в срок
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {service.price}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {service.time}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
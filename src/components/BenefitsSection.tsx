import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Star, Headphones, Award, Lock } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Соблюдение сроков",
    description: "Выполняем работы точно в срок, включая срочные заказы от 6 часов"
  },
  {
    icon: Shield,
    title: "Гарантия уникальности",
    description: "Все работы проверяются на плагиат, уникальность от 70% гарантирована"
  },
  {
    icon: Star,
    title: "Высокое качество",
    description: "Работы выполняют авторы с профильным образованием и опытом от 5 лет"
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Всегда на связи для консультаций и ответов на ваши вопросы"
  },
  {
    icon: Award,
    title: "Бесплатные доработки",
    description: "Доработаем работу бесплатно до полного соответствия требованиям"
  },
  {
    icon: Lock,
    title: "Полная конфиденциальность",
    description: "Гарантируем анонимность и защиту ваших персональных данных"
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 8 лет помогаем студентам успешно сдавать работы и получать отличные оценки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
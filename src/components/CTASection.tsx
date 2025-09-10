import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Готовы заказать работу?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Свяжитесь с нами любым удобным способом, и мы рассчитаем стоимость вашей работы за 15 минут
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-card/90 backdrop-blur-sm border-primary-foreground/20">
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-2">Чат</h3>
              <p className="text-sm text-muted-foreground">Онлайн консультация 24/7</p>
            </CardContent>
          </Card>
          <Card className="bg-card/90 backdrop-blur-sm border-primary-foreground/20">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-2">Телефон</h3>
              <p className="text-sm text-muted-foreground">+7 (999) 123-45-67</p>
            </CardContent>
          </Card>
          <Card className="bg-card/90 backdrop-blur-sm border-primary-foreground/20">
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">info@example.com</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-button px-8 py-4 text-lg font-semibold"
          >
            Заказать сейчас
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-4 text-lg"
          >
            Рассчитать стоимость
          </Button>
        </div>

        <div className="mt-8 text-primary-foreground/80 text-sm">
          <p>Первая консультация бесплатно • Работаем с 2015 года • Более 15000 выполненных работ</p>
        </div>
      </div>
    </section>
  );
};
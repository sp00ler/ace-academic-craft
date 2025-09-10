import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Качественные студенческие работы
            <span className="block text-accent">на заказ за 24 часа</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Рефераты, курсовые, дипломы и другие работы от опытных авторов. 
            Гарантия качества, соблюдение сроков и полная конфиденциальность.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-button px-8 py-4 text-lg font-semibold"
          >
            Заказать работу
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg"
          >
            Узнать цену
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Card className="bg-card/90 backdrop-blur-sm p-6 text-center border-primary-foreground/20">
            <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-sm font-medium text-card-foreground">От 24 часов</p>
          </Card>
          <Card className="bg-card/90 backdrop-blur-sm p-6 text-center border-primary-foreground/20">
            <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-sm font-medium text-card-foreground">100% уникальность</p>
          </Card>
          <Card className="bg-card/90 backdrop-blur-sm p-6 text-center border-primary-foreground/20">
            <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-sm font-medium text-card-foreground">Гарантия качества</p>
          </Card>
          <Card className="bg-card/90 backdrop-blur-sm p-6 text-center border-primary-foreground/20">
            <Users className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-sm font-medium text-card-foreground">Опытные авторы</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
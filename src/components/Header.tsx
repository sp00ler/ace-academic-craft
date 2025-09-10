import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">StudyHelp</h1>
              <p className="text-xs text-muted-foreground">Студенческие работы на заказ</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
              Преимущества
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm">
              Узнать цену
            </Button>
            <Button size="sm" className="shadow-button">
              Заказать
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-3">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Услуги
              </a>
              <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Преимущества
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                FAQ
              </a>
              <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Контакты
              </a>
              <div className="flex gap-3 pt-3">
                <Button variant="outline" size="sm" className="flex-1">
                  Узнать цену
                </Button>
                <Button size="sm" className="flex-1">
                  Заказать
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
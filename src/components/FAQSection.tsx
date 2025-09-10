import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Как быстро можно выполнить работу?",
    answer: "Минимальный срок выполнения зависит от типа работы: рефераты - от 6 часов, курсовые - от 3 дней, дипломные - от 14 дней. Возможно срочное выполнение за доплату."
  },
  {
    question: "Какая гарантия уникальности текста?",
    answer: "Все работы проверяются на плагиат в системах Антиплагиат.ВУЗ, Text.ru и других. Гарантируем уникальность от 70%. При необходимости можем довести до требуемого процента."
  },
  {
    question: "Что делать, если преподаватель требует доработки?",
    answer: "Предоставляем бесплатные доработки в течение 30 дней после сдачи работы. Учитываем все замечания преподавателя и вносим необходимые изменения."
  },
  {
    question: "Как происходит оплата?",
    answer: "Оплата производится после согласования всех деталей заказа. Принимаем все популярные способы оплаты: банковские карты, электронные кошельки, банковские переводы."
  },
  {
    question: "Можно ли связаться с автором работы?",
    answer: "Да, вы можете общаться с автором через наш чат на всех этапах выполнения работы. Это позволяет контролировать процесс и вносить корректировки."
  },
  {
    question: "Какое образование у ваших авторов?",
    answer: "Все наши авторы имеют высшее образование по профильным специальностям, многие - ученые степени. Опыт работы от 5 лет, средний рейтинг авторов - 4.8/5."
  },
  {
    question: "Сохраняется ли конфиденциальность?",
    answer: "Мы гарантируем полную анонимность. Ваши данные защищены, работы не передаются третьим лицам и не публикуются в открытом доступе."
  },
  {
    question: "Что входит в стоимость работы?",
    answer: "В стоимость входит: написание работы по вашим требованиям, проверка на плагиат, оформление по ГОСТ, список литературы, бесплатные доработки в течение месяца."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-muted-foreground">
            Ответы на самые популярные вопросы о наших услугах
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg border shadow-card px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
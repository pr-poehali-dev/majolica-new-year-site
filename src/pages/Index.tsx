import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Новогодняя тарелка',
      description: 'Расписная керамическая тарелка с зимними узорами',
      image: 'https://cdn.poehali.dev/projects/f0ba494c-6b39-4a45-9124-19eedc6bc01a/files/7d21a3dd-5ece-4004-9978-fcb14bfa40fa.jpg',
      price: '3 500 ₽'
    },
    {
      id: 2,
      title: 'Праздничный чайник',
      description: 'Чайник с рождественским орнаментом',
      image: 'https://cdn.poehali.dev/projects/f0ba494c-6b39-4a45-9124-19eedc6bc01a/files/ab5a16bb-b3da-4270-97d6-7c32e6cfcb6c.jpg',
      price: '5 200 ₽'
    },
    {
      id: 3,
      title: 'Зимняя ваза',
      description: 'Ваза с новогодними растительными мотивами',
      image: 'https://cdn.poehali.dev/projects/f0ba494c-6b39-4a45-9124-19eedc6bc01a/files/23072531-d99e-48dc-8cf6-7a5542625826.jpg',
      price: '4 800 ₽'
    },
    {
      id: 4,
      title: 'Керамическая кружка',
      description: 'Кружка с золотыми акцентами и снежинками',
      image: 'https://cdn.poehali.dev/projects/f0ba494c-6b39-4a45-9124-19eedc6bc01a/files/7d21a3dd-5ece-4004-9978-fcb14bfa40fa.jpg',
      price: '2 100 ₽'
    },
    {
      id: 5,
      title: 'Набор пиал',
      description: 'Комплект расписных пиал для чая',
      image: 'https://cdn.poehali.dev/projects/f0ba494c-6b39-4a45-9124-19eedc6bc01a/files/ab5a16bb-b3da-4270-97d6-7c32e6cfcb6c.jpg',
      price: '6 500 ₽'
    },
    {
      id: 6,
      title: 'Декоративное блюдо',
      description: 'Большое блюдо с праздничным узором',
      image: 'https://cdn.poehali.dev/projects/f0ba494c-6b39-4a45-9124-19eedc6bc01a/files/23072531-d99e-48dc-8cf6-7a5542625826.jpg',
      price: '7 200 ₽'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">❄️</div>
          <div className="absolute top-32 right-20 text-6xl">✨</div>
          <div className="absolute bottom-20 left-1/4 text-7xl">🎄</div>
          <div className="absolute top-1/2 right-10 text-5xl">⭐</div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-6">
            <Icon name="Sparkles" size={20} className="text-secondary" />
            <span className="text-sm font-medium text-secondary-foreground">Новогодняя коллекция 2025</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold font-heading mb-6 text-primary">
            Майолика
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-heading">
            Керамика ручной работы
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Уникальные изделия с праздничными узорами, созданные с любовью и вниманием к деталям
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="group">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Посмотреть галерею
              <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
              Галерея работ
            </h2>
            <p className="text-lg text-muted-foreground">
              Каждое изделие уникально и создано вручную
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <Icon name="Eye" size={24} className="text-white" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">
                      {item.price}
                    </span>
                    <Button size="sm" variant="secondary">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                Ручная роспись
              </h3>
              <p className="text-muted-foreground">
                Каждый узор наносится вручную опытными мастерами
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="text-5xl mb-4">♻️</div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                Экологично
              </h3>
              <p className="text-muted-foreground">
                Используем только натуральные материалы и глину
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                Подарочная упаковка
              </h3>
              <p className="text-muted-foreground">
                Красивая праздничная упаковка в подарок
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Майолика</h3>
              <p className="opacity-90">
                Керамика ручной работы с 2015 года
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 opacity-90">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@majolika.ru</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-75">
            <p>© 2025 Майолика. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

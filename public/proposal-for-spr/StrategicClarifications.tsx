import { FadeIn } from '../FadeIn';
import { useLanguage } from '../LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          <FadeIn className="w-full md:w-5/12">
            <div className="aspect-[3/4] bg-zinc-100 grayscale relative">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1200" 
                alt="David Rodrigues Portrait" 
                className="object-cover w-full h-full grayscale opacity-90"
              />
              <div className="absolute inset-0 bg-swiss-red mix-blend-multiply opacity-0 hover:opacity-10 transition-opacity duration-500" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full md:w-7/12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-8 leading-tight">
              {t('International Genève Perspective', 'Perspective Genève Internationale')}
            </h2>
            <div className="w-12 h-1 bg-swiss-red mb-12"></div>
            
            <div className="space-y-8 text-xl text-gray-600 font-light leading-relaxed">
              <p>
                {t(
                  'David Rodrigues is a Geneva-based digital transformation and business operations professional with international experience across the UN environment, business platforms, and digital growth initiatives.',
                  'David Rodrigues est un professionnel de la transformation numérique et des opérations commerciales basé à Genève, avec une expérience internationale dans l’environnement onusien, les plateformes commerciales et les initiatives de croissance numérique.'
                )}
              </p>
              <p>
                {t(
                  'Having worked within the International Genève ecosystem, his focus is centred on helping businesses strengthen long-term visibility, improve how they are perceived online, and build stronger relationships with international audiences.',
                  'Ayant travaillé au sein de l’écosystème de la Genève Internationale, son objectif est d’aider les entreprises à renforcer leur visibilité à long terme, à améliorer la façon dont elles sont perçues en ligne et à nouer des relations plus solides avec les publics internationaux.'
                )}
              </p>
              <p>
                {t(
                  'His approach combines practical business thinking, modern digital strategy, and a strong understanding of how international clients increasingly discover and evaluate companies today.',
                  'Son approche combine une réflexion commerciale pratique, une stratégie numérique moderne et une forte compréhension de la façon dont les clients internationaux découvrent et évaluent de plus en plus les entreprises aujourd’hui.'
                )}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

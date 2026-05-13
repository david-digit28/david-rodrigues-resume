import { FadeIn } from '../FadeIn';
import { Logo } from '../Logo';
import { useLanguage } from '../LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const valueBlocks = [
    {
      num: '01',
      title: t('Stronger International Visibility', 'Visibilité Internationale Renforcée'),
      desc: t(
        'Position Swiss Platinum Relocation more effectively across modern search and discovery environments.',
        'Positionner Swiss Platinum Relocation plus efficacement dans les environnements modernes de recherche et de découverte.'
      )
    },
    {
      num: '02',
      title: t('Greater Client Trust Before First Contact', 'Plus de Confiance Avant le Premier Contact'),
      desc: t(
        'Strengthen how prospective international clients perceive credibility and professionalism online.',
        'Renforcer la façon dont les clients internationaux potentiels perçoivent la crédibilité et le professionnalisme en ligne.'
      )
    },
    {
      num: '03',
      title: t('Better Long-Term Positioning', 'Meilleur Positionnement à Long Terme'),
      desc: t(
        'Differentiate more clearly within Geneva’s premium relocation ecosystem.',
        'Se différencier plus clairement au sein de l’écosystème premium de la relocation.'
      )
    },
    {
      num: '04',
      title: t('Relationship-Driven Growth', 'Croissance axée sur les relations'),
      desc: t(
        'Build stronger long-term engagement beyond one-time relocation transactions.',
        'Construire un engagement à long terme plus solide au-delà des transactions de relocation ponctuelles.'
      )
    }
  ];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-start pt-32 pb-48 overflow-hidden bg-zinc-50">
      {/* Background Image Container - Anchored to the right side */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
          alt="Modern Architecture Atmosphere"
          className="w-full h-full object-cover object-[center_30%] grayscale opacity-100"
        />
        {/* Soft wash on mobile/tablet to ensure text contrast */}
        <div className="absolute inset-0 bg-zinc-50/90 lg:hidden" />
        {/* Desktop gradient fading left-to-right to smoothly blend into the solid background, with an added bottom-up gradient for text legibility */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-zinc-50 via-zinc-50/80 to-zinc-50/50" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-t from-zinc-50 via-transparent to-transparent" />
        {/* Subtle bottom gradient to blend into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Eyebrow & Hero Headings */}
        <FadeIn delay={0.1} className="mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-swiss-red/80 font-medium mb-12">
            {t('Private Strategic Perspective', 'Perspective Stratégique Privée')}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.05] font-light text-charcoal mb-14 max-w-5xl tracking-tight">
            Swiss Platinum Relocation
          </h1>
          <p className="text-2xl md:text-3xl lg:text-[2.25rem] font-light text-charcoal leading-[1.4] max-w-5xl">
            {t('A perspective on how Swiss Platinum Relocation could strengthen long-term visibility, client trust, and premium positioning within the evolving International Genève ecosystem.', 'Une perspective sur la façon dont Swiss Platinum Relocation pourrait renforcer sa visibilité à long terme, la confiance de ses clients et son positionnement premium au sein de l’écosystème en évolution de la Genève Internationale.')}
          </p>
        </FadeIn>

        {/* Short Intro Paragraphs */}
        <FadeIn delay={0.2} direction="up" className="max-w-3xl mb-32 space-y-8">
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            {t('Geneva continues to attract diplomats, NGO professionals, multinational executives, and internationally mobile families from around the world.', 'Genève continue d’attirer des diplomates, des professionnels des ONG, des cadres de multinationales et des familles internationalement mobiles du monde entier.')}
          </p>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            {t('At the same time, the way people discover and evaluate relocation companies is changing quietly but significantly.', 'Dans le même temps, la manière dont les gens découvrent et évaluent les sociétés de relocation change discrètement mais de manière significative.')}
          </p>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            {t('This private perspective explores how Swiss Platinum Relocation could strengthen its digital presence, improve long-term visibility, and build stronger positioning with high-value international audiences over the coming years.', 'Cette perspective privée explore comment Swiss Platinum Relocation pourrait renforcer sa présence numérique, améliorer sa visibilité à long terme et construire un positionnement plus fort auprès d’un public international de grande valeur au cours des années à venir.')}
          </p>
        </FadeIn>

        {/* Outcome / Value Blocks */}
        <FadeIn delay={0.3} direction="up" className="mb-32 relative">
          {/* Smart Frosted Glass Backdrop for text readability */}
          <div className="absolute -inset-8 bg-zinc-50/70 backdrop-blur-[10px] rounded-3xl -z-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 lg:gap-y-20 max-w-5xl">
            {valueBlocks.map((block, idx) => (
              <div key={idx} className="flex flex-col border-t border-gray-200 pt-8">
                <span className="text-swiss-red font-medium text-lg tracking-widest mb-4 block">
                  {block.num}
                </span>
                <h3 className="text-2xl lg:text-3xl font-light text-charcoal mb-4">
                  {block.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Prepared By Block */}
        <FadeIn delay={0.4} direction="up">
          <div className="pt-16 border-t border-gray-200 inline-block w-full max-w-xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-10">
              {t('Prepared By - DR. - David Rodrigues - Geneva, Switzerland', 'Préparé par - DR. - David Rodrigues - Genève, Suisse')}
            </p>
            <Logo />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

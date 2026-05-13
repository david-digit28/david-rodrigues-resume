import { FadeIn } from '../FadeIn';
import { useLanguage } from '../LanguageContext';

export function Roadmap() {
  const { t } = useLanguage();

  const phases = [
    {
      phase: t('Phase 1', 'Phase 1'),
      title: t('Visibility & Trust Foundations', 'Fondations de Visibilité et de Confiance'),
      items: [
        t('strengthen online presentation', 'renforcer la présentation en ligne'),
        t('improve visibility across Google and modern search platforms', 'améliorer la visibilité sur Google et les plateformes de recherche modernes'),
        t('build stronger client trust before first contact', 'renforcer la confiance des clients avant le premier contact'),
        t('improve reviews and credibility signals', 'améliorer les avis et les signaux de crédibilité'),
        t('refine International Genève positioning', 'affiner le positionnement Genève Internationale'),
      ],
    },
    {
      phase: t('Phase 2', 'Phase 2'),
      title: t('International Positioning & Client Engagement', 'Positionnement International et Engagement Client'),
      items: [
        t('strengthen positioning with international audiences', 'renforcer le positionnement auprès des publics internationaux'),
        t('improve visibility with UN, NGO, and executive communities', 'améliorer la visibilité auprès des communautés de l’ONU, des ONG et des cadres'),
        t('develop clearer multilingual content', 'développer un contenu multilingue plus clair'),
        t('create more informative and useful online resources', 'créer des ressources en ligne plus informatives et utiles'),
        t('strengthen long-term online presence', 'renforcer la présence en ligne à long terme'),
      ],
    },
    {
      phase: t('Phase 3', 'Phase 3'),
      title: t('Long-Term Growth & Relationships', 'Croissance à Long Terme et Relations'),
      items: [
        t('improve how prospective clients engage online', 'améliorer la façon dont les clients potentiels s’engagent en ligne'),
        t('strengthen referral opportunities', 'renforcer les opportunités de recommandation'),
        t('support long-term client relationships', 'soutenir les relations clients à long terme'),
        t('improve post-relocation engagement', 'améliorer l’engagement post-relocation'),
        t('continue building visibility within the International Genève community', 'continuer à développer la visibilité au sein de la communauté de la Genève Internationale'),
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 md:py-32 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-light text-charcoal mb-24 leading-tight max-w-4xl">
            {t('A Practical Approach to Strengthening Long-Term Digital Presence', 'Une Approche Pratique pour Renforcer la Présence Numérique à Long Terme')}
          </h2>
        </FadeIn>

        {/* Timeline Desktop/Mobile approach */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-[27px] md:left-0 top-[28px] md:top-[28px] bottom-0 md:bottom-auto md:w-full md:h-px bg-swiss-red md:bg-gray-200" />
          <div className="hidden md:block absolute left-0 top-[28px] w-2/3 h-px bg-swiss-red" />
          
          <div className="flex flex-col md:flex-row gap-16 md:gap-8 relative z-10">
            {phases.map((phase, idx) => (
              <div key={idx} className="flex-1">
                <FadeIn delay={idx * 0.2}>
                  <div className="flex flex-row md:flex-col items-start gap-8 md:gap-0">
                    {/* Node */}
                    <div className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 md:mb-12 shadow-sm relative">
                      <div className="w-3 h-3 rounded-full bg-muted-gold" />
                    </div>
                    
                    {/* Content */}
                    <div className="pt-2 md:pt-0">
                      <span className="text-sm tracking-widest text-swiss-red uppercase mb-4 block font-medium">
                        {phase.phase}
                      </span>
                      <h3 className="text-2xl font-light text-charcoal mb-8 h-auto md:h-16">
                        {phase.title}
                      </h3>
                      <ul className="space-y-4">
                        {phase.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-gray-600 font-light flex items-start gap-4">
                            <div className="w-1 h-1 rounded-full bg-gray-300 mt-2.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>

        <FadeIn>
          <div className="mt-32 max-w-3xl border-l-4 border-muted-gold pl-8 py-2">
            <span className="text-sm tracking-widest uppercase text-gray-400 mb-4 block">{t('Strategic Insight', 'Aperçu Stratégique')}</span>
            <p className="text-xl md:text-2xl text-charcoal font-light leading-relaxed">
              {t(
                <>This evolution is not only about technology or marketing. <br className="hidden md:block" />It is about building stronger trust, clearer visibility, and better long-term relationships with international clients before the first conversation even begins.</>,
                <>Cette évolution ne concerne pas seulement la technologie ou le marketing. <br className="hidden md:block" />Il s’agit de bâtir une confiance plus forte, une visibilité plus claire et de meilleures relations à long terme avec les clients internationaux avant même le premier contact.</>
              )}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

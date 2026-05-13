import { FadeIn } from '../FadeIn';
import { useLanguage } from '../LanguageContext';

export function Opportunity() {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t('International Genève Client Positioning', 'Positionnement Client Genève Internationale'),
      items: [
        t('UN professionals', 'Professionnels de l’ONU'),
        t('NGO leadership', 'Dirigeants d’ONG'),
        t('diplomats', 'Diplomates'),
        t('biotech executives', 'Cadres de la biotechnologie'),
        t('international families', 'Familles internationales'),
        t('private client relocation', 'Relocation de clients privés'),
      ],
    },
    {
      title: t('Stronger Digital Visibility', 'Visibilité Numérique Plus Forte'),
      items: [
        t('Google visibility', 'Visibilité sur Google'),
        t('modern search and discovery platforms', 'Plateformes modernes de recherche et de découverte'),
        t('multilingual online presence', 'Présence en ligne multilingue'),
        t('stronger international reach', 'Portée internationale plus forte'),
        t('improved first impressions before direct contact', 'Premières impressions améliorées avant contact direct'),
      ],
    },
    {
      title: t('Long-Term Client Relationships', 'Relations Clients à Long Terme'),
      items: [
        t('trusted partnerships', 'Partenariats de confiance'),
        t('referral opportunities', 'Opportunités de recommandation'),
        t('relocation support beyond the initial move', 'Soutien à la relocation au-delà du déménagement initial'),
        t('stronger long-term engagement', 'Engagement à long terme plus fort'),
        t('greater visibility within the International Genève community', 'Plus grande visibilité au sein de la communauté de la Genève Internationale'),
      ],
    },
  ];

  return (
    <section id="opportunity" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-light text-charcoal max-w-4xl mb-16 leading-tight">
            {t('A Strong Premium Identity Within an International Market', 'Une Forte Identité Premium au Sein d’un Marché International')}
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="max-w-3xl space-y-6 text-xl text-gray-600 font-light leading-relaxed mb-24">
            <p className="text-charcoal mb-8">
              {t('Swiss Platinum Relocation already possesses several important strengths:', 'Swiss Platinum Relocation possède déjà plusieurs atouts importants :')}
            </p>
            <ul className="space-y-4 pl-4 border-l border-gray-200">
              <li className="pl-4">{t('a premium international-facing brand identity', 'une identité de marque premium tournée vers l’international')}</li>
              <li className="pl-4">{t('strong Geneva positioning', 'un fort ancrage genevois')}</li>
              <li className="pl-4">{t('alignment with one of the world’s most international relocation markets', 'un alignement avec l’un des marchés de relocation les plus internationaux au monde')}</li>
              <li className="pl-4">{t('the flexibility to adapt within a changing digital landscape', 'la flexibilité nécessaire pour s’adapter à un paysage numérique en mutation')}</li>
            </ul>
            
            <div className="pt-12 mt-12 border-t border-gray-100">
              <p className="text-3xl md:text-4xl text-charcoal font-light">
                {t('The opportunity now is not reinvention.', 'L’opportunité n’est plus à la réinvention.')}
              </p>
              <p className="text-xl md:text-2xl mt-6 text-gray-600 font-light max-w-2xl">
                {t('It is building on these strengths in a way that strengthens long-term visibility, credibility, and client engagement.', 'Il s’agit de s’appuyer sur ces forces de manière à renforcer la visibilité, la crédibilité et l’engagement client à long terme.')}
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-32">
          {pillars.map((pillar, idx) => (
            <div key={idx}>
              <FadeIn delay={idx * 0.1}>
                <div className="h-full border-t-2 border-charcoal pt-10">
                  <span className="text-xs tracking-widest text-gray-400 uppercase mb-4 block">
                    {t('Focus Area', 'AXE STRATÉGIQUE')} {idx + 1}
                  </span>
                  <h3 className="text-2xl font-light text-charcoal mb-10 h-16">{pillar.title}</h3>
                  <ul className="space-y-4">
                    {pillar.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-lg text-gray-500 font-light flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>

        <FadeIn>
          <div className="bg-zinc-50 p-10 md:p-16 border-l-4 border-muted-gold max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl text-charcoal font-light leading-relaxed">
              {t(
                'The firms that build stronger visibility and client confidence early are likely to stand out more clearly with international audiences over the coming years.',
                'Les entreprises qui construisent une visibilité et une confiance client plus fortes dès le début sont susceptibles de se démarquer plus clairement auprès des publics internationaux au cours des prochaines années.'
              )}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

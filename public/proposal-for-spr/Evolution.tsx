import { FadeIn } from '../FadeIn';
import { useLanguage } from '../LanguageContext';

export function MarketContext() {
  const { t } = useLanguage();

  const stats = [
    { value: '41.7%', label: t('of Geneva’s population is foreign national residents', 'de la population de Genève est constituée de résidents de nationalité étrangère'), source: t('Canton of Geneva', 'Canton de Genève') },
    { value: '40+', label: t('international organisations operate in Geneva', 'organisations internationales opèrent à Genève'), source: t('UN Geneva', 'ONU Genève') },
    { value: '180+', label: t('permanent diplomatic missions', 'missions diplomatiques permanentes'), source: t('UN Geneva', 'ONU Genève') },
    { value: '36,000+', label: t('professionals employed across IOs, NGOs & permanent missions', 'professionnels employés dans les OI, ONG et missions permanentes'), source: t('Geneva International', 'Genève Internationale') },
    { value: '0.34%', label: t('Geneva housing vacancy rate', 'Taux de vacance des logements à Genève'), source: t('Geneva housing statistics', 'Statistiques du logement à Genève') },
  ];

  return (
    <section id="context" className="py-24 md:py-32 bg-zinc-900 text-white selection:bg-white selection:text-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl mb-24">
            {t(
              'International Genève is one of the world’s most international relocation markets.',
              'La Genève Internationale est l’un des marchés de relocation les plus internationaux au monde.'
            )}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 mb-32 border-t border-zinc-800 pt-16">
          {stats.map((stat, i) => (
            <div key={i}>
              <FadeIn delay={i * 0.1}>
                <div className="flex flex-col h-full">
                  <span className="text-5xl md:text-6xl font-light text-swiss-red mb-6 tracking-tight">{stat.value}</span>
                  <span className="text-xl md:text-2xl font-light text-zinc-300 leading-snug mb-8">{stat.label}</span>
                  <span className="text-sm font-light text-zinc-600 mt-auto uppercase tracking-wide">{t('Source:', 'Source :')} {stat.source}</span>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-12 text-xl md:text-2xl font-light text-zinc-300 leading-relaxed">
          <FadeIn>
            <p>
              {t(
                'International Genève continues to attract diplomats, NGO professionals, biotech executives, multinational leadership teams, and internationally mobile families from around the world.',
                'La Genève Internationale continue d’attirer des diplomates, des professionnels d’ONG, des dirigeants du secteur biotech, des équipes de direction de multinationales et des familles internationalement mobiles du monde entier.'
              )}
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              {t(
                'As competition for housing, relocation support, and international services continues to grow, the way prospective clients discover and evaluate relocation companies is also evolving.',
                'Alors que la concurrence pour le logement, le soutien à la relocation et les services internationaux continue de croître, la façon dont les clients potentiels découvrent et évaluent les entreprises de relocation évolue également.'
              )}
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              {t(
                'Today, many international clients form their first impressions long before direct contact takes place. They research online, compare providers, read reviews, and increasingly rely on modern search and AI-assisted platforms to understand who appears credible, established, and trustworthy.',
                'Aujourd’hui, de nombreux clients internationaux se font leur première impression bien avant que le contact direct n’ait lieu. Ils effectuent des recherches en ligne, comparent les prestataires, lisent les avis et s’appuient de plus en plus sur les recherches modernes et les plateformes assistées par l’IA pour comprendre qui semble crédible, établi et digne de confiance.'
              )}
            </p>
          </FadeIn>
          <FadeIn>
            <div className="pl-8 border-l-2 border-muted-gold text-white my-16 py-4">
              <p className="mb-8">
                {t(
                  'In this environment, visibility, presentation, and digital credibility are becoming increasingly important differentiators for premium relocation firms.',
                  'Dans cet environnement, la visibilité, la présentation et la crédibilité numérique deviennent des différenciateurs de plus en plus importants pour les entreprises de relocation premium.'
                )}
              </p>
              <p>
                {t(
                  'The companies that build stronger visibility and trust early are likely to stand out more clearly with international clients before the first conversation even begins.',
                  'Les entreprises qui construisent une visibilité et une confiance plus fortes dès le début sont susceptibles de se démarquer plus clairement auprès des clients internationaux avant même que la première conversation ne commence.'
                )}
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <p className="text-2xl md:text-3xl text-white">
              {t(
                'Swiss Platinum Relocation is well-positioned to strengthen its presence within this evolving landscape.',
                'Swiss Platinum Relocation est bien positionnée pour renforcer sa présence dans ce paysage en évolution.'
              )}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

import { FadeIn } from '../FadeIn';
import { useLanguage } from '../LanguageContext';

const areas = [
  {
    title: { en: 'International Genève Visibility', fr: 'Visibilité Genève Internationale' },
    description: {
      en: 'Helping Swiss Platinum Relocation strengthen its visibility across modern search platforms and improve how international clients discover the company online.',
      fr: 'Aider Swiss Platinum Relocation à renforcer sa visibilité sur les plateformes de recherche modernes et à améliorer la façon dont les clients internationaux découvrent l’entreprise en ligne.'
    },
  },
  {
    title: { en: 'Stronger Online Trust & Credibility', fr: 'Confiance et Crédibilité en Ligne Accrues' },
    description: {
      en: 'Improving how prospective clients perceive professionalism, reliability, and quality before the first conversation takes place.',
      fr: 'Améliorer la façon dont les clients potentiels perçoivent le professionnalisme, la fiabilité et la qualité avant même que la première conversation n’ait lieu.'
    },
  },
  {
    title: { en: 'Content & International Positioning', fr: 'Contenu et Positionnement International' },
    description: {
      en: 'Creating clear and informative content that helps international audiences better understand Swiss Platinum Relocation’s expertise, services, and positioning within the Geneva relocation market.',
      fr: 'Créer un contenu clair et informatif qui aide les publics internationaux à mieux comprendre l’expertise, les services et le positionnement de Swiss Platinum Relocation sur le marché de la relocation à Genève.'
    },
  },
  {
    title: { en: 'Client Journey & Digital Experience', fr: 'Parcours Client et Expérience Numérique' },
    description: {
      en: 'Improving how prospective clients discover, evaluate, and engage with Swiss Platinum Relocation online.',
      fr: 'Améliorer la façon dont les clients potentiels découvrent, évaluent et interagissent avec Swiss Platinum Relocation en ligne.'
    },
  },
  {
    title: { en: 'Long-Term Client Relationships', fr: 'Relations Clients à Long Terme' },
    description: {
      en: 'Exploring ways to strengthen referrals, post-relocation engagement, and long-term visibility within the International Genève community.',
      fr: 'Explorer des moyens de renforcer les recommandations, l’engagement après la relocation et la visibilité à long terme au sein de la communauté de la Genève Internationale.'
    },
  },
];

export function Collaboration() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-zinc-900 text-white selection:bg-white selection:text-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="max-w-3xl mb-24">
            <h2 className="text-3xl md:text-5xl font-light mb-10 leading-tight">
              {t(
                <>Potential Areas of <br />Collaboration</>,
                <>Domaines potentiels de <br />collaboration</>
              )}
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
              {t(
                'The following areas represent possible ways to strengthen Swiss Platinum Relocation’s long-term visibility, client engagement, and digital presence while preserving its premium and relationship-led approach.',
                'Les domaines suivants représentent des moyens possibles de renforcer la visibilité à long terme, l’engagement client et la présence numérique de Swiss Platinum Relocation tout en préservant son approche premium et axée sur les relations.'
              )}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
          {areas.map((area, idx) => (
            <div 
              key={idx} 
              className={`bg-zinc-900 ${idx === areas.length - 1 && areas.length % 2 !== 0 ? 'md:col-span-2 md:max-w-[50%] md:border-r border-zinc-800' : ''}`}
            >
              <FadeIn delay={idx * 0.1} className="h-full p-10 md:p-16">
                <div className="flex flex-col h-full">
                  <span className="text-swiss-red text-sm tracking-widest uppercase mb-8 block">
                    {t(`Area 0${idx + 1}`, `Domaine 0${idx + 1}`)}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-6 pr-4">
                    {t(area.title.en, area.title.fr)}
                  </h3>
                  <p className="text-lg text-zinc-400 font-light leading-relaxed mt-auto">
                    {t(area.description.en, area.description.fr)}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}
          {/* Fill the empty grid cell if odd number of items */}
          {areas.length % 2 !== 0 && (
            <div className="bg-zinc-900 hidden md:block"></div>
          )}
        </div>
      </div>
    </section>
  );
}

import { FadeIn } from '../FadeIn';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export function Evolution() {
  const { t } = useLanguage();

  const traditionalSteps = [
    t('Google Search', 'Recherche Google'),
    t('Website Visit', 'Visite du Site Web'),
    t('Generic Contact Form', 'Formulaire de Contact Générique'),
    t('Manual Follow-Up', 'Suivi Manuel'),
    t('Transaction Ends', 'Fin de la Transaction'),
  ];

  const aiVisibleSteps = [
    t('Online Discovery', 'Découverte en Ligne'),
    t('Clear & Professional Online Presence', 'Présence en Ligne Claire et Professionnelle'),
    t('Trust & Credibility', 'Confiance et Crédibilité'),
    t('More Structured Client Journey', 'Parcours Client Plus Structuré'),
    t('Personalised Client Experience', 'Expérience Client Personnalisée'),
    t('Long-Term Relationships & Referrals', 'Relations à Long Terme et Recommandations'),
  ];

  return (
    <section id="evolution" className="py-24 md:py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-light text-charcoal max-w-4xl mb-24 leading-tight">
            {t('How Clients Discover Relocation Companies Today', 'Comment les Clients Découvrent les Entreprises de Relocation Aujourd’hui')}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Traditional Column */}
          <FadeIn delay={0.1}>
            <div className="bg-white border border-gray-100 p-10 md:p-14 h-full">
              <h3 className="text-sm tracking-widest uppercase text-gray-400 mb-12">{t('Traditional Relocation Journey', 'Parcours de Relocation Traditionnel')}</h3>
              <div className="flex flex-col gap-6">
                {traditionalSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-full bg-zinc-50 border border-gray-100 p-6 text-center text-lg text-gray-500 font-light">
                      {step}
                    </div>
                    {idx !== traditionalSteps.length - 1 && (
                      <ArrowDown className="text-gray-300 my-4" size={24} strokeWidth={1} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* AI Visible Column */}
          <FadeIn delay={0.2}>
            <div className="bg-charcoal text-white p-10 md:p-14 h-full">
              <h3 className="text-sm tracking-widest uppercase text-swiss-red mb-12">{t('Modern Client Expectations', 'Attentes des Clients Modernes')}</h3>
              <div className="flex flex-col gap-6">
                {aiVisibleSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className={`w-full p-6 text-center text-lg font-light border ${idx === aiVisibleSteps.length - 1 ? 'bg-swiss-red border-swiss-red text-white' : 'bg-transparent border-zinc-700 text-zinc-100'}`}>
                      {step}
                    </div>
                    {idx !== aiVisibleSteps.length - 1 && (
                      <ArrowDown className="text-zinc-600 my-4" size={24} strokeWidth={1} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <FadeIn>
            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed text-center">
              {t(
                'The way international clients discover and evaluate relocation companies is evolving.',
                'La façon dont les clients internationaux découvrent et évaluent les entreprises de relocation évolue.'
              )}
            </p>
          </FadeIn>
          
          <FadeIn>
            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed text-center">
              {t(
                'Today, many prospective clients research extensively before making direct contact. They compare providers, read reviews, evaluate credibility, and increasingly form opinions online before the first conversation even takes place.',
                'Aujourd’hui, de nombreux clients potentiels effectuent des recherches approfondies avant d’établir un contact direct. Ils comparent les prestataires, lisent les avis, évaluent la crédibilité et forment de plus en plus leurs opinions en ligne avant même la première conversation.'
              )}
            </p>
          </FadeIn>

          <FadeIn>
            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed text-center">
              {t(
                'For premium relocation firms, a website is no longer only a digital brochure. It is often the first impression of the company itself.',
                'Pour les entreprises de relocation premium, un site web n’est plus seulement une brochure numérique. C’est souvent la première impression de l’entreprise elle-même.'
              )}
            </p>
          </FadeIn>

          <FadeIn>
            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed text-center">
              {t(
                'This shift is particularly relevant within International Genève, where highly international and well-informed audiences often place significant importance on trust, professionalism, and presentation during the decision-making process.',
                'Ce changement est particulièrement pertinent au sein de la Genève Internationale, où des publics très internationaux et bien informés accordent souvent une importance significative à la confiance, au professionnalisme et à la présentation lors du processus de prise de décision.'
              )}
            </p>
          </FadeIn>

          <FadeIn>
            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed text-center">
              {t(
                'The firms that build stronger visibility, credibility, and client confidence early are likely to stand out more clearly in an increasingly competitive market.',
                'Les entreprises qui construisent une visibilité, une crédibilité et une confiance client plus fortes dès le début sont susceptibles de se démarquer plus clairement sur un marché de plus en plus compétitif.'
              )}
            </p>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-24 border-t border-gray-200 pt-16">
              <span className="text-7xl font-light text-swiss-red">25%</span>
              <div className="max-w-md">
                <p className="text-xl md:text-2xl text-charcoal font-light mb-4">
                  {t(
                    'of search behaviour may shift toward AI-driven and conversational search by 2026.',
                    'du comportement de recherche pourrait se déplacer vers la recherche conversationnelle et pilotée par l’IA d’ici 2026.'
                  )}
                </p>
                <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                  {t('Source:', 'Source :')} GEO / AI-search industry projections
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

import { FadeIn } from '../FadeIn';
import { useLanguage } from '../LanguageContext';

export function Perspective() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-charcoal text-white selection:bg-swiss-red selection:text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="max-w-5xl mx-auto text-center mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
              {t(
                'The Future of Premium Relocation Visibility May Belong to the Firms That Build Trust Earliest',
                'L’avenir de la visibilité de la relocation premium pourrait bien appartenir aux entreprises qui instaurent la confiance très tôt'
              )}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto mb-24 pl-8 md:pl-12 border-l-4 border-swiss-red py-6">
            <p className="text-2xl md:text-4xl lg:text-5xl font-light italic text-zinc-300 leading-snug">
              {t(
                <>
                  “What happens when a future UN professional or biotech executive asks an AI assistant:
                  <br/><br/>
                  <span className="text-white">‘Who is the best relocation company in Geneva for international professionals?’</span>”
                </>,
                <>
                  « Que se passe-t-il lorsqu’un futur professionnel de l’ONU ou dirigeant du secteur biotech demande à un assistant IA :
                  <br/><br/>
                  <span className="text-white">"Quelle est la meilleure société de relocation à Genève pour les professionnels internationaux ?"</span> »
                </>
              )}
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-12 text-xl md:text-2xl font-light text-zinc-400 leading-relaxed text-center mb-24">
          <FadeIn>
            <p>
              {t(
                'The way international clients research and choose service providers is changing.',
                'La façon dont les clients internationaux recherchent et choisissent les prestataires de services évolue.'
              )}
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              {t(
                'Today, many prospective clients form opinions long before making direct contact. They compare companies online, read reviews, evaluate credibility, and increasingly rely on modern search and conversational AI platforms during the research process.',
                'Aujourd’hui, de nombreux clients potentiels se forgent une opinion bien avant d’établir un contact direct. Ils comparent les entreprises en ligne, lisent les avis, évaluent la crédibilité et s’appuient de plus en plus sur les plateformes modernes de recherche et d’IA conversationnelles au cours du processus de recherche.'
              )}
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              {t(
                'For premium relocation firms within International Genève, online visibility and client trust are becoming increasingly important before the first conversation even begins.',
                'Pour les entreprises de relocation premium au sein de la Genève Internationale, la visibilité en ligne et la confiance des clients deviennent de plus en plus importantes bien avant que la première conversation ne commence.'
              )}
            </p>
          </FadeIn>
          <FadeIn>
            <p className="text-white">
              {t(
                'The companies that build stronger credibility, clearer positioning, and better online visibility early are likely to stand out more naturally with international audiences over the coming years.',
                'Les entreprises qui construisent plus tôt une crédibilité plus forte, un positionnement plus clair et une meilleure visibilité en ligne se démarqueront probablement plus naturellement auprès des publics internationaux au cours des années à venir.'
              )}
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-24 border-t border-zinc-800 pt-16 max-w-4xl mx-auto">
            <span className="text-7xl font-light text-muted-gold">70%+</span>
            <div className="max-w-md text-left">
              <p className="text-xl md:text-2xl text-white font-light mb-4">
                {t(
                  'of B2B buyers now complete significant independent research before initiating direct contact.',
                  'des acheteurs B2B effectuent désormais des recherches indépendantes significatives avant d’initier un contact direct.'
                )}
              </p>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
                {t('Source:', 'Source :')} Gartner
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

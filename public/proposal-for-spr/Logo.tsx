import { FadeIn } from '../FadeIn';
import { useLanguage } from '../LanguageContext';

export function Introduction() {
  const { t } = useLanguage();

  return (
    <section id="introduction" className="py-24 md:py-32 bg-white selection:bg-swiss-red selection:text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-light text-charcoal mb-16 leading-tight">
            {t(
              <>Why This Strategic Perspective<br />Was Prepared</>,
              <>Pourquoi cette perspective stratégique<br />a été préparée</>
            )}
          </h2>
        </FadeIn>

        <div className="space-y-12 text-xl text-gray-700 font-light leading-relaxed">
          <FadeIn>
            <p>
              {t(
                'International Genève is one of the world’s most internationally connected business environments. Every year, diplomats, NGO professionals, multinational executives, biotech leaders, and internationally mobile families relocate to Geneva seeking trusted support during an important life transition.',
                'La Genève Internationale est l’un des environnements commerciaux les plus connectés au monde. Chaque année, des diplomates, des professionnels d’ONG, des cadres de multinationales, des leaders de la biotechnologie et des familles internationalement mobiles s’installent à Genève à la recherche d’un soutien de confiance lors d’une transition de vie importante.'
              )}
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              {t(
                'At the same time, the way people discover and evaluate relocation companies is changing.',
                'En même temps, la façon dont les gens découvrent et évaluent les entreprises de relocation est en train de changer.'
              )}
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              {t(
                'More prospective clients are now researching online before making direct contact - not only through Google, but increasingly through AI-assisted platforms such as ChatGPT, Perplexity, Gemini, and other AI-enhanced search experiences.',
                'De plus en plus de clients potentiels effectuent désormais des recherches en ligne avant d’établir un contact direct - non seulement via Google, mais de plus en plus via des plateformes assistées par l’IA telles que ChatGPT, Perplexity, Gemini et d’autres expériences de recherche améliorées par l’IA.'
              )}
            </p>
          </FadeIn>

          <FadeIn>
            <p className="text-2xl text-charcoal pr-8 py-8 border-l-2 border-muted-gold pl-8 my-16 bg-zinc-50">
              {t(
                'This is quietly reshaping how premium service businesses are discovered and perceived.',
                'Cela redéfinit discrètement la façon dont les entreprises de services haut de gamme sont découvertes et perçues.'
              )}
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              {t(
                'For relocation firms operating within International Genève, credibility, visibility, and digital presentation are becoming more important long before the first conversation even takes place.',
                'Pour les entreprises de relocation opérant au sein de la Genève Internationale, la crédibilité, la visibilité et la présentation numérique deviennent plus importantes bien avant que la première conversation n’ait lieu.'
              )}
            </p>
          </FadeIn>

          <FadeIn>
            <p className="mb-6">
              {t(
                'Swiss Platinum Relocation is already positioned within a highly valuable international market:',
                'Swiss Platinum Relocation est déjà positionnée sur un marché international de grande valeur :'
              )}
            </p>
            <ul className="space-y-4 pl-4 border-l border-gray-200">
              <li className="pl-4">{t('Geneva’s global institutional environment', 'L’environnement institutionnel mondial de Genève')}</li>
              <li className="pl-4">{t('a highly international population', 'Une population très internationale')}</li>
              <li className="pl-4">{t('one of Europe’s most competitive housing markets', 'L’un des marchés du logement les plus compétitifs d’Europe')}</li>
              <li className="pl-4">{t('growing international mobility demand', 'Une demande croissante de mobilité internationale')}</li>
              <li className="pl-4">{t('increasing expectations around premium relocation support', 'Des attentes croissantes concernant le soutien à la relocation haut de gamme')}</li>
            </ul>
          </FadeIn>

          <FadeIn>
            <p className="mt-12 mb-6">
              {t(
                'This perspective was prepared to explore how Swiss Platinum Relocation could continue strengthening:',
                'Cette perspective a été préparée pour explorer comment Swiss Platinum Relocation pourrait continuer à renforcer :'
              )}
            </p>
            <ul className="space-y-4 pl-4 border-l border-gray-200">
              <li className="pl-4">{t('long-term visibility', 'La visibilité à long terme')}</li>
              <li className="pl-4">{t('premium international positioning', 'Le positionnement international premium')}</li>
              <li className="pl-4">{t('online credibility', 'La crédibilité en ligne')}</li>
              <li className="pl-4">{t('client engagement', 'L’engagement client')}</li>
              <li className="pl-4">{t('relationship-driven growth', 'Croissance axée sur les relations')}</li>
              <li className="pl-4">{t('long-term differentiation within the Geneva relocation market', 'La différenciation à long terme sur le marché de la relocation à Genève')}</li>
            </ul>
          </FadeIn>

          <FadeIn>
            <div className="bg-zinc-50 p-10 md:p-14 mt-20 border border-gray-100">
              <p className="text-xl md:text-2xl text-charcoal font-normal mb-6">
                {t(
                  'The intention of this perspective is not to present a traditional audit, technical SEO report, or marketing proposal.',
                  'L’intention de cette perspective n’est pas de présenter un audit traditionnel, un rapport SEO technique ou une proposition marketing.'
                )}
              </p>
              <p className="text-lg text-gray-600">
                {t(
                  'Instead, it is a forward-looking reflection on how relocation firms within International Genève may evolve over the coming years - and how Swiss Platinum Relocation could be well-positioned within that evolution.',
                  'Il s’agit plutôt d’une réflexion prospective sur la façon dont les entreprises de relocation au sein de la Genève Internationale pourraient évoluer au cours des années à venir - et comment Swiss Platinum Relocation pourrait être bien positionnée dans cette évolution.'
                )}
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <h3 className="text-3xl font-light text-charcoal mt-32 mb-10">{t('Expected Outcome', 'Résultat Attendu')}</h3>
            <p className="mb-8">
              {t('The purpose of this initiative is not immediate transformation.', 'Le but de cette initiative n’est pas une transformation immédiate.')}
            </p>
            <p className="mb-8">
              {t('It is to begin a thoughtful conversation around:', 'C’est d’entamer une conversation réfléchie autour de :')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="border border-gray-100 p-8 pt-10 pb-10 bg-white">
                <span className="block text-sm uppercase tracking-wider text-swiss-red mb-2">{t('Focus Area', 'AXE STRATÉGIQUE')}</span>
                <span className="text-xl">{t('future visibility', 'Visibilité future')}</span>
              </div>
              <div className="border border-gray-100 p-8 pt-10 pb-10 bg-white">
                <span className="block text-sm uppercase tracking-wider text-swiss-red mb-2">{t('Focus Area', 'AXE STRATÉGIQUE')}</span>
                <span className="text-xl">{t('premium positioning', 'Positionnement premium')}</span>
              </div>
              <div className="border border-gray-100 p-8 pt-10 pb-10 bg-white">
                <span className="block text-sm uppercase tracking-wider text-swiss-red mb-2">{t('Focus Area', 'AXE STRATÉGIQUE')}</span>
                <span className="text-xl">{t('international client expectations', 'Attentes des clients internationaux')}</span>
              </div>
              <div className="border border-gray-100 p-8 pt-10 pb-10 bg-white">
                <span className="block text-sm uppercase tracking-wider text-swiss-red mb-2">{t('Focus Area', 'AXE STRATÉGIQUE')}</span>
                <span className="text-xl">{t('long-term client acquisition', 'Acquisition de clients à long terme')}</span>
              </div>
              <div className="border border-gray-100 p-8 pt-10 pb-10 bg-white">
                <span className="block text-sm uppercase tracking-wider text-swiss-red mb-2">{t('Focus Area', 'AXE STRATÉGIQUE')}</span>
                <span className="text-xl">{t('digital trust', 'Confiance numérique')}</span>
              </div>
              <div className="border border-gray-100 p-8 pt-10 pb-10 bg-white">
                <span className="block text-sm uppercase tracking-wider text-swiss-red mb-2">{t('Focus Area', 'AXE STRATÉGIQUE')}</span>
                <span className="text-xl">{t('relationship-driven growth', 'Croissance axée sur les relations')}</span>
              </div>
            </div>
            
            <p className="mb-8">{t('If approached carefully and consistently, the long-term outcome could include:', 'S’il est abordé de manière réfléchie et cohérente, le résultat à long terme pourrait inclure :')}</p>
            <ul className="space-y-6 pt-4 pb-12">
              <li className="flex gap-6 items-start">
                <div className="w-1.5 h-1.5 bg-muted-gold rounded-full mt-2.5 shrink-0" />
                <span>{t('stronger positioning within the Geneva relocation market', 'Un positionnement plus fort sur le marché de la relocation à Genève')}</span>
              </li>
              <li className="flex gap-6 items-start">
                <div className="w-1.5 h-1.5 bg-muted-gold rounded-full mt-2.5 shrink-0" />
                <span>{t('improved visibility across modern search environments', 'Une visibilité améliorée dans les environnements de recherche modernes')}</span>
              </li>
              <li className="flex gap-6 items-start">
                <div className="w-1.5 h-1.5 bg-muted-gold rounded-full mt-2.5 shrink-0" />
                <span>{t('greater trust before first contact', 'Une plus grande confiance avant le premier contact')}</span>
              </li>
              <li className="flex gap-6 items-start">
                <div className="w-1.5 h-1.5 bg-muted-gold rounded-full mt-2.5 shrink-0" />
                <span>{t('stronger engagement with high-value international audiences', 'Un engagement plus fort avec un public international de grande valeur')}</span>
              </li>
              <li className="flex gap-6 items-start">
                <div className="w-1.5 h-1.5 bg-muted-gold rounded-full mt-2.5 shrink-0" />
                <span>{t('improved referral and relationship opportunities', 'De meilleures opportunités de recommandation et de relation')}</span>
              </li>
              <li className="flex gap-6 items-start">
                <div className="w-1.5 h-1.5 bg-muted-gold rounded-full mt-2.5 shrink-0" />
                <span>{t('clearer long-term differentiation', 'Une différenciation claire à long terme')}</span>
              </li>
            </ul>

            <div className="p-8 border-l-2 border-swiss-red bg-red-50/30 text-xl md:text-2xl text-charcoal italic pr-8">
              {t(
                'Most importantly, this perspective aims to explore whether there may be a meaningful opportunity to strengthen Swiss Platinum Relocation’s long-term digital presence and future competitiveness in a way that feels aligned with its premium positioning and the expectations of International Genève clients.',
                'Plus important encore, cette perspective vise à explorer s’il existe une opportunité significative de renforcer la présence numérique à long terme et la compétitivité future de Swiss Platinum Relocation d’une manière alignée avec son positionnement premium et les attentes des clients de la Genève Internationale.'
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

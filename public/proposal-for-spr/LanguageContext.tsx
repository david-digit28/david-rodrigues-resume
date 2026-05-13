import { FadeIn } from '../FadeIn';
import { useLanguage } from '../LanguageContext';

export function Closing() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-zinc-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-light text-charcoal mb-12">
              {t('A Possible Strategic Conversation', 'Une Conversation Stratégique Possible')}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-8 text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-24">
              <p>
                {t(
                  'Swiss Platinum Relocation is operating within one of the world’s most international and relationship-driven relocation markets.',
                  'Swiss Platinum Relocation opère sur l’un des marchés de relocation les plus internationaux et axés sur les relations au monde.'
                )}
              </p>
              <p>
                {t(
                  'As client expectations and online discovery continue to evolve, there may be an opportunity to further strengthen visibility, credibility, and long-term engagement with international audiences.',
                  'À mesure que les attentes des clients et la découverte en ligne continuent d’évoluer, il peut y avoir une opportunité de renforcer davantage la visibilité, la crédibilité et l’engagement à long terme avec les publics internationaux.'
                )}
              </p>
              <p>
                {t(
                  'This perspective was prepared as a thoughtful reflection on where the market may be heading - and how Swiss Platinum Relocation could continue building on its existing strengths over the coming years.',
                  'Cette perspective a été préparée comme une réflexion approfondie sur la direction que pourrait prendre le marché - et sur la façon dont Swiss Platinum Relocation pourrait continuer à s’appuyer sur ses atouts existants au cours des prochaines années.'
                )}
              </p>
              <p className="text-charcoal pt-4">
                {t(
                  'I would welcome the opportunity to exchange perspectives further.',
                  'Je serais ravi d’avoir l’opportunité d’échanger davantage nos points de vue.'
                )}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col items-center">
            <a 
              href="mailto:hi@david-rds.com"
              className="inline-flex items-center justify-center px-10 py-5 bg-charcoal text-white text-lg font-light hover:bg-swiss-red transition-colors duration-500 mb-24 shadow-sm hover:shadow-md"
            >
              {t('Exchange Perspectives', 'Échangeons nos perspectives')}
            </a>

            <div className="pt-16 border-t border-gray-200 w-full max-w-md mx-auto">
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg text-charcoal font-medium mb-2">David Rodrigues</span>
                <span className="text-gray-500 font-light mb-4">{t('Geneva, Switzerland', 'Genève, Suisse')}</span>
                <a href="mailto:hi@david-rds.com" className="text-gray-500 font-light hover:text-swiss-red transition-colors">hi@david-rds.com</a>
                <a href="https://www.david-rds.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 font-light hover:text-swiss-red transition-colors">www.david-rds.com</a>
                <a href="https://linkedin.com/in/daviddas13jan" target="_blank" rel="noopener noreferrer" className="text-gray-500 font-light hover:text-swiss-red transition-colors mt-2">LinkedIn</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

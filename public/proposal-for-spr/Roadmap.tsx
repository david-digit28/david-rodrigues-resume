import { useLanguage } from './LanguageContext';

export function Logo() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center justify-center w-14 h-14 bg-swiss-red rounded-xl shrink-0">
        <span className="text-white font-medium text-xl tracking-wide">DR.</span>
      </div>
      <div>
        <p className="text-lg font-medium text-charcoal">David Rodrigues</p>
        <p className="text-base text-gray-500">{t('Geneva, Switzerland', 'Genève, Suisse')}</p>
        <p className="text-base text-gray-400 mt-1">
          {t(
            <>AI-Ready Digital Transformation<br />for International Genève Businesses</>,
            <>Transformation numérique prête pour l’IA<br />pour les entreprises de la Genève Internationale</>
          )}
        </p>
      </div>
    </div>
  );
}

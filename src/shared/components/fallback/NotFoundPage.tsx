import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">404</h1>
      <p className="text-gray-500 mb-8">{t('common.notFound')}</p>
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-4"
      >
        {t('common.backHome')}
      </Link>
    </div>
  );
};

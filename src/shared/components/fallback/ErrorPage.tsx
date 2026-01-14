import { useTranslation } from 'react-i18next';

interface ErrorPageProps {
  title?: string;
  message?: string;
}

export const ErrorPage = ({ title, message }: ErrorPageProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">{title || t('common.error')}</h1>
      <p className="text-gray-600 mb-8 max-w-md">{message || t('common.errorDescription')}</p>
      <button
        onClick={() => window.location.href = '/'}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        {t('common.backHome')}
      </button>
    </div>
  );
};

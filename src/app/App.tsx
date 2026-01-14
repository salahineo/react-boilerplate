import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../shared/components/global/LanguageSwitcher.tsx';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
      <LanguageSwitcher />
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
        {t('home.title')}
      </h1>
      <p className="text-lg leading-8 text-gray-600 max-w-2xl mb-10 whitespace-pre-line">
        {t('home.description')}
      </p>

      <Link
        to="/users"
        className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
      >
        {t('home.viewUsers')}
      </Link>
    </div>
  );
}

export default App;

import { UsersTable } from '../components/UsersTable';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../../../shared/components/global/LanguageSwitcher.tsx';
import { Link } from 'react-router-dom';

export const UsersPage = () => {
  const { t } = useTranslation();

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <LanguageSwitcher />
      <div className="mb-6">
        <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
          &larr; {t('common.backHome')}
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{t('users.title')}</h1>
      <UsersTable />
    </div>
  );
};

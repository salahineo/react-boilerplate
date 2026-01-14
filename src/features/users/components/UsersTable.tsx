import { useUsers } from '../hooks/useUsers';
import { useTranslation } from 'react-i18next';

export const UsersTable = () => {
  const { t } = useTranslation();
  const { data: users, isLoading, isError } = useUsers();

  if (isLoading) return <div className="p-4 animate-pulse text-gray-500">{t('users.loading')}</div>;
  if (isError) return <div className="p-4 text-red-500">{t('users.error')}</div>;

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-600">
          <tr>
            <th className="px-6 py-4">{t('users.name')}</th>
            <th className="px-6 py-4">{t('users.email')}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {users?.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
              <td className="px-6 py-4 text-gray-500">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

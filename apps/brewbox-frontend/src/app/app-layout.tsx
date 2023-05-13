import { Outlet } from 'react-router-dom';
import ApplicationSidebar from './application-sidebar/application-sidebar';

export function AppLayout() {
  return (
    <div>
      <ApplicationSidebar />
      <main className="py-10 lg:pl-72">
        <Outlet />
      </main>
    </div>
  );
}

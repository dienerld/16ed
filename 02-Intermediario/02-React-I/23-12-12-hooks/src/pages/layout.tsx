import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      <Outlet />
    </div>
  );
}

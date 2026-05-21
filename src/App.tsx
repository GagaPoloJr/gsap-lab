import { Outlet } from 'react-router';

function App() {
  // keep it this as a global wrapper for all the page
  return (
    <>
      <main className="h-screen w-screen bg-slate-900">
        <div className="h-full w-full px-4 py-6 md:px-32 md:py-16">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="bg-blue-600 p-4 text-white text-center">
        <h1>Worlds in Collision - Explorando as Ideias de Velikovsky</h1>
      </header>
      <main>
        {children}
      </main>
      <footer className="bg-gray-800 p-4 text-white text-center">© 2024 Meu Projeto</footer>
    </div>
  );
};

export default Layout;

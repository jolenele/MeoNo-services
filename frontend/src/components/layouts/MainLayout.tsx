import ResponsiveScreenDiv from "../common/ResponsiveScreenDiv";

const Header = () => {
  return (
    <ResponsiveScreenDiv className="px-8 flex justify-between">
      <div>MeoNo</div>
      <div>Login</div>
    </ResponsiveScreenDiv>
  );
};

const Footer = () => {
  return (
    <ResponsiveScreenDiv className="px-8 flex justify-between">
      <div>MeoNo</div>
      <div>Login</div>
    </ResponsiveScreenDiv>
  );
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <header className="h-12 border flex justify-center">
        <Header />
      </header>

      <main className="flex-grow flex justify-center">
        <ResponsiveScreenDiv className="bg-slate-100">
          {children}
        </ResponsiveScreenDiv>
      </main>

      <footer className="h-12 border flex justify-center">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;

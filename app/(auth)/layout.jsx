const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center text-center items-center h-screen w-full bg-white">
      {children}
    </div>
  );
};

export default Layout;

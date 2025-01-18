import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex h-screen flex-1">
    <nav className="w-64 bg-gray-800 text-white">{/* Navigation items */}</nav>
    <div className="flex-1">
      <header className="bg-blue-500 p-4 text-white">Top Menu</header>
      <main className="p-4">{children}</main>
    </div>
  </div>
);

export default Layout;

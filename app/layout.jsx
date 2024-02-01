import "@/styles/globals.css";
import Nav from "@components/Nav";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "AI Prompts",
  description: "Discover & Share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;

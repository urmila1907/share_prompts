import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Promption",
  description: "Discover and Share AI prompts",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav/>
          {children}</main>
      </body>
    </html>
  );
};

export default layout;

import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "~/components/contexts/UserContext";
import Main from "~/components/root/Main";

export const App = () => {
  return (
    <div className="bg-base-200">
      <HelmetProvider>
        <AuthProvider>
          <Main />
        </AuthProvider>
      </HelmetProvider>
    </div>
  )
};

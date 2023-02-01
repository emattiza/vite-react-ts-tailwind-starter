import { Router } from "~/components/router/Router";
import { useEffect } from "react";
import { useSignIn, useSignOut } from "~/components/contexts/UserContext";

function Main() {
  const { signIn } = useSignIn();
  const { signOut } = useSignOut();
  useEffect(() => {
  }, []);
  return (
    <main data-theme="emerald" className="bg-base-200">
      <Router />
    </main>
  );
}

export default Main;

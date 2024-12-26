import { StorageBrowser } from "./components/StorageBrowser";
import { Button } from "@aws-amplify/ui-react";
import { signOut } from "aws-amplify/auth";

function App() {

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  }

  return (
    <main>
      <h1>Storage Browser Demo</h1>
      <StorageBrowser />
      <Button onClick={handleSignOut}>Sign Out</Button>
    </main>
  );
}

export default App;

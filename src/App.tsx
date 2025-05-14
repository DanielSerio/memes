import { Header, Page, Shell } from "./modules/Core/components";
import { Sidebar } from "./modules/Sidebar/components";

function App() {
  return (
    <Shell>
      <Header />
      <Page />
      <Sidebar />
    </Shell>
  );
}

export default App;

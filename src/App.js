import Header from './componets/Header';
import Footer from './componets/Footer';
import Shop from './componets/Shop';

import { ContextProvider } from './context';

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;

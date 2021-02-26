import '../src/Assets/styles.css';
import { GlobalProvider } from '../src/Context/Provider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(Story) => <GlobalProvider><div className="md:px-20 md:py-10 w-full"><Story/></div></GlobalProvider>];
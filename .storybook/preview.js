import '../src/assets/styles.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
export const decorators = [(Story) => <div className="md:px-20 md:py-10 w-full"><Story/></div>];
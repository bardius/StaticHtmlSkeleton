// Setup Enzyme
const enzyme = require("enzyme");
const AdapterReact16 = require("enzyme-adapter-react-16");
enzyme.configure({ adapter: AdapterReact16() });

// Fail tests on warnings, not only errors
console.error = message => {
    throw new Error(message);
};

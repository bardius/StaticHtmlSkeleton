// Fail tests on warnings, not only errors
console.error = message => {
    throw new Error(message);
};

const variables = {
    development: {
        googleApiKey: 'abc'
    },
    production: {
        googleApiKey: 'xyz'
    }
};
 
const getEnvVariables = () => {
    if (__DEV__) {
        return variables.development; // return this if in development mode
    }
    return variables.production; // otherwise, return this
};
 
export default getEnvVariables; // export a reference to the function


// usage
// import ENV from './env';
// const apiKey = ENV().googleApiKey;


const config = {
    development: {
        JWT_SECRET: 'development_secret_key',
        // put yout database url below one is dummy 
        DATABASE_URL: 'mongodb://localhost/dev-CourseStore'
    }
};

// Determine the current environment based on NODE_ENV variable
const environment = 'development';

// Export the configuration for the current environment
module.exports = config[environment];

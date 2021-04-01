const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? "http://localhost:3002/api/v1" : process.env.REACT_APP_API_URL;

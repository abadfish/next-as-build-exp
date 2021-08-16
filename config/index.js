const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? "http://localhost:3001/api" : process.env.NEXT_PUBLIC_API_URL

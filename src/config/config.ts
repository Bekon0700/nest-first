export const config = () => ({
    port: parseInt(process.env.PORT) || 3002,
    DB_URL: process.env.DB_URL
})
import dotenv from 'dotenv';

dotenv.config({
    path: process.env.NODE_ENV === "production" ? ".env.production" : ".env"
});

export default {
    PORT: process.env.PORT || 3000,
};

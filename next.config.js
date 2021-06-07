// next.config.js

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
module.exports = withPWA({
    images: {
        domains: ["raw.githubusercontent.com"],
    },
    pwa: {
        disable: process.env.NODE_ENV === "development",
        dest: "public",
        runtimeCaching,
    },
});

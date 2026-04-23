// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@auron/styles/css"],
  compatibilityDate: "2024-11-01",
  ssr: true, // Explicitly enabled (default)
  typescript: {
    strict: true,
  },
});

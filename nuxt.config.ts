// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
  },
  fonts: {
    provider: "fontsource",
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-sc@5.2.8/index.css",
        },
      ],
    },
  },
});

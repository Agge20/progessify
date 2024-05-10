// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/supabase",
  ],
  supabase: {
    redirect: false,
  },
});

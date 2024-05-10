// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/supabase",
    "radix-vue/nuxt",
    "@nuxt/ui",
  ],
  supabase: {
    redirect: false,
  },
});

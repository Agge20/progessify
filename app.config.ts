export default defineAppConfig({
  ui: {
    primary: "green",
    gray: "cool",
    strategy: "override",
    button: {
      color: {
        highlight: {
          solid:
            "bg-theme-highlight text-white transition hover:bg-theme-highlight/80",
        },
      },
    },
  },
});

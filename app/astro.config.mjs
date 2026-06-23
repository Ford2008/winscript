// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  i18n: {
    locales: ["en","cn","tc", "ru", "tr", "it", "ko", "es", "pt", "fr", "vi", "sv", "de", "hu"],
    defaultLocale: "en",
  },
});

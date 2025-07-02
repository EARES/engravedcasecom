// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/scss/style.scss",
  ],

   site: {
    url: "https://engravedcase.com",
    name: "Engravedcase",
    description: "Make your iphone truly yours with custom and premium engravings. Order a custom case with your own design.",
    defaultLocale: "en",
  },


  app: {
    head: {
      title: "Make your phone truly yours",
      meta: [
        { name: "facebook-domain-verification", content: "u9zbbj2qvv18y935nuhb8x4zjs7m76" },
        { name: "msapplication-TileColor", content: "#2b5797" },
        { name: "application-name", content: "Engravedcase" },
        { name: "apple-mobile-web-app-title", content: "Engravedcase" },
        { name: "theme-color", content: "#ffffff" },
      ],
      script: [
        {
          innerHTML: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1311431000988144');
fbq('track', 'PageView');`
        }
      ],
      noscript: [
        {
          innerHTML: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1311431000988144&ev=PageView&noscript=1" />`
        }
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "manifest",
          href: "/favicon/site.webmanifest",
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./assets/scss/default/_variables.scss";',
        },
      },
    },
  },

  // modules: ["@nuxtjs/seo"],

  compatibilityDate: "2025-05-24",

  modules: ["@nuxtjs/seo"],
});

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueFilterDateFormat from "vue-filter-date-format"; // handles converting Date() to human as
// import style



import "../node_modules/vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "../node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default function (Vue, {
  router,
  head,
  isClient
}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueFilterDateFormat);
}
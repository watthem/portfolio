// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueFilterDateFormat from "vue-filter-date-format"; // handles converting Date() to human as
import VueSlickCarousel from "vue-slick-carousel";
import VueMarkdown from "vue-markdown";
// potential build issue related to importing npm style sheets in js?
// ref: https://github.com/gridsome/gridsome/issues/312
// import style for carousel from local src
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faMedium,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faAt,
  faFileAlt,
  faCodeBranch,
  faHeartBroken,
  faKeyboard,
  faPencilAlt,
  faSignature,
  faBriefcase,
  faFilePdf,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(
  faGithub,
  faMedium,
  faPencilAlt,
  faLinkedin,
  faFileAlt,
  faFilePdf,
  faCodepen,
  faAt,
  faHeartBroken,
  faKeyboard,
  faCodeBranch,
  faSignature,
  faBriefcase,
  faAddressCard
);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("VueSlickCarousel", VueSlickCarousel);
  Vue.component("font-awesome", FontAwesomeIcon);
  Vue.component("vue-markdown", VueMarkdown);
  Vue.use(VueFilterDateFormat);
}

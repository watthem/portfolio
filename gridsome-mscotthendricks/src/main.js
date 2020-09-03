// Import main css
import "~/assets/style/index.scss";

// Import default layout so we don't need to import it to every page
import DefaultLayout from "~/layouts/Default.vue";

// Import font awesome library icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";

import "@fortawesome/fontawesome-svg-core/styles.css";

import {
  faTwitter,
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
  faUniversalAccess,
  faSignature,
  faBriefcase,
  faFilePdf,
  faBullseye,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(
  faGithub,
  faMedium,
  faLinkedin,
  faBullseye,
  faFileAlt,
  faFilePdf,
  faCodepen,
  faAt,
  faHeartBroken,
  faUniversalAccess,
  faKeyboard,
  faCodeBranch,
  faSignature,
  faBriefcase,
  faAddressCard
);

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);

  // Add an external CSS file
  head.link.push({
    rel: "stylesheet",
    href: "https://assets.calendly.com/assets/external/widget.css",
  });

  // Add an external JavaScript before the closing </body> tag
  head.script.push({
    src: "https://assets.calendly.com/assets/external/widget.js",
    body: true,
  });

  // Add a meta tag
  head.meta.push({
    name: "keywords",
    content: "HTML,CSS,XML,JavaScript",
  });
}

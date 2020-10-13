// Import main css
import "~/assets/style/index.scss";

// Import default layout so we don't need to import it to every page
import DefaultLayout from "~/layouts/Default.vue";

// Import font awesome library icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";

import "@fortawesome/fontawesome-svg-core/styles.css";

import {
  faCodepen,
  faGithub,
  faLinkedin,
  faMarkdown,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faAddressCard,
  faAt,
  faBriefcase,
  faBullseye,
  faCodeBranch,
  faFileAlt,
  faFilePdf,
  faFileWord,
  faHeartBroken,
  faKeyboard,
  faSignature,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(
  faAddressCard,
  faAt,
  faBriefcase,
  faBullseye,
  faCodeBranch,
  faCodepen,
  faFileAlt,
  faFilePdf,
  faFileWord,
  faGithub,
  faHeartBroken,
  faKeyboard,
  faLinkedin,
  faMarkdown,
  faMedium,
  faSignature,
  faUniversalAccess,
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

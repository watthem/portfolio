<template>
  <div class="author">
    <g-link to="/about/">
      <g-image
        alt="Author image"
        class="author__image"
        src="~/assets/images/author.jpg"
        width="180"
        height="180"
        blur="5"
      />
    </g-link>
    <g-link to="/about/">
      <h2 v-if="showTitle" class="author__site-title">Matthew Hendricks</h2>
    </g-link>
    <g-link to="/">
      <h2 v-if="showSiteUrl" class="author__site-site-url">
        MatthewHendricks.net
      </h2>
    </g-link>
    <h2 v-if="showSubtitle" class="author__sub-title">
      Content Management Systems and Documentation
    </h2>
    <p v-if="showIntroShort" class="author__intro">
      Developer-centric Technical Writer and Product Manager
    </p>
    <p class="author__hashtags">#DeFintech</p>
    <p v-if="showIntroLong" class="author__intro">
      Focused on client solutions for product teams | values opportunities for
      Collaborative Communication
    </p>
    <div v-if="showLinks" class="author__links">
      <p>Find me on these platforms:</p>

      <ul class="flex justify-center list-none">
        <li>
          <a href="https://matthewhendricks.substack.com/">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="mastodon"
              class="author__icons svg-inline--fa svg-inline--fa.fa-w-14"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Substack icon</title>
              <path
                fill="currentColor"
                d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://matrix.to/#/@matthewhendricks:matrix.org">
            <svg
              class="author__icons svg-inline--fa svg-inline--fa.fa-w-14"
              role="img"
              width="75"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="currentColor" fill-rule="nonzero">
                <path
                  d="M.936.732V31.25H3.13v.732H.095V0h3.034v.732zM9.386 10.407v1.544h.044a4.461 4.461 0 0 1 1.487-1.368c.58-.323 1.245-.485 1.993-.485.72 0 1.377.14 1.972.42.595.279 1.047.771 1.355 1.477.338-.5.796-.941 1.377-1.323.58-.383 1.266-.574 2.06-.574.602 0 1.16.074 1.674.22.514.148.954.383 1.322.707.366.323.653.746.859 1.268.205.522.308 1.15.308 1.887v7.633H20.71v-6.464c0-.383-.015-.743-.044-1.082a2.305 2.305 0 0 0-.242-.882 1.473 1.473 0 0 0-.584-.596c-.257-.146-.606-.22-1.047-.22-.44 0-.796.085-1.068.253-.272.17-.485.39-.639.662a2.654 2.654 0 0 0-.308.927 7.074 7.074 0 0 0-.078 1.048v6.354h-3.128v-6.398c0-.338-.007-.673-.021-1.004a2.825 2.825 0 0 0-.188-.916 1.411 1.411 0 0 0-.55-.673c-.258-.168-.636-.253-1.135-.253a2.33 2.33 0 0 0-.584.1 1.94 1.94 0 0 0-.705.374c-.228.184-.422.449-.584.794-.161.346-.242.798-.242 1.357v6.619H6.434V10.407h2.952zM25.842 12.084a3.751 3.751 0 0 1 1.233-1.17 5.37 5.37 0 0 1 1.685-.629 9.579 9.579 0 0 1 1.884-.187c.573 0 1.153.04 1.74.121.588.081 1.124.24 1.609.475.484.235.88.562 1.19.981.308.42.462.975.462 1.666v5.934c0 .516.03 1.008.088 1.478.058.471.161.824.308 1.06H32.87a4.435 4.435 0 0 1-.22-1.104c-.5.515-1.087.876-1.762 1.081a7.084 7.084 0 0 1-2.071.31c-.544 0-1.05-.067-1.52-.2a3.472 3.472 0 0 1-1.234-.617 2.87 2.87 0 0 1-.826-1.059c-.199-.426-.298-.934-.298-1.522 0-.647.114-1.18.342-1.6.227-.419.52-.753.881-1.004.36-.25.771-.437 1.234-.562.462-.125.929-.224 1.399-.298.47-.073.932-.132 1.387-.176.456-.044.86-.11 1.212-.199.353-.088.631-.217.837-.386.206-.169.301-.415.287-.74 0-.337-.055-.606-.166-.804a1.217 1.217 0 0 0-.44-.464 1.737 1.737 0 0 0-.639-.22 5.292 5.292 0 0 0-.782-.055c-.617 0-1.101.132-1.454.397-.352.264-.558.706-.617 1.323h-3.128c.044-.735.227-1.345.55-1.83zm6.179 4.423a5.095 5.095 0 0 1-.639.165 9.68 9.68 0 0 1-.716.11c-.25.03-.5.067-.749.11a5.616 5.616 0 0 0-.694.177 2.057 2.057 0 0 0-.594.298c-.17.125-.305.284-.408.474-.103.192-.154.434-.154.728 0 .28.051.515.154.706.103.192.242.342.419.453.176.11.381.187.617.231.234.044.477.066.726.066.617 0 1.094-.102 1.432-.309.338-.205.587-.452.75-.739.16-.286.26-.576.297-.87.036-.295.055-.53.055-.707v-1.17a1.4 1.4 0 0 1-.496.277zM43.884 10.407v2.096h-2.291v5.647c0 .53.088.883.264 1.059.176.177.529.265 1.057.265.177 0 .345-.007.507-.022.161-.015.316-.037.463-.066v2.426a7.49 7.49 0 0 1-.882.089 21.67 21.67 0 0 1-.947.022c-.484 0-.944-.034-1.377-.1a3.233 3.233 0 0 1-1.145-.386 2.04 2.04 0 0 1-.782-.816c-.191-.353-.287-.816-.287-1.39v-6.728H36.57v-2.096h1.894v-3.42h3.129v3.42h2.29zM48.355 10.407v2.118h.044a3.907 3.907 0 0 1 1.454-1.754 4.213 4.213 0 0 1 1.036-.497 3.734 3.734 0 0 1 1.145-.176c.206 0 .433.037.683.11v2.912a5.862 5.862 0 0 0-.528-.077 5.566 5.566 0 0 0-.595-.033c-.573 0-1.058.096-1.454.287a2.52 2.52 0 0 0-.958.783 3.143 3.143 0 0 0-.518 1.158 6.32 6.32 0 0 0-.154 1.434v5.14h-3.128V10.407h2.973zM54.039 8.642V6.06h3.128v2.582H54.04zm3.128 1.765v11.405H54.04V10.407h3.128zM58.797 10.407h3.569l2.005 2.978 1.982-2.978h3.459l-3.745 5.339 4.208 6.067h-3.57l-2.378-3.596-2.38 3.596h-3.502l4.097-6.001zM74.094 31.25V.732H71.9V0h3.035v31.982H71.9v-.732z"
                />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://mastodon.online/@matthewhendricks">
            <font-awesome
              class="author__icons"
              :icon="['fab', 'mastodon']"
              alt="Github.com"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/watthem/">
            <font-awesome
              class="author__icons"
              :icon="['fab', 'github']"
              alt="Github.com"
            />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/watthem/">
            <font-awesome
              class="author__icons"
              :icon="['fab', 'codepen']"
              alt="CodePen.io"
            />
          </a>
        </li>

        <li class="disabled">
          <a href="/linked-in/">
            <font-awesome
              class="author__icons"
              :icon="['fab', 'linkedin']"
              alt="LinkedIn.com"
            />
          </a>
          <figure class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="35">
              <g
                fill="none"
                stroke="var(--good-color)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-miterlimit="10"
              >
                <path
                  d="M48.569 27.616c-4.254-4.052-15.443 2.992-20.225 3.767-18.011 2.916-23.035-13.832-27.109-28.1"
                />
                <path
                  stroke-linejoin="round"
                  d="M41.907 31.488c3.811-2.175 7.875-.701 11.857-2.026-2.17-2.355-6.355-7.329-6.883-10.66"
                />
              </g>
            </svg>
          </figure>
          <a href="/linked-in/"> Let me say why </a>
        </li>
      </ul>

      <p v-if="showEmail" class="space-bottom">
        <span>Or email me -</span>
        <a alt="email" href="mailto:mscohendricks@gmail.com"
          >mscotthendricks@gmail.com</a
        >
      </p>
    </div>
    <div v-if="showResume" class>
      <g-link to="/resume/" class="link-button">
        <button>View and download resume</button>
      </g-link>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  props: [
    "showTitle",
    "showEmail",
    "showSiteUrl",
    "showResume",
    "showSubtitle",
    "showLinks",
    "showIntroLong",
    "showIntroShort",
  ],
};
</script>

<style lang="scss">
.author {
  margin: var(--space) auto;
  max-width: 500px;

  text-align: center;
  padding: calc(var(--space) / 2) 0;

  &__image {
    border-radius: 100%;
    width: calc(var(--space) * 3);
    height: calc(var(--space) * 3);
    margin-bottom: 1em;
    filter: grayscale(50%);
  }

  &__hashtags {
    font-size: 90%;
    color: rgb(27, 149, 224);
  }

  &__full_image {
    border-radius: 100%;
    width: 100%;
    height: 100%;
    margin-bottom: 1em;
    filter: grayscale(50%);
  }

  &__icons {
    font-size: 1.8rem;
    margin: var(--radius);
  }

  &__intro {
    opacity: 0.8;
  }

  &__site-title {
    font-size: 1.5em;
  }

  &__links {
    margin-top: -0.5em;
    a {
      color: currentColor;

      &:hover,
      &:focus {
        opacity: 0.5;
      }
      .wide {
      }
    }
  }
}
</style>

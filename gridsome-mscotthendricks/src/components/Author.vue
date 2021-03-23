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
      <h2 v-if="showSiteUrl" class="author__site-site-url">MatthewHendricks.net</h2>
    </g-link>
    <h2 v-if="showSubtitle" class="author__sub-title">Content Management Systems and Documentation</h2>
    <p
      v-if="showIntroShort"
      class="author__intro"
    >Knowledge Worker, Technical Writer, Product Manager</p>
    <p v-if="showIntroLong" class="author__intro">
      Knowledge Worker, Technical Writer, Product Manager — Focused on client solutions for product teams | values opportunities for Collaborative Communication
    </p>
    <div v-if="showLinks" class="author__links">
      <p>Find me on these platforms:</p>

      <ul class="flex justify-center list-none">
        <li class="disabled">
            <a href="/linked-in/">
          <font-awesome class="author__icons" :icon="['fab', 'linkedin']" alt="LinkedIn.com" />
          </a>
          <figure class="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="35"><g fill="none" stroke="var(--code-color)" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10"><path d="M48.569 27.616c-4.254-4.052-15.443 2.992-20.225 3.767-18.011 2.916-23.035-13.832-27.109-28.1"/><path stroke-linejoin="round" d="M41.907 31.488c3.811-2.175 7.875-.701 11.857-2.026-2.17-2.355-6.355-7.329-6.883-10.66"/></g></svg>
            </figure>
             <a href="/linked-in/">
            <small>Let me say why</small>
             </a>
        </li>
        <li>
          <a href="https://github.com/watthem/">
            <font-awesome class="author__icons" :icon="['fab', 'github']" alt="Github.com" />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/watthem/">
            <font-awesome class="author__icons" :icon="['fab', 'codepen']" alt="CodePen.io" />
          </a>
        </li>
      </ul>

      <p v-if="showEmail" class="space-bottom">
        <span>Or email me -</span>
        <a alt="email" href="mailto:mscohendricks@gmail.com">mscotthendricks@gmail.com</a>
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
      margin: 0 0.5em;
      color: currentColor;
    }
  }
}
</style>

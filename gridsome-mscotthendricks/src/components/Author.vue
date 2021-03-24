<template>
  <div class="author">
    <g-link to="/about/">
      <g-image
        v-if="showImage"
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
    <p class="author__hashtags"><a href="/tag/de-fintech/">#DeFintech</a></p>
    <p v-if="showIntroLong" class="author__intro">
      Focused on decentralized solutions for remote teams | values opportunities
      for Collaborative Communication
    </p>
    <div v-if="showLinks" class="author__links">
      <p>Find me on these platforms:</p>

      <SocialLinks :showLinkedIn="true"></SocialLinks>

      <p v-if="showEmail" class="space-bottom">
        <span>Or email me -</span>
        <a alt="email" href="mailto:mscotthendricks@gmail.com"
          >mscotthendricks@gmail.com</a
        >
      </p>
    </div>
    <div v-if="showResume" class>
      <g-link to="/resume/" class="link-button">
        <ResumeButton></ResumeButton>
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
import SocialLinks from "~/components/SocialLinks.vue";

export default {
  components: { SocialLinks },
  props: [
    "showTitle",
    "showImage",
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
    }
  }
}
</style>

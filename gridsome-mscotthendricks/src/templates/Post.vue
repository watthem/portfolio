<template>
  <Layout>
    <div v-if="$page.post.published">
      <div class="post-title">
        <h1 class="post-title__text">{{ $page.post.title }}</h1>

        <PostMeta :post="$page.post" />
      </div>

      <div class="post content-box">
        <div class="post__header">
          <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
        </div>

        <div class="post__content" v-html="$page.post.content" />

        <div class="post__footer">
          <PostTags :post="$page.post" />
        </div>
      </div>

      <div class="post-comments">
        <!-- Add comment widgets here -->
      </div>
    </div>
    <div v-else class="content-box">
      <div class="post-title">
        <h1 class="post-title__text">Oops 😳</h1>

        <p>That link isn't ready yet, sorry!</p>
        <p>
          Check out my other
          <g-link to="/blog/">posts</g-link>.
        </p>
      </div>
    </div>
    <Author class="post-author" :show-links="true" :show-title="true" />
  </Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";

const slugify = require("@sindresorhus/slugify");

export default {
  components: {
    Author,
    PostMeta,
    PostTags,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { key: "og:type", property: "og:type", content: "article" },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.post.title,
        },
        {
          key: "description",
          name: "description",
          content: this.$page.post.description,
        },
        { key: "og:url", property: "og:url", content: this.postUrl },
        {
          key: "article:published_time",
          property: "article:published_time",
          content: this.$page.post.date,
        },
      ],
    };
  },
  computed: {
    postUrl() {
      let siteUrl = this.$static.metadata.siteUrl;
      let postPath = this.$page.post.path;

      return postPath
        ? `${siteUrl}${postPath}`
        : `${siteUrl}/${slugify(this.$page.post.title)}/`;
    },
  },
};
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    cover_image
    published
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
  }
}
</page-query>

<static-query>
    query {
        metadata {
            siteUrl
        }
    }
</static-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>

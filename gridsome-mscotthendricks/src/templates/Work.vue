<template>
  <Layout :title="$page.work.title" showWork="true" showResume="true">
    <div class="work-title">
      <h1 class="work-title__text">{{ $page.work.title }}</h1>
      <WorkSubjects :work="$page.work" />

      <WorkMeta :work="$page.work" />
    </div>

    <div v-if="$page.work.published" class="work content-box">
      <div class="work__header">
        <a class="work__url" :href="$page.work.URL">
          <g-image alt="Cover image" v-if="$page.work.cover_image" :src="$page.work.cover_image" />
        </a>
      </div>
      <div class="work__description" v-html="$page.work.description" />
      <div class="raised">
        <span>🔗 Read on {{ $page.work.company }}'s website:</span>
        <br />
        <a class="work__url" :href="$page.work.URL">{{ $page.work.URL }}</a>
      </div>
      <div class="work__footer"></div>
      <div
        v-if="$page.work.content.length > 1"
        class="work__content content-box"
        v-html="$page.work.content"
      />
    </div>
    <div v-else>
      <div class="work-title">
        <h1 class="work-title__text">Oops 😳</h1>

        <p>That link isn't ready yet, sorry!</p>
        <p>
          Check out my other
          <g-link to="/work/">work</g-link>.
        </p>
      </div>
    </div>
    <Author class="work-author" :show-links="true" />
  </Layout>
</template>

<page-query>
query Work ($path: String!) {
  work: work (path: $path) {
    title
    id
    content
    published
    cover_image
    URL
    PDF
    date (format: "D. MMMM YYYY")
    company
    description
    tags {
      path
      title
      id
    }
    subjects {
      path
      title
      id
    }
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

<script>
import Layout from "~/layouts/Default.vue";
import WorkMeta from "~/components/WorkMeta.vue";
import WorkSubjects from "~/components/WorkSubjects.vue";
import Author from "~/components/Author.vue";

const slugify = require("@sindresorhus/slugify");

export default {
  components: {
    Layout,
    WorkMeta,
    WorkSubjects,
    Author,
  },
  data() {
    return {};
  },
  watcher: {},

  metaInfo() {
    return {
      title: this.$page.work.title,
      meta: [
        { key: "og:type", property: "og:type", content: "article" },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.work.title,
        },
        {
          key: "description",
          name: "description",
          content: this.$page.work.description,
        },
        { key: "og:url", property: "og:url", content: this.workUrl },
        {
          key: "article:published_time",
          property: "article:published_time",
          content: this.$page.work.date,
        },
      ],
    };
  },
  computed: {
    workUrl() {
      let siteUrl = this.$static.metadata.siteUrl;
      let workPath = this.$page.work.path;

      return workPath
        ? `${siteUrl}${workPath}`
        : `${siteUrl}/${slugify(this.$page.work.title)}/`;
    },
  },
};
</script>

<style lang="scss">
.raised {
  padding: 1rem;
  margin: 1rem;
  background: var(--bg-color);
  border-left: 1rem solid var(--border-color);
}
.work-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.work {
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

.work-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.work-author {
  margin-top: calc(var(--space) / 2);
}
</style>

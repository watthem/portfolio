<template>
  <Layout :title="$page.work.title" showWork="true">
    <div class="work-title">
      <h1 class="work-title__text">{{ $page.work.title }}</h1>
      <WorkSubjects :work="$page.work" />

      <WorkMeta :work="$page.work" />
    </div>

    <div v-if="$page.work.published" class="work content-box">
      <div class="work__header">
        <a class="work__url" :href="$page.work.URL">
          <g-image
            alt="Cover image"
            v-if="$page.work.cover_image"
            :src="$page.work.cover_image"
          />
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
          <g-link to="/work">work</g-link>.
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

<script>
import Layout from "~/layouts/Default.vue";
import WorkMeta from "~/components/WorkMeta.vue";
import WorkSubjects from "~/components/WorkSubjects.vue";
import Author from "~/components/Author.vue";

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
  computed: {
    subjectWork: function() {
      return this.$page.works.edges.filter((edge) => {
        // this currently returns all matchces, including the current page
        // --> should update the query to not include current page/id with allWork collection
        return edge.node.subjects.includes(this.pageSubjectMatter);
      });
    },
    pageSubjectMatter: function() {
      // just returning the first tag for now
      return this.$page.work.subjects.split(",")[0];
    },
  },
  metaInfo() {
    return {
      title: this.$page.work.title,
    };
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

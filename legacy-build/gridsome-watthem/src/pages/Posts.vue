<template>
  <Layout>
    <div class="container mx-auto px-4" id="blog-list">
      <section class="py-8 px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl">Blog posts</h2>
          <p class="text-lg">
            This is a complete collection of writings on the topics of ...
          </p>
        </div>
      </section>
      <div class="flex text-sm justify-around p-10">
        <div>
          Showing page {{ $page.posts.pageInfo.currentPage }} of
          {{ $page.posts.pageInfo.totalPages }}
        </div>

        <Pager
          :info="$page.posts.pageInfo"
          linkClass="px-3 text-blue-700 underline hover:text-white hover:bg-blue-700 "
          :showNavigation="true"
        />
      </div>
      <section
        class="py-8 px-4 m-auto max-w-lg rounded overflow-hidden shadow-lg"
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
      >
        <div class="flex flex-wrap mx-2">
          <div class="lg:w px-2 lg:pr-16 lg:mb-0">
            <g-link :to="edge.node.path">
              <h2 class="text-2xl">{{ edge.node.title }}</h2>
            </g-link>
          </div>

          <div class="lg:w px-2">
            <img
              id="nt"
              class="w-32 my-5 m-auto"
              :src="edge.node.featuredMedia"
            />
            <g-link :to="edge.node.path">
              <p class="p-10">{{ edge.node.description }}</p>
            </g-link>
            <div class="content-end text-right">
              <a
                class="px-3 text-blue-700 underline hover:text-white hover:bg-blue-700"
                :href="edge.node.path"
                >read more</a
              >
            </div>
          </div>
          <div class="px-6 py-4">
            <span
              class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >{{ edge.node.subjectMatter }}</span
            >
          </div>
        </div>
      </section>
      <div class="flex text-sm justify-around p-10">
        <div>
          Showing page {{ $page.posts.pageInfo.currentPage }} of
          {{ $page.posts.pageInfo.totalPages }}
        </div>
        <Pager
          :info="$page.posts.pageInfo"
          linkClass="px-3 text-blue-700 underline hover:text-white hover:bg-blue-700 "
          :showNavigation="true"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($page: Int) {
 posts: allPosts (perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
     	  title
        isFeatured
        featuredMedia
        description
        subjectMatter
        id
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager,
  },
  data() {
    return {};
  },
  metaInfo: {
    title: "post Examples",
  },
};
</script>

<style>
a.active--exact.active {
  opacity: 0.8;
  font-weight: bolder;
  text-decoration: none;
}
</style>

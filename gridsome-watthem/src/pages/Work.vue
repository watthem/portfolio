<template>
  <Layout>
    <div class="container mx-auto px-4" id="blog-list">
      <section class="py-8 px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl">Work Examples</h2>
          <p
            class="text-lg"
          >This is just a sample of the work I've completed including subject matters, and technologies I used to build them.</p>
        </div>
      </section>
      <div class="flex text-sm justify-around p-10">
        <div>Showing page {{ $page.works.pageInfo.currentPage }} of {{ $page.works.pageInfo.totalPages }}</div>

        <Pager
          :info="$page.works.pageInfo"
          linkClass="px-3 text-blue-700 underline hover:text-white hover:bg-blue-700 "
          :showNavigation="true"
        />
      </div>
      <section
        class="py-8 px-4 m-auto max-w-lg rounded overflow-hidden shadow-lg"
        v-for="edge in $page.works.edges"
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
              v-if="edge.node.Company.startsWith('Ninja')"
              id="nt"
              class="w-32 my-5 m-auto"
              src="../nt.png"
            />
            <img
              v-else-if="edge.node.Company.startsWith('Ookla')"
              id="st"
              class="w-32 m-auto"
              src="../st.png"
            />

            <p class="p-10">{{ edge.node.Stub }}</p>
            <div class="content-end text-right">
              <a
                class="px-3 text-blue-700 underline hover:text-white hover:bg-blue-700"
                :href="edge.node.path"
              >read more</a>
            </div>
          </div>
          <div class="px-6 py-4">
            <span
              class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >{{ edge.node.Subject_Matter }}</span>
          </div>
        </div>
      </section>
      <div class="flex text-sm justify-around p-10">
        <div>Showing page {{ $page.works.pageInfo.currentPage }} of {{ $page.works.pageInfo.totalPages }}</div>

        <Pager
          :info="$page.works.pageInfo"
          linkClass="px-3 text-blue-700 underline hover:text-white hover:bg-blue-700 "
          :showNavigation="true"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Work ($page: Int) {
 works: allWork (perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        id
     	  title
        URL
        Stub
        path
        Company
        Subject_Matter
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager
  },
  data() {
    return {};
  },
  metaInfo: {
    title: "Work Examples"
  }
};
</script>

<style>
a.active--exact.active {
  opacity: 0.8;
  font-weight: bolder;
  text-decoration: none;
}
</style>

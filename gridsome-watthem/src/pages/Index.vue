<template>
  <Layout>
    <section class="py-12 px-4">
      <div class="w-3/4 m-auto">
        <div class="rounded rounded-t-lg overflow-hidden max-w-xs m-auto">
          <div class="-mt-8">
            <g-image src="../pro.jpg" class="rounded-b-full"></g-image>
          </div>
          <div class="text-center px-3 pb-6 pt-2">
            <h3 class="text-black bold">I'm matthew,</h3>
            <p class="mt-2 text-grey-dark">I live in Seattle WA.</p>
          </div>
          <div class="flex justify-center pb-3 text-grey-dark">
            <div class="text-center mr-3 pr-3">
              <div>I've been a product manager, technical services manager, and currently work as a technical writing consultant.</div>

              <g-link to="/about" class="text-blue-700 hover:underline">Learn more about me &raquo;</g-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-12 px-10 bg-blue-500">
      <h2 class="text-4xl mb-8 font-heading">
        <font-awesome class="mr-5 text-blue-900 w-20" :icon="['fa', 'keyboard']" />Technical Writing
      </h2>
      <p
        class="text-gray leading-relaxed"
      >I have a knack for writing technical content for both developers and customers with a focus on software systems and programming APIs.</p>
      <div class="mx-auto">
        <div class="text-center">
          <WorkList></WorkList>
        </div>
      </div>
    </section>
    <g-link
      class="text-blue-700 hover:underline text-center block"
      to="/work"
    >See more work examples &raquo;</g-link>

    <section class="bg-green-200 my-10 p-10">
      <div class>
        <div class>
          <div class>
            <h2 class="text-3xl font-heading">
              <font-awesome class="mr-5 text-blue-900 w-20" :icon="['fa', 'signature']" />Not just technical
            </h2>
            <p
              class="text-gray leading-relaxed"
            >My creative content has been featured on several popular curator lists on medium.com</p>
            <!-- <a class="text-right text-blue-700 hover:underline" href="#">Check out more</a> -->
          </div>
        </div>
        <div class>
          <div class>
            <div class>
              <CreativeList></CreativeList>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-blue-200 p-10">
      <div class>
        <div class>
          <div class>
            <h2 class="text-3xl font-heading">
              <font-awesome class="mr-5 text-blue-900 w-20" :icon="['fa', 'code-branch']" />I also know web programming!
            </h2>
            <p
              class="text-gray leading-relaxed"
            >My interests in writing technical content has taught me how to build fast, responsive websites using Javascript, APIs, and Markdown. My CSS animations have been picked to be on the front page of codepen.io</p>
            <!-- <a class="text-right text-blue-700 hover:underline" href="#">Check out more</a> -->
          </div>
        </div>
        <div class>
          <div class>
            <div class>
              <DemoList></DemoList>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import CreativeList from "../components/CreativeList";
import DemoList from "../components/DemoList";
import WorkList from "../components/WorkList";

export default {
  components: {
    CreativeList,
    DemoList,
    WorkList
  },
  data() {
    return {};
  },
  metaInfo: {
    title: "Welcome"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

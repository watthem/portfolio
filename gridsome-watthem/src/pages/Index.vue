<template>
  <Layout>
    <section class="py-12 px-4 text-center">
      <div class="w-full max-w-2xl mx-auto">
        <h2 class="text-5xl mt-2 mb-6 leading-tight font-heading">I'm matthew, I live in Seattle WA.</h2>
        <div>I've been a product manager, technical services manager, and currently work as a technical writing consultant.</div>
        <p
          class="text-sm m-2 font-semibold"
        >I have a knack for writing technical content for both developers and customers with a focus on software systems and programming APIs.</p>

        <g-link to="/about" class="text-blue-700 hover:underline">Learn more about me &raquo;</g-link>
      </div>
    </section>
    <section class="py-12 px-10 text-center bg-blue-500">
      <h2 class="text-4xl mb-8 font-heading">Technical Writing Portfolio</h2>

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

    <section class="bg-orange-500 my-10 p-10">
      <div class>
        <div class>
          <div class>
            <h2 class="text-3xl font-heading">Not just technical</h2>
            <p
              class="text-white leading-relaxed"
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
    <section class="bg-purple-500 p-10">
      <div class>
        <div class>
          <div class>
            <h2 class="text-3xl font-heading">I also know web programming!</h2>
            <p
              class="text-white leading-relaxed"
            >My interests in writing technical content has taught me how to build fast, responsive websites using Javascript, APIs, and Markdown. My CSS animations have been picked to be on the front page of codepen.io</p>
            <!-- <a class="text-right text-blue-700 hover:underline" href="#">Check out more</a> -->
          </div>
        </div>
        <div class>
          <div class="bg-blue-500">
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

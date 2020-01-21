<template>
  <Layout>
    <section class="py-12 px-4 text-center bg-gray-300">
      <h2 class="text-4xl mb-8 font-heading">Technical Writing Portfolio</h2>
      <div class="max-w-2xl mx-auto">
        <div class="text-center">
          <div>
            <WorkList></WorkList>
          </div>
        </div>
      </div>
    </section>

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

    <section class="py-12 px-4">
      <div class="flex flex-wrap -mx-4 mb-10">
        <div class="w-full lg:w-1/2 px-4 mb-8">
          <div class="flex flex-col h-full p-8 bg-gray-200 rounded">
            <h2 class="text-3xl font-heading">Not just technical</h2>
            <p
              class="max-w-sm mt-auto mb-8 text-gray-500 leading-relaxed"
            >My creative content has been featured on several popular curator lists on medium.com</p>
            <!-- <a class="text-right text-blue-700 hover:underline" href="#">Check out more</a> -->
          </div>
        </div>
        <div class="lg:w-1/2 px-4">
          <div class="flex flex-wrap -m-2 bg-gray-300">
            <div class="w-full p-2">
              <CreativeList></CreativeList>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/2 px-4 mb-8">
          <div class="flex flex-col h-full p-8 bg-gray-200 rounded">
            <h2 class="text-3xl font-heading">I also know web programming!</h2>
            <p
              class="max-w-sm mt-auto mb-8 text-gray-500 leading-relaxed"
            >My interests in writing technical content has taught me how to build fast, responsive websites using Javascript, APIs, and Markdown. My CSS animations have been picked to be on the front page of codepen.io</p>
            <!-- <a class="text-right text-blue-700 hover:underline" href="#">Check out more</a> -->
          </div>
        </div>
        <div class="lg:w-1/2 px-4">
          <div class="flex flex-wrap -m-2 bg-gray-300">
            <div class="w-full p-2">
              <DemoList></DemoList>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="py-12 px-4">
      <h2 class="text-3xl text-center mb-8 font-heading">Latest posts</h2>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
          <div class="h-full pb-8 rounded shadow-md">
            <a href="#">
              <img class="mb-4" src="placeholders/pictures/work.jpg" alt />
              <div class="px-6">
                <small>Jan 17 2020 | By Matthew</small>
                <h3 class="text-xl my-3 font-heading">To-do:</h3>
                <p class="text-gray-500">Loop through all latest mixed content posts</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>-->
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
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<template>
  <Layout>
    <section class="py-12 px-4">
      <div class="w-3/4 m-auto">
        <div class="rounded rounded-t-lg max-w-xs m-auto">
          <div class="-mt-8">
            <g-image src="../pro2.jpg" class="rounded-b-full"></g-image>
          </div>
          <div class="text-center px-3 pb-6 pt-2">
            <h3 class="text-black font-bold">I'm Matthew,</h3>
            <p class="mt-2 text-grey-dark">I live in Seattle WA.</p>
          </div>
          <div class="flex justify-center pb-3 text-grey-dark">
            <div class="text-center mr-3 pr-3">
              <div>I've been a product manager, technical services manager, and work currently as a technical writing consultant.</div>

              <g-link to="/about" class="text-blue-700 hover:underline">Learn more about me &raquo;</g-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="morph-blue py-12 px-10 bg-blue-500 max-w-3xl m-auto">
      <h2 class="text-4xl mb-8 font-heading text-blue-900">
        <font-awesome class="mr-5 w-12" :icon="['fa', 'keyboard']" />Technical Writing
      </h2>
      <p
        class="text-gray leading-relaxed"
      >I have a knack for developing technical content for both developers and customers with a focus on software systems and programming APIs.</p>
      <br />
      <h3 class="text-3xl mb-8 font-heading text-blue-900">Skills</h3>
      <div class="m-auto bg-white rounded shadow-lg">
        <div class="px-6 py-4">
          <h4 class="font-bold text-xl mb-2">Technical Content Development</h4>
          <ul class="px-10">
            <li class="list-disc">
              <p
                class="text-gray-700 text-base"
              >Plans and creates technical information by writing text, designing illustrations, and enhancing content management systems to support high-value projects.</p>
            </li>
          </ul>
        </div>
        <div class="px-6 py-4">
          <h4 class="font-bold text-xl mb-2">Programmer Writer</h4>
          <ul class="px-10">
            <li class="list-disc">
              <p
                class="text-gray-700 text-base"
              >Develops documentation and code samples that developers need to do their jobs.</p>
            </li>
          </ul>
        </div>
        <div class="px-6 py-4">
          <h4 class="font-bold text-xl mb-2">Process Documentation</h4>
          <ul class="px-10">
            <li class="list-disc">
              <p
                class="text-gray-700 text-base"
              >Details procedures used in business processes for technical and non-technical audiences alike.</p>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <h3 class="text-3xl mb-8 font-heading text-blue-900">Past work examples</h3>
      <div class="mx-auto">
        <div class="text-center max-w-2xl m-auto">
          <WorkList></WorkList>
        </div>
      </div>
    </section>
    <g-link
      class="text-blue-700 hover:underline text-center block"
      to="/work"
    >See more work examples &raquo;</g-link>

    <section class="morph-green bg-green-200 my-10 p-10 max-w-3xl m-auto">
      <div class>
        <h2 class="text-3xl font-heading text-blue-900">
          <font-awesome class="mr-5 w-12" :icon="['fa', 'signature']" />Not just technical
        </h2>
        <p
          class="text-gray leading-relaxed"
        >My history as a product manager and team leader involved seeing through several creatively-driven projects. My creative content has been featured on several popular curator lists on medium.com</p>
        <br />
        <h3 class="text-3xl mb-8 font-heading text-blue-900">Skills</h3>
        <div class="m-auto bg-white rounded shadow-lg">
          <div class="px-6 py-4">
            <h4 class="font-bold text-xl mb-2">Content Project Management</h4>
            <ul class="px-10">
              <li class="list-disc">
                <p
                  class="text-gray-700 text-base"
                >Drives the production of written and visual projects to completion on scope and on schedule.</p>
              </li>
            </ul>
          </div>
          <div class="px-6 py-4">
            <h4 class="font-bold text-xl mb-2">Creative Writing</h4>
            <ul class="px-10">
              <li class="list-disc">
                <p
                  class="text-gray-700 text-base"
                >Drafts well-structured and expressive written word to deliver storylines and ideas using Content Management Systems.</p>
              </li>
            </ul>
          </div>
          <div class="px-6 py-4">
            <h4 class="font-bold text-xl mb-2">Blog Content</h4>
            <ul class="px-10">
              <li class="list-disc">
                <p
                  class="text-gray-700 text-base"
                >Grows website traffic with new blog posts from thorough research on industry-related topics.</p>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <h3 class="text-3xl mb-8 font-heading text-blue-900">Past writing examples</h3>
        <div class="mx-auto">
          <div class="text-center max-w-2xl m-auto">
            <CreativeList></CreativeList>
          </div>
        </div>
      </div>
    </section>
    <section class="morph-lightblue bg-blue-200 p-10 max-w-3xl m-auto">
      <div class>
        <h2 class="text-3xl font-heading text-blue-900">
          <font-awesome class="mr-5 w-12" :icon="['fa', 'code-branch']" />I also know web programming!
        </h2>
        <p
          class="text-gray leading-relaxed"
        >My interest in writing technical content has taught me how to build fast, responsive websites using Javascript, APIs, and Markdown. My CSS animations have been picked to be on the front page of codepen.io</p>
        <br />
        <h3 class="text-3xl mb-8 font-heading text-blue-900">Skills</h3>
        <div class="m-auto bg-white rounded shadow-lg">
          <div class="px-6 py-4">
            <h4 class="font-bold text-xl mb-2">Web Project Management</h4>
            <ul class="px-10">
              <li class="list-disc">
                <p
                  class="text-gray-700 text-base"
                >Combines creative and technical experiences to manage the entire lifecycle of a website project, from design to delivery.</p>
              </li>
            </ul>
          </div>
          <div class="px-6 py-4">
            <h4 class="font-bold text-xl mb-2">Responsive and JAMStack friendly</h4>
            <ul class="px-10">
              <li class="list-disc">
                <p class="text-gray-700 text-base">
                  Builds fully responsive designs for mobile and desktop that are quick, user-friendly, and enhanced with JavaScript and services available via APIs - check out
                  <a
                    class="text-blue-700 hover:underline"
                    href="https://jamstack.org/"
                  >jamstack.org</a>.
                </p>
              </li>
            </ul>
          </div>
          <div class="px-6 py-4">
            <h4 class="font-bold text-xl mb-2">CSS Animations and Transitions</h4>
            <ul class="px-10">
              <li class="list-disc">
                <p
                  class="text-gray-700 text-base"
                >Integrates clever animations and user interface changes to improve the quality feeling of a website.</p>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <h3 class="text-3xl mb-8 font-heading text-blue-900">Past web examples</h3>
        <div class="mx-auto">
          <div class="text-center max-w-2xl m-auto">
            <DemoList></DemoList>
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
.morph-blue {
  border-radius: 8px;
  background: linear-gradient(145deg, #47a4f1, #3b8acb);
  transition: 700ms ease all;
}

.morph-blue:hover {
  box-shadow: 5px 5px 10px #3b8acb, -5px -5px 10px #49a8f8;
  transition: 700ms ease all;
}

.morph-green {
  border-radius: 8px;
  background: linear-gradient(145deg, #d4ffe4, #b2ddc0);
  transition: 700ms ease all;
}

.morph-green:hover {
  box-shadow: 5px 5px 10px #b2ddc0, -5px -5px 10px #d4ffe4;
  transition: 700ms ease all;
}

.morph-lightblue {
  border-radius: 8px;
  background: linear-gradient(145deg, #cbf3ff, #abccdf);
  transition: 700ms ease all;
}

.morph-lightblue:hover {
  box-shadow: 5px 5px 10px #abccdf, -5px -5px 10px #cbf3ff;
  transition: 700ms ease all;
}
</style>

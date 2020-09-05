<template>
  <Layout showCall="true">
    <div class="content-box" v-html="$page.doc.content"></div>
    <div class="content-box">
      <div class="content-box">
        <h2 id="schedule-a-call">Schedule a call</h2>
        <p>
          I'm happy to set up a
          <a
            href="https://calendly.com/matthewhendricks/quick"
          >20-minute phone or video call</a>
          to help discuss your needs and requirements.
        </p>
        <a href="https://calendly.com/matthewhendricks/quick">
          <g-image class="small" src="../../src/assets/svg/calendar.svg"></g-image>
        </a>
      </div>
      <!-- <vue-calendly
        class=""
        url="https://calendly.com/matthewhendricks"
        :height="600"
      ></vue-calendly>-->
    </div>
    <Author :show-title="true" :show-links="true" />
  </Layout>
</template>

<page-query>

query {
  tags: allTag (sortBy: "title", order: DESC) {
    edges {
      node {
        id
        title
        path
      }
    }
  },
  doc: content(path: "/content/contact/") {
    content
  }
}
</page-query>

<script>
import Vue from "vue";
// import VueCalendly from "vue-calendly";

// Vue.use(VueCalendly);
import Author from "~/components/Author.vue";
import ServiceContent from "~/components/ServiceContent";
import Tags from "~/components/Tags.vue";

export default {
  components: {
    Author,
    Author,
    Tags,
  },
  metaInfo: {
    title: "Contact",
  },

  data() {
    return {
      formData: {},
    };
  },

  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push("/success"))
        .catch((error) => alert(error));
    },
  },
};
</script>

<style scoped>
/* img {
  width: 50%;
  margin: auto;
} */
</style>

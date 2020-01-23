<template>
  <Layout class>
    <div class="text-center m-20 p-20">
      <h1 class="font-bold">Sorry, I don't know where that link went...</h1>
      <font-awesome class="m-10 text-blue-900 w-12" :icon="['fa', 'heart-broken']" />
      <p class="m-10">Here's a list of my technical writing work you can check out instead</p>
      <work-list></work-list>
    </div>
  </Layout>
</template>

<script>
import WorkList from "../components/WorkList.vue";
export default {
  components: {
    WorkList
  }
};
</script>
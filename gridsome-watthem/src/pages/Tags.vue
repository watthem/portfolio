<template>
  <Layout>
    <div v-for="edge in $page.tags.edges" :key="edge.node.id">
      <g-link :to="`/tag/${edge.node.slug}`">{{ edge.node.name }}</g-link>
      <small>&nbsp;({{ edge.node.belongsTo.totalCount}})</small>
    </div>
  </Layout>
</template>

<page-query>
query Tags {
  tags: allGhostTag {
    edges {
      node {
        name
        id
        path
        slug
        belongsTo {
         	totalCount
        }
      }
    }
  }  
}
</page-query>

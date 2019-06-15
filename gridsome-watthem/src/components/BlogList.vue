<template>
  <div class="blog-list" id="articles">
    <ul>
      <li class="card" v-for="edge in $static.ghostPosts.edges" :key="edge.node.id">
        <a :href="edge.node.path">
          <h2>{{ edge.node.title }}</h2>
          <div class="card-image-large"></div>
          <div class="name">
            <ul>
              <li>
                <time>{{ new Date(edge.node.published_at) | dateFormat('MMM, D YYYY')}}</time>
              </li>
              <li>
                <span>{{ edge.node.primary_author.name }}</span> on
                <strong v-if="edge.node.primary_tag">{{ edge.node.primary_tag.name }}</strong> -->
              </li>
            </ul>
          </div>
          <p class="excerpt">{{ edge.node.excerpt }}</p>...
        </a>
      </li>
    </ul>
  </div>
</template>

<static-query>
query Posts {
  ghostPosts: allGhostPost {
    edges {
      node { 
        id
        title
        excerpt      
        path
        published_at
        primary_author {
            name
        }
        primary_tag{ 
            name
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  name: "BlogList"
};
</script>

<style>
a {
  text-decoration: none;
}
.excerpt {
  color: gray;
}
.site-title {
  background: lightblue;
  color: dodgerblue;
}
ul {
  list-style: none;
}
.blog-post {
  padding: 20px;
  background: #fff;
}

.name {
  text-align: left;
}

.card {
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0.33, 0.33, 0.33, 33%);
  padding: 1rem;
  border-bottom: 1px solid gray;

  align-items: center;
  display: flex;
}

.card h2 {
  color: dodgerblue;
}

.card:hover * {
  color: black;
}

.card:hover .card-image {
  opacity: 1;
}

@media (max-width: 960px) {
  .card {
    box-shadow: none;
  }
}

.card-image-large {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.5rem;
  -webkit-clip-path: circle(50% at 50% 35%);
  clip-path: circle(50% at 50% 30%);

  opacity: 0.6;
  overflow: hidden;
  position: relative;

  min-height: 18vh;
  max-width: 40%;
  margin: auto;
  transition: opacity 1s ease;
}
.card-image-large:hover,
.card-image-small:hover {
  transition: opacity 1s ease;
  opacity: 1;
}
</style>
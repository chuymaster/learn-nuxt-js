<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: '1',
              title: "My post 1",
              previewText: "Super amazing, thanks for that!",
              thumbnail:
                "https://www.amd.com/system/files/59364-radeon-vega-1260x709.jpg"
            },
            {
              id: '2',
              title: "My post 2",
              previewText: "Super amazing, thanks for that!",
              thumbnail:
                "https://www.amd.com/system/files/59364-radeon-vega-1260x709.jpg"
            }
          ]
        });
      }, 1000);
    })
      .then(data => {
        return data;
      })
      .catch(e => {
        context.error(e);
      });
  },
  created() {
    this.$store.dispatch("setPosts", this.loadedPosts);
    console.log(this.$store.getters.loadedPosts)
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

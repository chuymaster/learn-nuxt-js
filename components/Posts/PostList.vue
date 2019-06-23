<template>
    <section class="posts-list">
      <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail='https://cdn.wccftech.com/wp-content/uploads/2018/10/Intel-9th-Gen-Core-2-Custom-2060x1317.jpg'
      title="Hello there!"
      previewText="This is my first post!"
      />
      
      <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail='https://www.extremetech.com/wp-content/uploads/2016/11/Intel-Chipset-640x353.jpg'
      title="Hello there!"
      previewText="This is my second post!"
      />
    </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview
  },
  props: {
      isAdmin: {
          type: Boolean,
          default: false
      }
  }
};
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
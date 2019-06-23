<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                author: 'Max',
                title: 'My post',
                content: 'Super amazing, thanks for that!',
                thumbnailLink: 'https://www.amd.com/system/files/59364-radeon-vega-1260x709.jpg'                
            }
        }
    }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>


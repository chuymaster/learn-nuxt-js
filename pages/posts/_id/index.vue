<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title">{{ loadedPost.title }}</h1>
            <div class="post-details">
                <div class="post-detail">
                    Last updated on {{ loadedPost.updatedDate }}
                </div>
                <div class="post-detail">
                    Written by {{ loadedPost.author }}
                </div>
            </div>
            <p class="post-content">{{ loadedPost.content }}</p>
        </section>
        <section class="post-feedback">
            <p>Leave your comment to <a href="mailto:chuymaster3@hotmail.com"></a></p>
        </section>
    </div>
</template>

<script>
export default {
  asyncdata(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '2',
          title: "My post (ID: " + context.route.params.id + ")",
          previewText: "Super amazing, thanks for that!",
          author: 'Maxx',
          updatedDate: new Date(),
          content: 'Super amazing, thanks for that! SUPER GOOD LONG POST!',
          thumbnail:
            "https://www.amd.com/system/files/59364-radeon-vega-1260x709.jpg"
        }
      })
    }, 1000)
  }
}
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>

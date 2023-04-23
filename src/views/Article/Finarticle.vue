<template>
    <!-- 主内容区域 -->
    <el-container>
      <!-- 文章列表 -->
      <el-main>
        <el-card class="article-card">
          <div class="article-title">{{ articles[0].title }}</div>
          <div class="article-info">
            <span class="article-author">作者：{{ articles[0].author }}</span>
            <span class="article-time">发布时间：{{ articles[0].time }}</span>
            <span class="article-source">来源：<a :href="articles[0].url" target="_blank">{{ articles[0].url }}</a></span>

          </div>
          <el-divider></el-divider>
          <div class="article-summary">{{ articles[0].summary }}</div>

        </el-card>
        <div>
          <div class="article-btn">
            <el-button type="primary" @click="toggleIframe">{{ showFull ? '收起全文' : '显示全文' }}</el-button>
          </div>
          <div style="padding-top: 20px; padding-left: 50px; padding-right: 50px;">
            <iframe v-if="showFull" :src="articles[0].url" style="height: 500px; width: 100%;"></iframe>
          </div>
        </div>
      </el-main>

      <!-- 悬浮按钮 -->
      <div class="float-buttons">

        <el-button type="success" icon="el-icon-check" circle class="success-btn" @click="like"></el-button>
        <el-button type="danger" icon="el-icon-close" circle class="danger-btn" @click="dislike"></el-button>
        <el-button type="primary" icon="el-icon-caret-left" circle class="left-btn" @click="getPreArticle"></el-button>
        <el-button type="primary" icon="el-icon-caret-right" circle class="right-btn"></el-button>
      </div>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      showFull: false,
      articles: [
        {
          url: '',
          title: '',
          author: '',
          time: '',
          summary: '',
        }
      ],
    }
  },
  methods: {
    getPreArticle(){
      let aid = {
        id: 1,
      }
      this.$api.article.getArticle(aid)
        .then((res) => {
          this.articles[0].title=res.data.title
          this.articles[0].author=res.data.author
          this.articles[0].time=res.data.data
          this.articles[0].url=res.data.url
          this.articles[0].summary=res.data.content
        })
    },
    like() {
      this.$message({
        message: '点赞成功',
        type: 'success'
      });
    },
    dislike() {
      this.$message({
        message: '不喜欢😢',
        type: 'warning'
      });
    },
    toggleIframe() {
      this.showFull = !this.showFull
    },
  }
}

</script>

<style scoped>
.article-list {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
}

.nav-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}


.article-card {
  margin-top: 20px;
}

.article-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.article-info {
  margin-bottom: 10px;
}

.article-summary {
  margin-bottom: 10px;
}

.article-btn {
  margin-top: 10px;
}

.article-full {
  margin-top: 10px;
}

.article-footer {
  margin-top: 10px;
}

.float-buttons {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

.success-btn {
  display: block;
  margin-bottom: 10px;
  margin-left: 10px;
}

.danger-btn {
  display: block;
  margin-bottom: 10px;
}

.left-btn {
  display: block;
  margin-bottom: 10px;
}

.right-btn {
  display: block;
  margin-bottom: 10px;
}

.article-info span {
  margin-right: 20px;
}

.article-source {
  margin-right: 0;
}

</style>


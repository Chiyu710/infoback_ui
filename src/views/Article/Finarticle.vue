<template>
<!--  开始按钮-->
    <!-- 主内容区域 -->
    <el-container >
      <div>
        <el-button type="primary" @click="startReading" v-show="!ifStart" style="margin-left: 600px;">开始队列</el-button>
      </div>
      <!-- 文章列表 -->
        <el-main v-show="ifStart"  v-loading="loading" :data="ifloding">
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
        <div class="float-buttons" v-show="ifStart">
          <el-button type="success" icon="el-icon-check" circle class="success-btn" @click="like"></el-button>
          <el-button type="primary" icon="el-icon-refresh" circle class="danger-btn" @click="getflush"></el-button>
          <el-button type="primary" icon="el-icon-caret-left" circle class="left-btn" @click="getPreArticle"></el-button>
          <el-button type="primary" icon="el-icon-caret-right" circle class="right-btn" @click="getNextArticle"></el-button>
        </div>
    </el-container>
</template>

<script>
let aid = {id: 1}
let cid=0;
let currentPage = 1;
export default {
  data() {
    return {
      ifStart: false,
      showFull: false,
      ifloding: false,
      ids: [],
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
    setCurrentArticle(){
      aid.id=this.ids[currentPage-1]
      this.$api.article.getArticle(aid)
        .then((res) => {
          this.articles[0].title=res.data.title
          this.articles[0].author=res.data.author
          this.articles[0].time=res.data.data
          this.articles[0].url=res.data.url
          this.articles[0].summary=res.data.content
        })
    },
    startReading(){
      this.ifloding = true;
      this.ids=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
      this.setCurrentArticle()
      this.ifStart = true;
    },
    getPreArticle(){
      if (currentPage === 1){
        this.$message({
          showClose: true,
          message: '已经到头啦'
        });
      }
      else {
        currentPage--
        this.setCurrentArticle()
      }
    },
    getNextArticle(){
      if (currentPage === 15){
        this.$confirm('这个推荐队列已经到头啦，是否刷新？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.flush()
          this.$message({
            type: 'success',
            message: '已为您生成新的文章队列!'
          });
          this.setCurrentArticle()
        });
      }
      else {
        currentPage++
        this.setCurrentArticle()
      }
    },
    like() {
      this.$message({
        message: '点赞成功',
        type: 'success'
      });
    },
    getflush() {
      this.$confirm('是否刷新现有队列？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.flush()
        this.$message({
          type: 'success',
          message: '已为您生成新的文章队列!'
        });
        this.setCurrentArticle()
      });
    },
    flush() {
      currentPage=1
      this.ids.splice(0, this.ids.length);
      this.ids = Array.from({ length: 15 }, (item, index) => index + 16);
      this.setCurrentArticle()
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

/*.center-container {*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  height: 60vh;*/
/*}*/

</style>


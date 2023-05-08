<template>
  <div class="container">
    <el-form :model="queryForm" label-width="80px" class="query-form">
      <el-form-item label="用户检索">
        <el-input v-model="queryForm.condition" placeholder="请输入用户id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search" style="margin-right: 100px;">查询</el-button>
      </el-form-item>
    </el-form>
    <el-divider></el-divider>
    <el-card class="user-info-card">
      <div slot="header" class="user-info-card-header">用户信息列表</div>
      <el-table :data="tableData" class="table">
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="tag" label="标签"></el-table-column>
        <el-table-column prop="time" label="时间"></el-table-column>
      </el-table>
    </el-card>
    <el-divider></el-divider>
    <div class="recommendation">
      <el-button type="primary" @click="showRecommendations">查看推荐</el-button>
      <el-table v-if="showRecommendation" :data="recommendationData" class="table">
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="tag" label="标签"></el-table-column>
        <el-table-column prop="time" label="时间"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryForm: {
        condition: ''
      },
      tableData: [],
      recommendationData: [],
      showRecommendation: false
    }
  },
  methods: {
    search() {
      // 发送查询请求，并更新表格数据
      // 示例代码：
      // axios.get('/api/search', { params: { condition: this.queryForm.condition }})
      //   .then(response => this.tableData = response.data)
      //   .catch(error => console.log(error))
    },
    showRecommendations() {
      // 发送获取推荐数据的请求，并更新推荐表格数据
      // 示例代码：
      // axios.get('/api/recommendations')
      //   .then(response => {
      //     this.recommendationData = response.data
      //     this.showRecommendation = true
      //   })
      //   .catch(error => console.log(error))
    }
  }
}
</script>

<style>
.container {
  margin: 20px;
}
.query-form {
  margin-bottom: 20px;
}
.table {
  margin-bottom: 20px;
}
.recommendation {
  text-align: center;
}
.user-info-card {
  width: 100%;
}
.user-info-card-header {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
</style>

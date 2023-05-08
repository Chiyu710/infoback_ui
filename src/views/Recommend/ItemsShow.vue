<template>
  <div class="container">
    <el-card class="item-card">
      <div slot="header" class="item-header">
        <span class="item-title">{{ item.title }}</span>
        <el-tag>{{ item.category }}</el-tag>
      </div>
      <div class="item-content">
        <div class="item-image">
          <img :src="item.image" />
        </div>
        <div class="item-info">
          <p><b>物品ID：</b>{{ item.item_id }}</p>
          <p><b>创建时间：</b>{{ item.create_time }}</p>
          <p><b>更新时间：</b>{{ item.update_time }}</p>
        </div>
      </div>
      <div class="item-desc">
        <p><b>描述：</b></p>
        <p>{{ item.description }}</p>
      </div>
      <div class="item-properties">
        <p><b>属性：</b></p>
        <el-tag v-for="(value, key) in item.properties" :key="key">{{ key }}: {{ value }}</el-tag>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        title: '商品标题',
        category: '商品类别',
        image: 'https://gorse.io/assets/homepage-hero-bg-61062ebf.png',
        item_id: '00001',
        create_time: '2022-01-01',
        update_time: '2022-01-02',
        description: '商品描述',
        properties: {
          '属性1': '属性值1',
          '属性2': '属性值2',
          '属性3': '属性值3',
        }
      }
    }
  }
}
</script>

<style>
.container {
  margin: 20px;
}
.item-card {
  max-width: 800px;
  margin: 0 auto;
}
.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-title {
  font-size: 24px;
  font-weight: bold;
}
.item-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.item-image {
  width: 50%;
  margin-bottom: 20px;
}
.item-image img {
  width: 100%;
}
.item-info {
  width: 45%;
  margin-left: 5%;
  font-size: 16px;
  line-height: 1.8;
}
.item-desc {
  margin-top: 20px;
  font-size: 16px;
  line-height: 1.8;
}
.item-desc p {
  margin-bottom: 10px;
}
.item-properties {
  margin-top: 20px;
}
.item-properties p {
  margin-bottom: 10px;
}
</style>

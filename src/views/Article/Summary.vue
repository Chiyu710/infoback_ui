<template>
  <div>
    <el-form>
      <el-input
        type="textarea"
        autosize
        placeholder="请输入原文本"
        v-model="raw_content">

      </el-input>


      <el-button type="primary" @click="summary">生成摘要</el-button>

      <el-input
        type="textarea"
        autosize
        v-model="outputText">
      </el-input>
    </el-form>


  </div>
</template>

<script>
import PopupTreeInput from "@/components/PopupTreeInput"
import KtTable from "@/views/Core/KtTable"
import KtButton from "@/views/Core/KtButton"
import TableColumnFilterDialog from "@/views/Core/TableColumnFilterDialog"
import { format } from "@/utils/datetime"

export default {
  name: "Particle",
  data() {
    return {
      raw_content:this.raw_content,
     outputText:""
    }
  },
  methods: {
    summary() {
      let raw_content = {
        content: this.raw_content,
        url:""
      }
      this.$api.article.summary(raw_content)
        .then((res) => {
          this.outputText = res.msg
        })
    }
  }


}
</script>

<style scoped>

</style>

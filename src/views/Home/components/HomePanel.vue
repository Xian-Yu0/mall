<script setup>
// 可以封装组件，并为组件定制属性，供下面引用
defineProps({
    title: {type: String, default: ''},
    subtitle: {type: String, default: ''}
})
</script>


<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
         <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small>{{ subtitle }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <div> 
        <slot></slot> <!-- 封装好的标签内的子标签放在这。需要使用多个插槽时，可以使用具名插槽 -->
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>
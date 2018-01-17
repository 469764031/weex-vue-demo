<template>
    <div>
        <h1>详情</h1>
        <p>{{ $route.params.id }}</p>
        <div>
            <text style="text-align: center;" @click="jump('/main')">首页</text>
        </div>

    </div>
</template>
<script>
  export default{
    props:{
      id: ''
    }
  }
</script>
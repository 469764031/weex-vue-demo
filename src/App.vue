<template>
    <div class='container'>
    <!-- 导航区 -->
    <div class="panel">
        <text class="link" @click='linkTo("/login")'>login</text>
        <text class="link" @click='linkTo("/main")'>main</text>
    </div>

    <!--  视图区 -->
    <router-view></router-view>
    </div>
</template>
<script>
    export default{
      methods:{
        linkTo(path){
          this.$router.push(path);
        }
      }
    }
</script>
<style>
    .container {
        background-color:#f4f4f4;
    }
    .panel {
        flex-direction: row;
        height: 100px;
        border-bottom-width: 1px;
        justify-content: space-between;
    }
    .link{
        line-height: 100px;
        text-align: center;
        flex: 1
    }
</style>
<template>
    <div class='container'>
        <!-- 导航区 -->
        <div class="panel">
            <text class="link" @click='jump("/main")'>主页</text>
            <text class="link" @click='jump("/my")'>我的</text>
        </div>
        <h1>我的</h1>
        <div>
            <text class="link" @click='jump("/login")'>登录</text>
        </div>
    </div>
</template>
<script>
  export default{
    data(){
      return {
        name: "我的"
      }
    }
  }
</script>
<style>
    .link {
        line-height: 100px;
        text-align: center;
        flex: 1
    }
    .container {
        background-color: #f4f4f4;
    }

    .panel {
        flex-direction: row;
        height: 100px;
        border-bottom-width: 1px;
        justify-content: space-between;
    }

    .link {
        line-height: 100px;
        text-align: center;
        flex: 1
    }
</style>
<template>
    <div class='container'>
        <!-- 导航区 -->
        <div class="panel">
            <text class="link" @click='jump("/main")'>主页</text>
            <text class="link" @click='jump("/my")'>我的</text>
        </div>
        <h1>查询条件</h1>
        <ol>
            <li v-for="data in listData" @click="toDetail(data.id)">
                {{ data.text }}
            </li>
        </ol>
    </div>
</template>
<script>
  import bundleUrl from "../../components/urlpath";
  export default{
    data(){
      return {
        listData: [
          {id: 1, text: '列表项展示一'},
          {id: 2, text: '列表项展示二'},
          {id: 3, text: '列表项展示三'}
        ]
      }
    },
    methods: {
      toDetail: function (id) {
        //alert(id);
        this.jump('/detail/' + id)
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
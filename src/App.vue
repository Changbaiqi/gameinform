<script setup lang="ts">
import GameInform from "./components/GameInform.vue";
</script>

<template>
  <div id="inform">
    <GameInform></GameInform>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#inform{
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 5vh;
  height: 80vh;
  background-color: #272727;
  border-radius: 15px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  padding: 30px;
  animation: ani 1s;
  overflow-y: auto; /* 内容超出垂直滚动 */
  overflow-x: hidden; /* 水平隐藏，避免水平滚动 */
  word-wrap: break-word; /* 单词太长自动换行 */
}
@keyframes ani {
  0% {
    transform: translate3d(-100px, -100px,-20px);
    opacity: 0;
  }
  100% {
    transform: translate3d(0px, 0px,0px);
    top: 100%;
    opacity: 1;
  }
}
/* 容器类名可按需更换 */
#inform {
  overflow: auto;
}

/* WebKit 浏览器（Chrome、Edge、Safari）自定义滚动条 */
#inform::-webkit-scrollbar {
  width: 4px;       /* 设置滚动条宽度 */
  height: 6px;      /* 横向滚动条高度 */
}

#inform::-webkit-scrollbar-track {
  background: transparent;     /* 滚动条轨道背景 */
}

#inform::-webkit-scrollbar-thumb {
  background-color: rgba(214, 214, 214, 0.3);  /* 滚动条颜色 */
  border-radius: 10px;                  /* 圆角 */
}

/* 鼠标悬停滚动条时的样式 */
#inform::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

</style>

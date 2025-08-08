<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6 flex flex-col items-center">
    <motion-div
        :initial="{ opacity: 0, y: 50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
        class="w-full max-w-3xl"
    >
      <div class="shadow-2xl rounded-2xl backdrop-blur-sm bg-white/80 hover:scale-[1.02] transition-transform">
        <div class="p-6 prose prose-blue max-w-none" v-html="renderedMarkdown"></div>
      </div>
    </motion-div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { marked } from 'marked'
// import { MotionPlugin } from '@vueuse/motion'


const markdown = ref<string>('')
const renderedMarkdown = ref<string>('')

onMounted(async () => {
  try {
    const res = await fetch('notice.md')
    markdown.value = await res.text()
    // renderedMarkdown.value = marked.parse(markdown.value)
    renderedMarkdown.value =await marked.parse(markdown.value) // ✅ 同步

  } catch (error) {
    console.error('加载 Markdown 出错：', error)
  }
})
</script>

<style scoped>
.prose {
  font-family: 'Helvetica Neue', sans-serif;
}
</style>

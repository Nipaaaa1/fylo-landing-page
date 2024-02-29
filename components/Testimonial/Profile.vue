<script setup lang="ts">
defineProps({
  avatarImage: { type: String, required: true },
  avatarAlt: { type: String, required: true },
  name: { type: String, required: true },
  occupation: { type: String, required: true },
});
</script>

<template>
  <div class="flex items-center gap-4">
    <NuxtImg class="size-10 rounded-full" :src="avatarImage" :alt="avatarAlt" />
    <div>
      <h3 class="font-bold">{{ name }}</h3>
      <p class="text-xs opacity-80">{{ occupation }}</p>
    </div>
  </div>
</template>

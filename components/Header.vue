<template>
  <header
    class="relative flex w-full flex-col items-center gap-8 bg-primary-intro-dark-blue p-8 text-center text-white"
  >
    <NuxtImg
      fetchpriority="high"
      preload
      class="min-h-max w-full"
      src="/illustration-intro.png"
      alt="People carrying document into file illustration."
    />
    <h1
      class="text-center font-raleway text-[1.6rem] font-bold leading-relaxed tracking-wide text-white"
    >
      All your files in one secure location, accessible anywhere.
    </h1>
    <p class="font-open-sans">
      Fylo stores all your most important files in one secure location. Access
      them wherever you need, share and collaborate with friends family, and
      co-workers.
    </p>
    <button
      class="w-max rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue px-20 py-4 font-open-sans font-bold"
      type="button"
    >
      Get Started
    </button>
  </header>
</template>

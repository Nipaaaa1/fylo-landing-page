<template>
  <header
    class="relative w-full bg-primary-intro-dark-blue pt-20 text-white md:py-28"
  >
    <div class="container mx-auto flex flex-col items-center gap-8 text-center">
      <NuxtImg
        class="absolute bottom-0 w-full md:hidden"
        src="/images/bg-curvy-mobile.svg"
        alt=""
      />
      <NuxtImg
        class="absolute bottom-0 hidden w-full md:block"
        src="/images/bg-curvy-desktop.svg"
        alt=""
      />
      <NuxtImg
        fetchpriority="high"
        preload
        class="relative min-h-max w-full p-8 md:max-w-3xl"
        src="/images/illustration-intro.png"
        alt="People carrying document into file illustration."
      />
      <div class="mt-12p-8 relative md:max-w-6xl md:bg-transparent">
        <div class="flex -translate-y-24 flex-col items-center gap-8">
          <h1
            class="text-center font-raleway text-[1.6rem] font-bold leading-relaxed tracking-wide text-white md:text-5xl md:leading-snug"
          >
            All your files in one secure location, accessible anywhere.
          </h1>
          <p class="max-w-2xl font-open-sans md:text-lg">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button
            class="w-max rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue px-20 py-4 font-open-sans font-bold"
            type="button"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

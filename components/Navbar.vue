<template>
  <nav class="fixed z-10 w-full bg-primary-intro-dark-blue">
    <div
      class="container mx-auto flex items-center justify-between p-6 md:p-10"
    >
      <NuxtImg class="h-8 w-max md:h-12" src="/images/logo.svg" alt="Logo." />
      <ul
        class="flex gap-6 font-raleway text-sm tracking-wide text-white/80 *:cursor-pointer"
      >
        <li class="transition ease-in-out hover:text-white">Features</li>
        <li class="transition ease-in-out hover:text-white">Team</li>
        <li class="transition ease-in-out hover:text-white">Sign In</li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
useHead({
  title: "Fylo Landing Page",
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      name: "description",
      content:
        "Fylo is a File Sharing Services that let's you access your file from anywhere.",
    },
  ],
});
</script>

<template>
  <Navbar />
  <main>
    <Header />
    <MainSection>
      <ul
        class="flex w-full flex-col place-items-center gap-24 md:grid md:grid-cols-2 md:gap-40"
      >
        <FeatureCard>
          <FeatureImage src="/images/icon-access-anywhere.svg" alt="" />
          <FeatureTitle>Access your files, anywhere</FeatureTitle>
          <FeatureDescription>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureImage src="/images/icon-security.svg" alt="" />
          <FeatureTitle>Security you can trust</FeatureTitle>
          <FeatureDescription>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureImage src="/images/icon-collaboration.svg" alt="" />
          <FeatureTitle>Real-time collaboration</FeatureTitle>
          <FeatureDescription>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureImage src="/images/icon-any-file.svg" alt="" />
          <FeatureTitle>Store any type of file</FeatureTitle>
          <FeatureDescription>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </FeatureDescription>
        </FeatureCard>
      </ul>
    </MainSection>
    <MainSection class="gap-4 text-white md:py-40">
      <NuxtImg
        loading="lazy"
        class="mb-8 h-max w-full md:max-w-3xl"
        src="/images/illustration-stay-productive.png"
        alt="People's holding chat messages illustration"
      />
      <div class="flex flex-col gap-4 md:ml-20 md:max-w-lg">
        <h2
          class="self-start text-balance font-raleway text-xl font-bold tracking-wide md:text-5xl"
        >
          Stay productive, wherever you are
        </h2>
        <p class="font-open-sans">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p class="font-open-sans">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <button
          class="flex items-center gap-2 self-start border-b border-accent-cyan py-1 font-open-sans text-accent-cyan"
        >
          See how Fylo works
          <NuxtImg class="h-4 w-max" src="/images/icon-arrow.svg" alt="" />
        </button>
      </div>
    </MainSection>
    <MainSection class="px-14 pb-96 pt-28">
      <NuxtImg
        class="h-8 w-max translate-x-2 self-start md:h-14 md:-translate-y-10 md:translate-x-10"
        src="/images/bg-quotes.png"
        alt=""
      />
      <ul class="relative flex flex-col gap-10 md:flex-row">
        <TestimonialCard>
          <TestimonialQuote>
            Fylo has Improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </TestimonialQuote>
          <TestimonialProfile
            avatarImage="/images/profile-1.jpg"
            avatarAlt="Satish Patel's"
            name="Satish Patel"
            occupation="Founder & CEO, Huddle"
          />
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialQuote>
            Fylo has Improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </TestimonialQuote>
          <TestimonialProfile
            avatarImage="/images/profile-2.jpg"
            avatarAlt="Bruce McKenzie's"
            name="Bruce McKenzie"
            occupation="Founder & CEO, Huddle"
          />
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialQuote>
            Fylo has Improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </TestimonialQuote>
          <TestimonialProfile
            avatarImage="/images/profile-3.jpg"
            avatarAlt="Iva Boyd's"
            name="Iva Boyd"
            occupation="Founder & CEO, Huddle"
          />
        </TestimonialCard>
      </ul>
    </MainSection>
    <footer class="w-full bg-primary-footer-dark-blue">
      <div class="container mx-auto px-6 py-12 pt-0 text-white">
        <div
          class="flex w-full -translate-y-[10rem] flex-col items-center gap-4 rounded-lg bg-primary-main-dark-blue px-7 py-10 shadow-[1px_2px_14px_3px_rgba(0,0,0,0.3)] md:mx-auto md:max-w-4xl md:px-20"
        >
          <h2 class="font-raleway text-lg font-bold tracking-wider md:text-3xl">
            Get early access today
          </h2>
          <p class="text-center font-open-sans">
            It only takes a minute to sign up and our free tier is extremely
            generous. If you have any questions, our support team would be happy
            to help you.
          </p>
          <form class="flex w-full flex-col gap-4 md:flex-row">
            <input
              class="w-full rounded-full py-4 pl-4 placeholder:pl-4 placeholder:text-xs"
              type="email"
              name="email"
              placeholder="email@example.com"
            />
            <button
              class="rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue py-2 md:min-w-64"
              type="submit"
            >
              Get Started For Free
            </button>
          </form>
        </div>
        <div class="md:flex">
          <div class="-mt-14 flex flex-col gap-6 md:max-w-6xl">
            <NuxtImg class="h-14 w-max" src="/images/logo.svg" alt="" />
            <ul
              class="flex flex-col gap-4 p-6 *:pl-3 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-2 md:gap-x-28"
            >
              <li
                class="list-image-[url(/images/icon-location.svg)] md:row-span-2"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem possimus molestiae quas sequi voluptatum repellendus
                ipsa, minus corporis cupiditate!
              </li>
              <li class="list-image-[url(/images/icon-phone.svg)]">
                +1-543-123-4567
              </li>
              <li class="list-image-[url(/images/icon-email.svg)]">
                example@fylo.com
              </li>
            </ul>
          </div>
          <div
            class="flex flex-col gap-12 pt-14 font-open-sans md:flex-row md:gap-x-40 md:pt-0"
          >
            <ul class="flex flex-col gap-4 text-lg text-white/80">
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
            <ul class="flex flex-col gap-4 text-lg text-white/80">
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
            <ul class="flex gap-4 self-center pt-10 md:self-start md:pt-0">
              <li>
                <IconsFacebook class="h-8 w-max rounded-full border p-1.5" />
              </li>
              <li>
                <IconsTwitter class="h-8 w-max rounded-full border p-1.5" />
              </li>
              <li>
                <IconsInstagram class="h-8 w-max rounded-full border p-1.5" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

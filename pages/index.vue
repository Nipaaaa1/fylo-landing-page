<template>
    <Navbar />
    <main>
        <Header />
        <MainSection>
            <ul class="flex flex-col gap-24">
                <FeaturesCard>
                    <FeaturesImage src="/icon-access-anywhere.svg" alt="" />
                    <FeaturesTitle>Access your files, anywhere</FeaturesTitle>
                    <FeaturesDescription>
                        The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere
                    </FeaturesDescription>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesImage src="/icon-security.svg" alt="" />
                    <FeaturesTitle>Security you can trust</FeaturesTitle>
                    <FeaturesDescription>
                        2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.
                    </FeaturesDescription>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesImage src="/icon-collaboration.svg" alt="" />
                    <FeaturesTitle>Real-time collaboration</FeaturesTitle>
                    <FeaturesDescription>
                        Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                    </FeaturesDescription>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesImage src="/icon-any-file.svg" alt="" />
                    <FeaturesTitle>Store any type of file</FeaturesTitle>
                    <FeaturesDescription>
                        Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
                    </FeaturesDescription>
                </FeaturesCard>
            </ul>
        </MainSection>
        <MainSection class="text-white gap-4">
            <NuxtImg class="mb-8" src="/illustration-stay-productive.png" alt="People's holding chat messages illustration" />
            <h2 class="font-raleway font-bold self-start text-xl tracking-wide">Stay productive, wherever you are</h2>
            <p class="font-open-sans">
                Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
            </p>
            <p class="font-open-sans">
                Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
            </p>
            <button class="font-open-sans self-start text-accent-cyan flex gap-2 items-center border-b border-accent-cyan py-1">
                See how Fylo works
                <NuxtImg src="/icon-arrow.svg" alt="" />
            </button>
        </MainSection>
    </main>
</template>
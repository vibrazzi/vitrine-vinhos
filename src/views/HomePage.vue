<template>
    <div class="min-h-screen">
        <Suspense>
            <template #default>
                <div class="font-playfair">
                    <NavBar isHome="true"/>
                    <HeroSection />
                    <Collection />
                    <ExclusiveSection />
                    <ContactSection />
                    <Footer />
                    <BackToTop />
                </div>
            </template>
            <template #fallback>
                <div class="flex justify-center items-center min-h-screen">
                    <LoadingSpinner />
                </div>
            </template>
        </Suspense>
    </div>
</template>
<script setup>
import { defineAsyncComponent } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

// Lazy loading dos componentes
const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
const HeroSection = defineAsyncComponent(() => import("@/components/HeroSection.vue"));
const Collection = defineAsyncComponent(() => import("@/components/Collection.vue"));
const ExclusiveSection = defineAsyncComponent(() => import("@/components/ExclusiveSection.vue"));
const ContactSection = defineAsyncComponent(() => import("@/components/ContactSection.vue"));
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));
const BackToTop = defineAsyncComponent(() => import("@/components/BackToTop.vue"));
</script>
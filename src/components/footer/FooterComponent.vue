<script setup >
import ContactFormComponent from "../footer/contact-form/ContactFormComponent.vue";
import FooterNavComponent from "@/components/footer/footer-navigation/FooterNavComponent";
import FooterCopyComponent from "@/components/footer/FooterCopyComponent.vue";
</script>

<template>
  <div class="footer bg-c101 w-full relative">
    <div class="container mx-auto">
      <div
        class="bg-c100 rounded-[1.25rem] container h-[11.25rem] flex items-center justify-center absolute top-[-5rem]"
      >
        <ContactFormComponent />
      </div>
      <FooterNavComponent />
      <FooterCopyComponent />
    </div>
  </div>
</template>
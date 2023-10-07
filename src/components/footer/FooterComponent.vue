<script setup >
import ContactFormComponent from "../footer/contact-form/ContactFormComponent.vue";
import FooterNavComponent from "@/components/footer/footer-navigation/FooterNavComponent";
</script>

<template>
  <div class="footer bg-c101 w-full">
    <div class="container mx-auto">
      <div
        class="bg-c100 rounded-[1.25rem] h-[11.25rem] flex items-center justify-center"
      >
        <ContactFormComponent />
      </div>
      <FooterNavComponent />
    </div>
  </div>
</template>
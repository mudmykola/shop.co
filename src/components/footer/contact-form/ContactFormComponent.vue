<script setup>
import content from "@/data/content.json";
import ContactFormInputComponent from "@/components/footer/contact-form/ContactFormInputComponent.vue";
</script>

<template>
  <div class="contact-form grid grid-cols-2 text-center text-default">
    <h2
      class="text-[2.5rem] leading-[2.813rem] font-bold text-left w-[34.438rem]"
    >
      {{ content.footer.contactFormTitle }}
    </h2>
    <ContactFormInputComponent />
  </div>
</template>

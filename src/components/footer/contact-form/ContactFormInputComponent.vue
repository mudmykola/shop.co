<script setup>
import content from "@/data/content.json";
import { ref } from "vue";

const emailData = ref({
  to: "",
});

const sendEmail = () => {
  const email = emailData.value.to.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    console.error("Неправильний формат електронної пошти");
    return;
  }

  console.log("Відправлення листа:", email);
  emailData.value.to = "";
};
</script>

<template>
  <div class="w-[21.813rem] ml-[13.25rem]">
    <form class="grid grid-cols-1 gap-[0.875rem]" @submit.prevent="sendEmail">
      <div
        class="input-container bg-default rounded-[3.875rem] h-[3rem] flex items-center pl-[1.25rem]"
      >
        <font-awesome-icon
          class="text-[1.25rem]"
          :icon="['fa', 'envelope']"
          style="color: #b4b4b4"
        />
        <input
          class="border-none outline-none w-full text-c100 rounded-[3.875rem] h-[3rem] pl-[0.75rem]"
          v-model="emailData.to"
          type="email"
          id="to"
          required
          placeholder="Enter your email address"
        />
      </div>

      <button
        class="bg-default w-full rounded-[3.875rem] h-[3rem] text-c100"
        type="submit"
      >
        {{ content.footer.contactFormSend }}
      </button>
    </form>
  </div>
</template>

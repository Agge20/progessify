<script setup>
const supabase = useSupabaseClient();

const countries = ref([]);

async function getCountries() {
  const { data } = await supabase.from("countries").select();
  countries.value = data;
}

onMounted(() => {
  getCountries();
});
</script>

<template>
  <NuxtLayout>
    <UButton
      :onclick="() => console.log('Hello world')"
      size="lg"
      icon="i-heroicons-face-smile"
      color="lime"
      variant="solid"
      >Button</UButton
    >
  </NuxtLayout>
</template>

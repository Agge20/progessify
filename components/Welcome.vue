<template>
  <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
      <h1
        class="animate-fade-right mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Welcome back August.
      </h1>
      <p
        class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
      >
        Here you can view your progress, start a new set, or view your past sets.
      </p>
      <div
        class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
      >
        <div class="flex gap-x-4 flex-col sm:flex-row">
          <UButton
            label="Start a new set"
            size="xl"
            icon="i-heroicons-plus-circle-16-solid"
            color="highlight"
            variant="solid"
            to="/sets/new"
          />
          <UButton
            label="View my progress"
            size="xl"
            icon="i-heroicons-arrow-right-16-solid"
            color="white"
            variant="solid"
            to="/sets/new"
            :trailing="true"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>

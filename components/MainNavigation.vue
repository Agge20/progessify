<template>
  <nav
    class="fixed w-full border-b-2 border-theme-dark-100 bg-white backdrop-blur-sm isolate"
  >
    <div class="max-w-6xl mx-auto bg-secondary-100">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-8"
      >
        <NuxtLink to="/">
          <Logo size="medium" variant="dark" />
        </NuxtLink>

        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <NuxtLink
              to="/"
              class="block py-2 px-3 text-theme-secondary-100 hover:text-theme-secondary/80 focus-visible:outline-2 focus-visible:outline-secondary-100/60"
            >
              Start
            </NuxtLink>

            <NuxtLink
              to="/progress"
              class="block py-2 px-3 text-theme-secondary-100 hover:text-theme-secondary/80 focus-visible:outline-2 focus-visible:outline-secondary-100/60"
            >
              My progress
            </NuxtLink>

            <UButton
              label="New set"
              size="lg"
              icon="i-heroicons-plus-circle-16-solid"
              color="highlight"
              variant="solid"
              to="/sets/new"
            />
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>

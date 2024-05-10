<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-secondary-100 hover:text-secondary/80 focus-visible:outline-2 focus-visible:outline-secondary-100/60"
              aria-current="page"
              >Home</a
            >
          </li>

          <UButton
            label="Nytt set"
            size="lg"
            icon="i-heroicons-plus-circle-16-solid"
            color="lime"
            variant="solid"
            to="/sets/new"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>

<template>
  <div class="judge">
    <h1>Judge</h1>
    <li>
      <router-link
        :to="{
          name: 'JudgeCheckin',
          params: {
            uniqueId: '0000',
          },
        }"
      >
        0000
      </router-link>
    </li>
    <li>
      <router-link
        :to="{
          name: 'JudgeCheckin',
          params: {
            uniqueId: '0001',
          },
        }"
      >
        0001
      </router-link>
    </li>
    <li>
      <router-link
        :to="{
          name: 'JudgeCheckin',
          params: {
            uniqueId: '0002',
          },
        }"
      >
        0002
      </router-link>
    </li>
  </div>
</template>

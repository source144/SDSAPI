<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <li>
      <router-link
        :to="{
          name: 'DayAdminHome',
          params: { eventName: $route.params.eventName, dayIndex: 0 },
        }"
      >
        Day 0
      </router-link>
    </li>
    <li>
      <router-link
        :to="{
          name: 'DayAdminHome',
          params: { eventName: $route.params.eventName, dayIndex: 1 },
        }"
      >
        Day 1
      </router-link>
    </li>
    <li>
      <router-link
        :to="{
          name: 'DayAdminHome',
          params: { eventName: $route.params.eventName, dayIndex: 2 },
        }"
      >
        Day 2
      </router-link>
    </li>
  </div>
</template>

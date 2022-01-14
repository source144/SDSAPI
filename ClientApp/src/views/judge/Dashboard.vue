<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <h3>
      <router-link
        :to="{
          name: 'JudgeNotifs',
          params: {
            uniqueId: $route.params.uniqueId,
          },
        }"
      >
        Notifications
      </router-link>
    </h3>
    <li>
      <router-link
        :to="{
          name: 'JudgeBallot',
          params: {
            uniqueId: $route.params.uniqueId,
            ballotId: '9999',
          },
        }"
      >
        9999
      </router-link>
    </li>
    <li>
      <router-link
        :to="{
          name: 'JudgeBallot',
          params: {
            uniqueId: $route.params.uniqueId,
            ballotId: '9998',
          },
        }"
      >
        9998
      </router-link>
    </li>
    <li>
      <router-link
        :to="{
          name: 'JudgeBallot',
          params: {
            uniqueId: $route.params.uniqueId,
            ballotId: '9997',
          },
        }"
      >
        9997
      </router-link>
    </li>
  </div>
</template>

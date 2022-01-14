<template>
  <div class="checkin">
    <h1>Checkin</h1>
    <h2>Judge {{ $route.params.uniqueId }}</h2>
    <h3>
      <router-link
        :to="{
          name: 'JudgeDashboard',
          params: {
            uniqueId: $route.params.uniqueId,
          },
        }"
      >
        Go to Dashboard
      </router-link>
    </h3>
  </div>
</template>

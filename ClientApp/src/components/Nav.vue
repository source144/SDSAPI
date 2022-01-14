<template>
  <div class="Nav">
    <div v-if="$route.meta.dir == 'Main'">
      <h1>{{ $route.meta.dir }}</h1>
      <router-link to="/"> Home </router-link> |
      <router-link to="/results"> Results </router-link> |
      <router-link to="/judge"> Judge </router-link> |
      <router-link to="/login"> Login </router-link>
    </div>
    <div v-else-if="$route.meta.dir == 'MainAdmin'">
      <h1>{{ $route.meta.dir }}</h1>
      <router-link to="/admin"> Dashboard </router-link> |
      <router-link to="/admin/post_results"> Post Results </router-link> |
      <router-link to="/admin/settings"> Settings </router-link>
    </div>
    <div v-else-if="$route.meta.dir == 'EventAdmin'">
      <h1>{{ $route.meta.dir }}</h1>
      <h2>{{ $route.params.eventName }}</h2>
      <router-link
        :to="{
          name: 'EventAdminDashboard',
          params: { eventName: $route.params.eventName },
        }"
      >
        Dashboard
      </router-link>
      |
      <router-link
        :to="{
          name: 'EventAdminJudges',
          params: { eventName: $route.params.eventName },
        }"
      >
        Judges
      </router-link>
      |
      <router-link
        :to="{
          name: 'EventAdminSettings',
          params: { eventName: $route.params.eventName },
        }"
      >
        Settings
      </router-link>
    </div>
    <div v-else-if="$route.meta.dir == 'DayAdmin'">
      <h1>{{ $route.meta.dir }}</h1>
      <h2>{{ $route.params.eventName }} Day {{ $route.params.dayIndex }}</h2>
      <router-link
        :to="{
          name: 'DayAdminHome',
          params: {
            eventName: $route.params.eventName,
            dayIndex: $route.params.dayIndex,
          },
        }"
      >
        Home
      </router-link>
      |
      <router-link
        :to="{
          name: 'DayAdminJudges',
          params: {
            eventName: $route.params.eventName,
            dayIndex: $route.params.dayIndex,
          },
        }"
      >
        Judges
      </router-link>
      |
      <router-link
        :to="{
          name: 'DayAdminResults',
          params: {
            eventName: $route.params.eventName,
            dayIndex: $route.params.dayIndex,
          },
        }"
      >
        Results
      </router-link>
    </div>
    <div v-else-if="$route.meta.dir == 'Instructor'">
      <h1>{{ $route.meta.dir }}</h1>
      <router-link to="/instructor"> Dashboard </router-link> |
      <router-link to="/instructor/settings"> Settings </router-link>
    </div>
    <div v-else-if="$route.meta.dir == 'Judge'">
      <h1>{{ $route.meta.dir }}</h1>
      <h2>Judge {{ $route.params.uniqueId }}</h2>
      <router-link
        :to="{
          name: 'JudgeDashboard',
          params: {
            uniqueId: $route.params.uniqueId,
          },
        }"
      >
        Dashboard
      </router-link>
      |
      <router-link
        :to="{
          name: 'JudgeProjects',
          params: {
            uniqueId: $route.params.uniqueId,
          },
        }"
      >
        Projects
      </router-link>
      |
      <router-link
        :to="{
          name: 'JudgeRules',
          params: {
            uniqueId: $route.params.uniqueId,
          },
        }"
      >
        Rules
      </router-link>
      |
      <router-link
        :to="{
          name: 'JudgeSettings',
          params: {
            uniqueId: $route.params.uniqueId,
          },
        }"
      >
        Settings
      </router-link>
    </div>
    <div v-else-if="$route.meta.dir == 'None'">
      <button type="back" @click="$router.go(-1)">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style></style>

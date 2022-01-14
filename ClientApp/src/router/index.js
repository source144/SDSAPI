import { createRouter, createWebHistory } from "vue-router";
// test
// Main Nav
import MainHome from "../views/main/Home.vue";
import MainResults from "../views/main/Results.vue";
import MainJudge from "../views/main/Judge.vue";
import MainLogin from "../views/main/Login.vue";

// Main Admin Nav
import MainAdminDashboard from "../views/admin/main/Dashboard.vue";
import MainAdminPostResults from "../views/admin/main/PostResults.vue";
import MainAdminSettings from "../views/admin/main/Settings.vue";

// Event Admin Nav
import EventAdminDashboard from "../views/admin/event/Dashboard.vue";
import EventAdminJudges from "../views/admin/event/Judges.vue";
import EventAdminSettings from "../views/admin/event/Settings.vue";

// Day Admin Nav
import DayAdminHome from "../views/admin/day/Home.vue";
import DayAdminJudges from "../views/admin/day/Judges.vue";
import DayAdminResults from "../views/admin/day/Results.vue";

// Instructor Nav
import InstructorDashboard from "../views/instructor/Dashboard.vue";
import InstructorSettings from "../views/instructor/Settings.vue";

// Judge Nav
import JudgeCheckin from "../views/judge/Checkin.vue";
import JudgeDashboard from "../views/judge/Dashboard.vue";
import JudgeProjects from "../views/judge/Projects.vue";
import JudgeRules from "../views/judge/Rules.vue";
import JudgeSettings from "../views/judge/Settings.vue";
import JudgeBallot from "../views/judge/Ballot.vue";
import JudgeNotifs from "../views/judge/Notifs.vue";

const MainDir = "Main";

const MainAdminDir = "MainAdmin";
const EventAdminDir = "EventAdmin";
const DayAdminDir = "DayAdmin";

const InstructorDir = "Instructor";

const JudgeDir = "Judge";

const None = "None";

const routes = [
  {
    path: "/",
    name: "MainHome",
    component: MainHome,
    meta: {
      dir: MainDir,
    },
  },
  {
    path: "/results",
    name: "MainResults",
    component: MainResults,
    meta: {
      dir: MainDir,
    },
  },
  {
    path: "/judge",
    name: "MainJudge",
    component: MainJudge,
    meta: {
      dir: MainDir,
    },
  },
  {
    path: "/login",
    name: "MainLogin",
    component: MainLogin,
    meta: {
      dir: MainDir,
    },
  },
  {
    path: "/admin",
    name: "MainAdminDashboard",
    component: MainAdminDashboard,
    meta: {
      dir: MainAdminDir,
    },
  },
  {
    path: "/admin/post_results",
    name: "MainAdminPostResults",
    component: MainAdminPostResults,
    meta: {
      dir: MainAdminDir,
    },
  },
  {
    path: "/admin/settings",
    name: "MainAdminSettings",
    component: MainAdminSettings,
    meta: {
      dir: MainAdminDir,
    },
  },
  {
    path: "/admin/:eventName",
    name: "EventAdminDashboard",
    component: EventAdminDashboard,
    meta: {
      dir: EventAdminDir,
    },
  },
  {
    path: "/admin/:eventName/judges",
    name: "EventAdminJudges",
    component: EventAdminJudges,
    meta: {
      dir: EventAdminDir,
    },
  },
  {
    path: "/admin/:eventName/settings",
    name: "EventAdminSettings",
    component: EventAdminSettings,
    meta: {
      dir: EventAdminDir,
    },
  },
  {
    path: "/admin/:eventName/:dayIndex",
    name: "DayAdminHome",
    component: DayAdminHome,
    meta: {
      dir: DayAdminDir,
    },
  },
  {
    path: "/admin/:eventName/:dayIndex/judges",
    name: "DayAdminJudges",
    component: DayAdminJudges,
    meta: {
      dir: DayAdminDir,
    },
  },
  {
    path: "/admin/:eventName/:dayIndex/results",
    name: "DayAdminResults",
    component: DayAdminResults,
    meta: {
      dir: DayAdminDir,
    },
  },
  {
    path: "/instructor",
    name: "InstructorDashboard",
    component: InstructorDashboard,
    meta: {
      dir: InstructorDir,
    },
  },
  {
    path: "/instructor/settings",
    name: "InstructorSettings",
    component: InstructorSettings,
    meta: {
      dir: InstructorDir,
    },
  },
  {
    path: "/judge/:uniqueId",
    name: "JudgeCheckin",
    component: JudgeCheckin,
    meta: {
      dir: None,
    },
  },
  {
    path: "/judge/:uniqueId/dashboard",
    name: "JudgeDashboard",
    component: JudgeDashboard,
    meta: {
      dir: JudgeDir,
    },
  },
  {
    path: "/judge/:uniqueId/projects",
    name: "JudgeProjects",
    component: JudgeProjects,
    meta: {
      dir: JudgeDir,
    },
  },
  {
    path: "/judge/:uniqueId/rules",
    name: "JudgeRules",
    component: JudgeRules,
    meta: {
      dir: JudgeDir,
    },
  },
  {
    path: "/judge/:uniqueId/settings",
    name: "JudgeSettings",
    component: JudgeSettings,
    meta: {
      dir: JudgeDir,
    },
  },
  {
    path: "/judge/:uniqueId/:ballotId",
    name: "JudgeBallot",
    component: JudgeBallot,
    meta: {
      dir: None,
    },
  },
  {
    path: "/judge/:uniqueId/notifs",
    name: "JudgeNotifs",
    component: JudgeNotifs,
    meta: {
      dir: None,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

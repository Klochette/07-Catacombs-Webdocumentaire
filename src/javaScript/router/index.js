import Vue from "vue";
import VueRouter from "vue-router";

import Disclaimer from "@/views/Disclaimer.vue";
import Homepage from "@/views/Homepage.vue";
import Equipment from "@/views/Equipment.vue";
import GoingDownVideo from "@/views/GoingDownVideo.vue";
import GoingUpVideo from "@/views/GoingUpVideo.vue";
import GoingDownHistory from "@/views/GoingDownHistory.vue";
import PanoramicView from "@/views/PanoramicView.vue";
import Gallery from "@/views/Gallery.vue";
import Sources from "@/views/Sources.vue";
import Room from "@/views/Room.vue";
import KtaMap from "@/views/KtaMap.vue";
import Exit from "@/views/Exit.vue";
import UnofficialRoom from "@/views/UnofficialRoom.vue";
import Video from "@/views/Video.vue";
import NotFound from "@/views/NotFound.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/disclaimer",
    name: "Disclaimer",
    component: Disclaimer,
  },
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/equipment",
    name: "Equipment",
    component: Equipment,
  },
  {
    path: "/goingDownVideo",
    name: "GoingDownVideo",
    component: GoingDownVideo,
  },
  {
    path: "/goingUpVideo",
    name: "GoingUpVideo",
    component: GoingUpVideo,
  },
  {
    path: "/goingDownHistory",
    name: "GoingDownHistory",
    component: GoingDownHistory,
  },
  {
    path: "/panorama",
    name: "PanoramicView",
    component: PanoramicView,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/sources",
    name: "Sources",
    component: Sources,
  },
  {
    path: "/room/:id_room",
    name: "Room",
    component: Room,
    props: true,
  },
  {
    path: "/ktamap",
    name: "KtaMap",
    component: KtaMap,
  },
  {
    path: "/exit",
    name: "Exit",
    component: Exit,
  },
  {
    path: "/video",
    name: "Video",
    component: Video,
    props: true,
  },
  {
    path: "/unofficial",
    name: "UnofficialRoom",
    component: UnofficialRoom,
  },
  {
    path: "/NotFound",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/*",
    redirect: "/NotFound"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

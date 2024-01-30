import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import { HeaderOnly } from "~/components/Layout";
import Step1 from "~/step/Step1";
import Step2 from "~/step/Step2";
import Step3 from "~/step/Step3";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile, layout: null },
  { path: "/upload", component: Upload, layout: HeaderOnly },

  //step page
  { path: "/step1", component: Step1, layout: null },
  { path: "/step2", component: Step2, layout: null },
  { path: "/step3", component: Step3, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

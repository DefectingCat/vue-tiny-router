import { App } from 'vue';
import RouterView from './RouterView';
import RouterLink from './RouterLink.vue';

const router = {
  install(app: App): void {
    app.component('RouterView', RouterView);
    app.component('RouterLink', RouterLink);
  },
};

export default router;

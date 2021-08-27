import { createVNode, defineComponent, shallowRef } from 'vue';
import routes from './routes';

export default defineComponent({
  name: 'RouterView',
  setup() {
    let currentPath = window.location.pathname;
    const component = shallowRef(
      routes.find((item) => item.path === currentPath)?.component ??
        'Note found'
    );

    const handleEvent = (e: CustomEvent<string>) => {
      console.log(e.detail);
      currentPath = e.detail;
      component.value =
        routes.find((item) => item.path === currentPath)?.component ??
        'Note found';
    };

    document.addEventListener('route', handleEvent as EventListener);

    return () => createVNode(component.value);
  },
});

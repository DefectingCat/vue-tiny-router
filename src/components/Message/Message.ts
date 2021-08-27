import { createVNode, render } from 'vue';
import MessageVue from './index.vue';
import { MessageOpt } from './types';

let key = 0;
export default function (opt: MessageOpt | string = {}): void {
  if (typeof opt === 'string') {
    opt = {
      message: opt,
    };
  }

  // 创建一个 div 元素作为 render 的 container
  const container = document.createElement('div');
  container.id = `message_${key++}`;

  // 根据模板文件创建 VNode
  const vm = createVNode(MessageVue, opt);

  // 当组件到期时，销毁组件并删除 container
  if (vm.props)
    vm.props.onDestroy = () => {
      render(null, container);
      container.remove();
    };

  // 渲染并插入到 body
  render(vm, container);
  document.body.appendChild(container);
}

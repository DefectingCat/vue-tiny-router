import type { VNode } from 'vue';

export interface MessageOpt {
  message?: string | VNode;
  [key: string]: unknown;
}

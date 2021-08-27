import type { VNode } from 'vue';

export interface MessageOpt {
  message?: string | VNode;
  duration?: number;
  [key: string]: unknown;
}

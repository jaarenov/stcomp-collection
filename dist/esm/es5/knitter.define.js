// knitter: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './knitter.core.js';
import {
  KnButton,
  KnCode,
  KnOption,
  KnSelect
} from './knitter.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    KnButton,
    KnCode,
    KnOption,
    KnSelect
  ], opts);
}
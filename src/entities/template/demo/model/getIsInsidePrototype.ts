import { PROTOTYPE_ID } from '@shared/types';

export function getIsInsidePrototype(draggable: EventTarget | null): boolean {
  const prototype = document.querySelector(`#${PROTOTYPE_ID}`);

  if (!prototype) return false;
  if (!draggable || !(draggable instanceof HTMLElement)) return false;

  const prototypeRect = prototype.getBoundingClientRect();
  const draggableRect = draggable.getBoundingClientRect();

  const isInside =
    draggableRect.left < prototypeRect.right &&
    draggableRect.right > prototypeRect.left &&
    draggableRect.top < prototypeRect.bottom &&
    draggableRect.bottom > prototypeRect.top;

  return isInside;
}

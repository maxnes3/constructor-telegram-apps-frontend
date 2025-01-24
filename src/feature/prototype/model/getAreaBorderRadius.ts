export function getAreaBorderRadius(position_behaviour: string): string {
  let areaBorderRadius: string[] = [];

  if (position_behaviour === 'isFill') {
    areaBorderRadius = ['12px'];
  }

  return areaBorderRadius.join(' ');
}

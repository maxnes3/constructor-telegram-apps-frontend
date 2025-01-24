type CSSPropertiesInputType = Record<string, object | number | string>;

type CSSPropertiesOutputType = {
  [key: string]: string;
};

export function convertToCSSProperties(
  obj: CSSPropertiesInputType,
  prefix = '--',
): CSSPropertiesOutputType {
  const cssProperties: CSSPropertiesOutputType = {};

  for (const key in obj) {
    const value = obj[key as keyof CSSPropertiesInputType];

    if (typeof value === 'object' && value !== null) {
      Object.assign(
        cssProperties,
        convertToCSSProperties(
          value as CSSPropertiesInputType,
          `${prefix}${key}-`,
        ),
      );
    } else {
      const cssKey = `${prefix}${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      cssProperties[cssKey] = value.toString();
    }
  }

  return cssProperties;
}

class Typography {
  constructor(
    fontFamily,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    textTransform = 'none',
  ) {
    this.fontFamily = fontFamily;
    this.fontWeight = fontWeight;
    this.fontSize = fontSize;
    this.lineHeight = lineHeight;
    this.letterSpacing = letterSpacing;
    this.textTransform = textTransform;
  }

  setAttribute(key, val) {
    this[key] = val;
  }
}

export { Typography };

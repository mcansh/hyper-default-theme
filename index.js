// Constants
const backgroundColor = '#000000';
const foregroundColor = '#ffffff';
const cursorColor = 'rgba(248,28,229,0.8)';
const borderColor = 'transparent'; // transparent borders are better in my opinion, but the default is #333

// Colors
const black = backgroundColor;
const red = '#ff0000';
const green = '#33ff00';
const yellow = '#ffff00';
const blue = '#0066ff';
const magenta = '#cc00ff';
const cyan = '#00ffff';
const white = '#d0d0d0';
const lightBlack = '#808080';
const lightRed = red;
const lightGreen = green;
const lightYellow = yellow;
const lightBlue = blue;
const lightMagenta = magenta;
const lightCyan = cyan;
const lightWhite = foregroundColor;

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightRed,
  lightGreen,
  lightYellow,
  lightBlue,
  lightMagenta,
  lightCyan,
  lightWhite,
};

// Apply theme
exports.decorateConfig = (config) => Object.assign({}, config, {
  backgroundColor,
  foregroundColor,
  borderColor,
  cursorColor,
  colors
});

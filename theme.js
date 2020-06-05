const randomValue = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const randomColor = () =>
  randomValue([
    '#FFC0CB',
    '#f7aef8',
    '#a09fe8',
    '#b8e0d2',
    '#72ddf7',
    '#edf67d',
    '#7dd181',
  ]);

let primaryColor = randomColor();

export default {
  colors: {
    primary: primaryColor,
    secondary: '#000000',
    accent: '#FFFFFF',
    muted: '#262626',
  },
};

/*
$mauve: #f7aef8ff;
$maximum-blue-purple: #a09fe8ff;
$aero-blue: #b8e0d2ff;
$sky-blue-crayola: #72ddf7ff;
$key-lime: #edf67dff;
$mantis: #7dd181ff;
*/

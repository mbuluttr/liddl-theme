export type ThemeTypes = 'light' | 'dark';

export type Theme = {
  text: string;
  subtitle: string;
  background: string;
  item_bg: string;
  item_inner: string;
  icon1_bg: string;
  icon1_inner: string;
  icon2_bg: string;
  icon2_inner: string;
  icon3_bg: string;
  icon3_inner: string;
  icon4_bg: string;
  icon4_inner: string;
};

export type Themes = {
  dark: Theme;
  light: Theme;
};

export const Colors: Themes = {
  light: {
    text: '#000000',
    subtitle: '#858892',
    background: '#F7FAFC',
    item_bg: 'rgba(184, 188, 200, 0.2)',
    item_inner: 'rgba(184, 188, 200, 1)',
    icon1_bg: 'rgba(252, 107, 33, 0.2)',
    icon1_inner: 'rgba(252, 107, 33, 1)',
    icon2_bg: 'rgba(27, 163, 235, 0.2)',
    icon2_inner: 'rgba(27, 163, 235, 1)',
    icon3_bg: 'rgba(86, 50, 251, 0.2)',
    icon3_inner: 'rgba(86, 50, 251, 1)',
    icon4_bg: 'rgba(250, 40, 88, 0.2)',
    icon4_inner: '#rgba(250, 40, 88, 1)',
  },
  dark: {
    text: '#FFFFFF',
    subtitle: '#B5B1D7',
    background: '#2F2B53',
    item_bg: 'rgba(167, 165, 195, 0.2)',
    item_inner: 'rgba(167, 165, 195, 1)',
    icon1_bg: 'rgba(253, 186, 144, 0.2)',
    icon1_inner: 'rgba(253, 186, 144, 1)',
    icon2_bg: 'rgba(155, 217, 253, 0.2)',
    icon2_inner: 'rgba(155, 217, 253, 1)',
    icon3_bg: 'rgba(182, 197, 254, 0.2)',
    icon3_inner: 'rgba(182, 197, 254, 1)',
    icon4_bg: 'rgba(254, 169, 191, 0.2)',
    icon4_inner: 'rgba(254, 169, 191, 1)',
  },
};

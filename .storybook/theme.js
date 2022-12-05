import { create } from '@storybook/theming';
import logo from "./logo.svg";

export default create({
  base: 'dark',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'React Lib',
  brandUrl: 'http://localhost:3000',
  brandImage: logo,
  brandTarget: '_self',
});

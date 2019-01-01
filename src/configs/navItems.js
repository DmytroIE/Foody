import routes from './routes';

export default [
  { name: 'main', to: routes.MAIN },
  { name: 'menu', to: `${routes.MENU.root}` },
];

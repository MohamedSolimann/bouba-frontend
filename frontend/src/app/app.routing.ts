export default [
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'core',
    loadChildren: () =>
      import('./modules/core/core.module').then((m) => m.CoreModule),
  },

  {
    path: '',
    loadChildren: () =>
      import('./modules/core/core.module').then((m) => m.CoreModule),
  },
];

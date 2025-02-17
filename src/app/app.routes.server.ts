import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'product-detalis/:id',
    renderMode: RenderMode.Server
  }
  ,
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

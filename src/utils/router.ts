export interface Route {
  method: string;
  path: string;
  handler: (request: Request, env: any, params: Record<string, string>) => Promise<Response>;
}

export class Router {
  private routes: Route[] = [];

  add(method: string, path: string, handler: Route['handler']): void {
    this.routes.push({ method, path, handler });
  }

  get(path: string, handler: Route['handler']): void {
    this.add('GET', path, handler);
  }

  post(path: string, handler: Route['handler']): void {
    this.add('POST', path, handler);
  }

  async handle(request: Request, env: any): Promise<Response> {
    const url = new URL(request.url);
    const method = request.method;

    for (const route of this.routes) {
      if (route.method !== method) continue;

      const params = this.matchPath(route.path, url.pathname);
      if (params !== null) {
        return route.handler(request, env, params);
      }
    }

    return new Response('Not Found', { status: 404 });
  }

  private matchPath(pattern: string, pathname: string): Record<string, string> | null {
    const patternParts = pattern.split('/');
    const pathParts = pathname.split('/');

    if (patternParts.length !== pathParts.length) {
      return null;
    }

    const params: Record<string, string> = {};

    for (let i = 0; i < patternParts.length; i++) {
      const patternPart = patternParts[i];
      const pathPart = pathParts[i];

      if (patternPart.startsWith(':')) {
        params[patternPart.slice(1)] = pathPart;
      } else if (patternPart !== pathPart) {
        return null;
      }
    }

    return params;
  }
}

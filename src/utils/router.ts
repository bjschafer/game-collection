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
    
    console.log(`Router: ${method} ${url.pathname}`);

    for (const route of this.routes) {
      if (route.method !== method) continue;

      const params = this.matchPath(route.path, url.pathname);
      if (params !== null) {
        console.log(`Router: Matched route ${route.path} with params:`, params);
        return route.handler(request, env, params);
      }
    }

    console.log(`Router: No route matched for ${method} ${url.pathname}`);
    console.log('Available routes:', this.routes.map(r => `${r.method} ${r.path}`));
    return new Response('Not Found', { status: 404 });
  }

  private matchPath(pattern: string, pathname: string): Record<string, string> | null {
    // Normalize paths by removing trailing slashes and empty parts
    const patternParts = pattern.split('/').filter(part => part !== '');
    const pathParts = pathname.split('/').filter(part => part !== '');

    console.log(`Router: Matching pattern "${pattern}" against path "${pathname}"`);
    console.log(`Router: Pattern parts:`, patternParts);
    console.log(`Router: Path parts:`, pathParts);

    if (patternParts.length !== pathParts.length) {
      console.log(`Router: Length mismatch - pattern: ${patternParts.length}, path: ${pathParts.length}`);
      return null;
    }

    const params: Record<string, string> = {};

    for (let i = 0; i < patternParts.length; i++) {
      const patternPart = patternParts[i];
      const pathPart = pathParts[i];

      if (patternPart.startsWith(':')) {
        params[patternPart.slice(1)] = pathPart;
      } else if (patternPart !== pathPart) {
        console.log(`Router: Part mismatch at index ${i} - pattern: "${patternPart}", path: "${pathPart}"`);
        return null;
      }
    }

    console.log(`Router: Match successful with params:`, params);
    return params;
  }
}
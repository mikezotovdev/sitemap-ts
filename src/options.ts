import type { ResolvedOptions, UserOptions } from './types'

export function resolveOptions(userOptions: UserOptions): ResolvedOptions {
  return Object.assign(
    {
      hostname: 'http://localhost/',
      dynamicRoutes: [],
      exclude: [],
      basePath: '',
      outDir: 'dist',
      extensions: 'html',
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      readable: false,
      generateRobotsTxt: true,
      robots: [{
        userAgent: '*',
        allow: '/',
      }],
    },
    userOptions,
  )
}

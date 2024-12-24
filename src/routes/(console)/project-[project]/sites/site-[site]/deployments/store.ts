import { writable, type Writable } from 'svelte/store';
import type { Column } from '$lib/helpers/types';

export const showCreateDeployment: Writable<boolean> = writable(false);

export const columns = writable<Column[]>([
    { id: '$id', title: 'Deployment ID', type: 'string', show: true, width: 150 },
    {
        id: 'status',
        title: 'Status',
        type: 'enum',
        show: true,
        width: 110,
        array: true,
        format: 'enum',
        elements: ['ready', 'processing', 'building', 'waiting', 'cancelled', 'failed'],
        filter: false
    },
    {
        id: 'domains',
        title: 'Domains',
        type: 'string',
        show: true,
        width: 15,
        array: true,
        format: 'string',
        filter: false
    },
    {
        id: 'buildTime',
        title: 'Build time',
        type: 'integer',
        show: true,
        width: 90,
        elements: [
            {
                value: 15,
                label: 'more than 15 seconds'
            },
            {
                value: 60,
                label: 'more than 1 minute'
            },
            {
                value: 5 * 60,
                label: 'more than 5 minutes'
            }
        ],
        filter: false
    },
    {
        id: 'size',
        title: 'Total size',
        type: 'integer',
        show: true,
        width: 140,
        elements: [
            {
                value: 2 * 1000 * 1000,
                label: 'more than 2MB'
            },
            {
                value: 10 * 1000 * 1000,
                label: 'more than 10MB'
            },
            {
                value: 50 * 1000 * 1000,
                label: 'more than 50MB'
            }
        ]
    },
    {
        id: 'buildSize',
        title: 'Build size',
        type: 'integer',
        show: false,
        filter: false,
        width: 80
    },
    {
        id: 'type',
        title: 'Source',
        type: 'string',
        show: true,
        width: 90,
        array: true,
        format: 'enum',
        elements: [
            { value: 'manual', label: 'Manual' },
            { value: 'cli', label: 'CLI' },
            { value: 'vcs', label: 'Git' }
        ]
    },
    {
        id: '$updatedAt',
        title: 'Updated',
        type: 'datetime',
        show: true,
        width: 150,
        format: 'datetime'
    }
]);

export const defaultIgnore = `
### Node ###
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)
web_modules/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next
out

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
# Comment in the public line in if your project uses Gatsby and not Next.js
# https://nextjs.org/blog/next-9-1#public-directory-support
# public

# vuepress build output
.vuepress/dist

# vuepress v2.x temp and cache directory
.temp

# Docusaurus cache and generated files
.docusaurus

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*

### Node Patch ###
# Serverless Webpack directories
.webpack/

# Optional stylelint cache

# SvelteKit build / generate output
.svelte-kit

`;

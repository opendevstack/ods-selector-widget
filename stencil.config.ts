import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ods-selector-widget',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      generateTypeDeclarations: true,
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'fonts', dest: 'fonts' }, // Copy fonts folder to www/fonts
        { src: 'global.css' }
      ]
    },
  ],
  testing: {
    browserHeadless: "shell",
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 85,
        lines: 90,
        statements: 90
      }
    },
    coverageDirectory: 'coverage/stencil',
    collectCoverage: true,
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/dist/',
      '/stencil.config.ts'
    ]
  },
};

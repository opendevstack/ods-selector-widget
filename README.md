# ODS Selector Widget

[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)
[![npm version](https://img.shields.io/npm/v/@appshell/ods-selector-widget.svg)](https://www.npmjs.com/package/@appshell/ods-selector-widget)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A flexible and customizable web component for displaying platform navigation and resource links. Built with [Stencil](https://stenciljs.com/), this component provides a clean interface for organizing and accessing multiple platform resources in a project-based context.

## Features

- 🎨 **Fully Customizable**: Extensive CSS custom properties for theming
- 🔌 **Framework Agnostic**: Works with any JavaScript framework or vanilla JS
- 📱 **Responsive**: Adapts to different screen sizes
- ⚡ **Fast**: Lazy-loaded, optimized for performance
- 🔄 **Dynamic Content**: Fetches platform data from a service URL
- 🎯 **Accessibility**: ARIA attributes and semantic HTML
- 🦴 **Loading States**: Built-in skeleton loader and error handling
- 🔗 **Platform Selector**: Dedicated platform icons with enable/disable states
- 📑 **Sectioned Layout**: Organize links into logical sections with tooltips
- 🔀 **Multiple Link Types**: Support for platform, project (internal), and external links with appropriate icons

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Angular](#angular)
  - [React](#react)
- [Properties](#properties)
- [API Response Format](#api-response-format)
- [Styling](#styling)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

### NPM

```bash
npm install @appshell/ods-selector-widget
```

## Usage

### Angular

#### 1. Import the Component

In your `app.module.ts`:

```typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { defineCustomElements } from '@appshell/ods-selector-widget/loader';

import { AppComponent } from './app.component';

defineCustomElements(window);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```
#### 2. Configure Angular (if needed)

> **Note:** If you encounter the error `✘ [ERROR] No loader is configured for ".map" files`, you need to update your `angular.json` configuration.

Add the following to your `architect.build.options` in `angular.json`:

```json
{
  "architect": {
    "build": {
      "options": {
        "customWebpackConfig": {
          "loader": {
            ".map": "empty"
          }
        }
      }
    }
  }
}
```

#### 3. Use in Template

```html
<ods-selector-widget
  project="My Project"
  service-url="https://api.example.com/platforms/{{project}}">
</ods-selector-widget>
```

### React

```tsx
import React from 'react';
import { defineCustomElements } from '@appshell/ods-selector-widget/loader';

// Call this once in your app initialization
defineCustomElements(window);

function App() {
  return (
    <div>
      <ods-selector-widget
        project="My Project"
        service-url="https://api.example.com/platforms/${project}"
      />
    </div>
  );
}

export default App;
```

For better TypeScript support in React:

```tsx
// Add to your declarations file (e.g., custom-elements.d.ts)
declare namespace JSX {
  interface IntrinsicElements {
    'ods-selector-widget': {
      project?: string;
      'service-url'?: string;
    };
  }
}
```

## Properties

| Property | Attribute | Type | Default | Description |
|----------|-----------|------|---------|-------------|
| `project` | `project` | `string` | `'PROJECT 1'` | The project name displayed in the widget header |
| `serviceUrl` | `service-url` | `string` | `undefined` | The service URL to fetch platform data. Use `${project}` as a placeholder that will be replaced with the project name |

### Example

```html
<ods-selector-widget
  project="Customer Portal"
  service-url="https://api.myapp.com/platforms/${project}">
</ods-selector-widget>
```

## API Response Format

The component expects the service URL to return JSON data in the following format:

```json
{
  "sections": [
    {
      "section": "Select your platform",
      "tooltip": "",
      "links": [
        {
          "label": "Platform One",
          "url": "https://platform1.com",
          "abbreviation": "P1",
          "type": "platform"
        },
        {
          "label": "Platform Two",
          "url": "https://platform2.com",
          "abbreviation": "P2",
          "type": "platform",
          "disabled": true
        },
        {
          "label": "Platform Three",
          "url": "https://platform3.com",
          "abbreviation": "P3",
          "type": "platform",
          "disabled": true
        }
      ]
    },
    {
      "section": "Documentation",
      "tooltip": "Access project documentation and guides",
      "links": [
        {
          "label": "API Reference",
          "url": "https://docs.example.com/api",
          "tooltip": "Complete API documentation",
          "type": "external"
        },
        {
          "label": "Getting Started",
          "url": "https://docs.example.com/getting-started",
          "tooltip": "Quick start guide",
          "type": "project"
        }
      ]
    },
    {
      "section": "Tools",
      "tooltip": "Development and monitoring tools",
      "links": [
        {
          "label": "Dashboard",
          "url": "https://dashboard.example.com",
          "tooltip": "Project dashboard",
          "type": "external"
        }
      ]
    }
  ]
}
```

### API Response Schema

- **sections** (`array`): Array of content sections to display. Each section can contain either platform links or regular resource links.
  - `section` (`string`): Section title
  - `tooltip` (`string`, optional): Tooltip text for the section header
  - `links` (`array`): Array of links in this section
    - `label` (`string`): Link display text
    - `url` (`string`): Link destination URL
    - `type` (`string`): Link type - `"platform"`, `"project"`, or `"external"`
      - `"platform"`: Renders as platform selector icons (when all links in a section are platform type)
      - `"project"`: Renders as list item with internal link arrow icon
      - `"external"`: Renders as list item with external link arrow icon
    - `tooltip` (`string`, optional): Tooltip text for the link (shown on hover for non-platform links)
    - `abbreviation` (`string`, optional): Short text shown in platform icon (required for `type: "platform"`)
    - `disabled` (`boolean`, optional): If `true`, the platform link is disabled and shown as non-clickable (only applicable for `type: "platform"`)

### Rendering Behavior

The component automatically adapts its rendering based on the link types within each section:

- **Platform Section**: If **all** links in a section have `type: "platform"`, they are rendered as clickable platform icons in a horizontal layout. This is typically used for the main platform selector section.

- **Link List Section**: If a section contains any non-platform links (`type: "project"` or `type: "external"`), all links in that section are rendered as a vertical list with appropriate arrow icons.

**Example:**

```json
{
  "sections": [
    {
      "section": "Platforms",
      "links": [
        { "label": "Platform 1", "url": "...", "abbreviation": "P1", "type": "platform" },
        { "label": "Platform 2", "url": "...", "abbreviation": "P2", "type": "platform" }
      ]
    }
  ]
}
```
↓ Renders as platform icons

```json
{
  "sections": [
    {
      "section": "Resources",
      "links": [
        { "label": "Documentation", "url": "...", "type": "external" },
        { "label": "Dashboard", "url": "...", "type": "project" }
      ]
    }
  ]
}
```
↓ Renders as a list with arrow icons

## Styling

The component uses CSS custom properties (CSS variables) for easy theming. You can override these in your stylesheet:

### Available CSS Custom Properties

```css
ods-selector-widget {
  /* Font family */
  --ods-selector-widget-font-family: 'Inter', sans-serif;

  /* Primary colors */
  --ods-selector-widget-color-primary: #08312A;
  --ods-selector-widget-color-white: #FFF;
  --ods-selector-widget-color-border: #5C5B59;
  --ods-selector-widget-color-shadow: rgba(0, 0, 0, 0.05);
  --ods-selector-widget-color-shadow-hover: rgba(0, 0, 0, 0.25);

  /* Header colors */
  --ods-selector-widget-header-bg: #CCFAE5;
  --ods-selector-widget-header-text: #08312A;

  /* Platform icon colors */
  --ods-selector-widget-platform-icon-bg: #08312A;
  --ods-selector-widget-platform-icon-text: white;
  --ods-selector-widget-first-platform-bg: #008E4C;
  --ods-selector-widget-first-platform-text: #ffffff;
  --ods-selector-widget-second-platform-bg: #5E71FF;
  --ods-selector-widget-second-platform-text: #ffffff;
  --ods-selector-widget-third-platform-bg: #00C86B;
  --ods-selector-widget-third-platform-text: #ffffff;

  /* Disabled state colors */
  --ods-selector-widget-disabled-bg: #E5E3DE;
  --ods-selector-widget-disabled-text: #898885;

  /* Section colors */
  --ods-selector-widget-section-text: #08312A;
  --ods-selector-widget-divider-color: #D3D3D3;

  /* Link colors */
  --ods-selector-widget-link-text: #08312A;
  --ods-selector-widget-link-hover: #6B8375;

  /* Error section colors */
  --ods-selector-widget-error-text: #051D19;
  --ods-selector-widget-error-button-border: #08312A;
  --ods-selector-widget-error-button-text: #08312A;
  --ods-selector-widget-error-button-hover-text: #6B8375;
  --ods-selector-widget-error-button-hover-border: #6B8375;

  /* Tooltip colors */
  --ods-selector-widget-tooltip-bg: #051D19;
  --ods-selector-widget-tooltip-text: #fff;

  /* Skeleton loader colors */
  --ods-selector-widget-skeleton-bg: #F6F5F3;
  --ods-selector-widget-skeleton-shimmer: #e4e3e2;
}
```

### Example: Custom Theme

```css
ods-selector-widget {
  --ods-selector-widget-font-family: "YourCustomFont", sans-serif;
  --ods-selector-widget-color-primary: #2563eb;
  --ods-selector-widget-header-bg: #dbeafe;
  --ods-selector-widget-header-text: #1e40af;
  --ods-selector-widget-first-platform-bg: #10b981;
  --ods-selector-widget-second-platform-bg: #8b5cf6;
  --ods-selector-widget-third-platform-bg: #f59e0b;
}
```

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/ods-selector-widget.git
cd ods-selector-widget

# Install dependencies
npm install
```

### Available Scripts

```bash
# Start development server with live reload
npm start

# Build for production
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test.watch

# Generate a new component
npm run generate
```

### Project Structure

```
ods-selector-widget/
├── src/
│   ├── components/
│   │   └── ods-selector-widget/
│   │       ├── ods-selector-widget.tsx    # Component logic
│   │       ├── ods-selector-widget.css    # Component styles
│   │       ├── ods-selector-widget.spec.ts # Unit tests
│   │       └── ods-selector-widget.e2e.ts  # E2E tests
│   ├── index.html    # Demo page
│   └── index.ts      # Entry point
├── dist/             # Build output
├── www/              # Dev server output
└── stencil.config.ts # Stencil configuration
```

### Testing

The component includes both unit and end-to-end tests:

```bash
# Run all tests
npm test

# Run only unit tests
npm run test -- --spec

# Run only e2e tests
npm run test -- --e2e

# Generate coverage report
npm test -- --coverage
```

## Browser Support

This component works in all modern browsers that support:
- Custom Elements V1
- Shadow DOM
- ES Modules

For older browsers, you may need to include polyfills.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style
- Ensure all tests pass before submitting PR

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:

- Open an issue on [GitHub Issues](https://github.com/yourusername/ods-selector-widget/issues)
- Check the [Stencil documentation](https://stenciljs.com/docs/introduction)

## Acknowledgments

Built with [Stencil](https://stenciljs.com/) - A toolchain for building reusable, scalable Design Systems.
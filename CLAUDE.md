# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based personal resume/portfolio website for a UI/UX designer. The project is built with Create React App and uses React 17.

## Development Commands

- `npm start` or `pnpm start` - Start development server (using react-scripts)
- `npm run build` or `pnpm build` - Build for production
- `npm test` or `pnpm test` - Run tests

Note: This project uses pnpm as the package manager (indicated by pnpm-lock.yaml).

## Architecture

This is a single-page application with a very simple structure:

### File Structure
```
src/
├── App.js          # Main component containing the entire resume layout
├── index.js        # React entry point
└── index.css       # All styling (extensive CSS with specific design system)
```

### Key Characteristics

- **Single Component Design**: The entire resume is contained in one large `App.js` component
- **Static Content**: All content is hardcoded in Chinese, displaying professional experience and portfolio
- **CSS-Heavy Styling**: Uses extensive custom CSS with specific positioning, gradients, and transforms
- **Image Assets**: Multiple images stored in public/ directory for profile photos and design elements
- **Design-Focused**: This appears to be a pixel-perfect implementation of a design mockup

### Content Structure

The resume includes:
- Header with profile photo and name (FangBoya)
- About section with design philosophy elements
- Project showcase (health management system, social skills exchange app)
- Work experience timeline (2020-2025 at 善诊信息技术有限公司)
- Education (西北工业大学, Product Design)
- Contact information

### Styling Approach

- Uses custom CSS classes with specific naming (e.g., `desktop_1`, `flexcontainer_X`)
- Extensive use of absolute positioning and transforms
- Custom color scheme with gradients and specific brand colors
- Responsive design not evident - appears optimized for specific viewport

## Development Notes

- This is a design portfolio piece rather than a traditional web application
- Changes should maintain the pixel-perfect design aesthetic
- All text content is in Chinese and appears to be final/production content
- The CSS is highly specific and interconnected - changes should be made carefully
## Changelog

## [6.0.0]

## Added

- Upgraded all dependencies
- Updated directory structure
- Added background image rendering directly in SVG
- Added option to export background image while exporting the canvas as image or SVG
- Added background image aspect ratio control
- Updated erase option to use mask instead of canvas color
- Add github action for deployment of storybook and package

## Breaking changes

- Removed background option to set background image using CSS-in-JS (instead check feature-filled backgroundImage prop)


## [5.3.4]

## Added

- Switched to Nx
- Updated documentation

## Changed

- Removed pepjs. Can be polyfilled by the web app directly instead

## [5.3.3]

## Fixed

- add support any version above react 16.4
 
## [5.3.2]

## Fixed

- Bump dependency versions
  
## [5.3.1]

## Fixed

- Set default value of `allowOnlyPointerType` as `'all'` again

## [5.3.0]

### Added

- Reset canvas option to reset internal state and clean undo/redo stack

### Fixed

- Fix exportImage function to export png in Firefox and Safari

## [5.2.0]

### Added

- Add `withTimestamp` prop and `getSketchingTime` function to measure the sketching time of the user

## [5.1.2] & [5.1.1] (Both are same - Sorry)

### Added

- Add index.d.ts to npm registry
- Add Github as registry
- Update example

## [5.1.0]

### Added

- Added defaultProps to onUpdate in ReactSketchCanvas
- Added touch-action="none" to allow pepjs polyfill pointer events
- Update README.md

### Fixed

- Removed the annoying console.log from Canvas

## [5.0.1]

### Added

Added README :)

## [5.0.0]

### Added

- Rewrote codebase in typescript
- Added pepjs to support more browsers
- Added onUpdate feature to get current paths in `CanvasPath` type

### Fixed

- Fixed sketch offset issue when the canvas is scrolled

### Changed

- Updated undo/redo/reset strategy
- Updated demo in storybook

## [4.0.0]

### Added

- Renamed SvgSketchCanvas to ReactSketchCanvas to keep naming convention
- Added className property to set class names for CSS selectors

### Deprecated

- Removed SvgSketchCanvas

## [3.0.1]

### Changed

- Moved immutable dependency from Canvas file

## [3.0.0]

### Changed

Removed onUpdate feature and made the system modular

### Added

- Made Canvas as a separate module. Now event handlers can be hooked with Canvas
  class to update paths from server. (For Collaboration use case)

### Deprecated

- Removed onUpdate feature and instead made Canvas module

## [2.3.0]

### Added

- Added onUpdate property to get the current sketch paths after every update

## [2.2.0]

allowOnlyPointerType

### Added

- Added "allowOnlyPointerType" use-case. Now single pointer type can be targetted

## [2.1.0]

### Added

- Switched to pointer events

## [2.0.1]

### Added

- Add SVG background using CSS

## [2.0.0]

### Added

- Export and load paths
- Erase mode and eraser width

### Changed

- Rename exportAsImage() to exportImage() for naming consistency

### Deprecated

- Rename exportAsImage()

# Hosea's Digital Art Gallery

A working archive of generative compositions, geometric studies, and animated experiments — built almost entirely with HTML and CSS. No images, no canvas, no scripts pretending to be paint. Just markup, math, and a long quiet relationship with the cascade.

Live: [hoseacodes.com](http://pure.hoseacodes.com)

## What's inside

A gallery layout (`src/pages/index.js`) renders each piece as a framed work hung on a wall, with a plaque underneath and a modal view for the full-size image. The wall lives in `.wall`; each piece is wrapped in `.frame > .canvas > .art-fit` so a `transform: scale()` keeps the live component visible at the right size.

### Selected works

| Piece | Component | Notes |
|---|---|---|
| Business card | [`BCard`](src/components/BCard/bcard.jsx) | Profile card composition |
| Piet Mondrian, study | [`PietMondrain`](src/components/PietMondrain/pietmondrain.jsx) | Composition study |
| Quiet planet | [`Planet`](src/components/Planet/planet.jsx) | Minimal series |
| Boo | [`Boo`](src/components/Boo/boo.jsx) | Character study |
| Design desk | [`DesignDesk`](src/components/DesignDesk/DesignDesk.jsx) | Interior |
| Switch | [`Switch`](src/components/Switch/switch.jsx) | Object study |
| Gameboy | [`Gameboy`](src/components/Gameboy/Gameboy.jsx) | Object study |
| Cat | [`Cat`](src/components/Cat/cat.jsx) | Character study |
| Rock Lee | [`RockLee`](src/components/RockLee/RockLee.jsx) | Character study |
| Astros boxscore | [`AstrosBoxscore`](src/components/AstrosBoxscore/astrosboxscore.jsx) | Live MLB Stats API widget — yesterday's Houston Astros game |

## Stack

- **Gatsby 5** — static site generation
- **React 18**
- **Bootstrap 5** + **Sass** — base theme, customized in `src/components/layout.scss`
- **FontAwesome** — iconography
- **MLB Stats API** — powers the live Astros boxscore (no key required)

## Running locally

```shell
npm install
npm run develop
```

The site will be at `http://localhost:8000`. GraphiQL is at `http://localhost:8000/___graphql`.

### Other scripts

```shell
npm run build     # production build to ./public
npm run serve     # serve the production build locally
npm run clean     # clear gatsby caches
npm run format    # prettier across the repo
```

## Adding a new piece

1. Create a folder under `src/components/YourPiece/` with `yourpiece.jsx` and `yourpiece.css`.
2. Default-export a React component that renders the artwork.
3. Import it in `src/pages/index.js` and add an entry to the `works` array:
   ```js
   { name: "Your piece", meta: "Study · 2026", Component: YourPiece, scale: 0.5, offset: 0, modalScale: 1.2 }
   ```
   - `scale` shrinks the live component to fit the gallery canvas.
   - `offset` staggers the piece vertically along the wall.
   - `modalScale` is the scale applied in the larger modal view.
   - `naturalSize: { width, height }` is optional — set it if the component has a fixed pixel dimension that needs to be enforced in the canvas.

## Credits

Built by [D. Hosea](http://www.hoseacodes.com) — software engineer and digital artist based in Houston.

Originally scaffolded from [`gatsby-starter-bootstrap-5`](https://github.com/r-ichard/gatsby-starter-bootstrap-5) by Richard Raduly.

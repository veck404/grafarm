AGENT INSTRUCTIONS: My Project (React Version)

This document provides instructions for AI coding agents working on this project. Agents must strictly adhere to the technology choices and development standards outlined below.

🧠 Technology Stack

Language: The primary programming language is JavaScript (React).
All new features, bug fixes, and refactors must use JavaScript.
If a file uses .ts or .tsx, convert it to .js or .jsx before making changes.

Framework: The project uses React.
All code must follow React’s functional component conventions (using hooks like useState, useEffect, etc.).
Class components are not allowed.

Styling: Use Tailwind CSS for all component styling.
Do not use plain CSS, inline styles, CSS modules, or other frameworks (e.g., Bootstrap, Material UI).
Tailwind utility classes should be applied directly in the className attribute.

Animation: Use Framer Motion or GSAP for animations.

Prefer Framer Motion for simple, component-level animations.

Use GSAP for advanced, timeline-based animations or scroll effects.
Do not use raw CSS animations or other animation libraries.
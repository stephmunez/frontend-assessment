# Orchard Frontend Test

This is a frontend test project built using Vite. The app showcases a set of recipes and articles, focusing on responsive design, modal functionality, and smooth animations. Below is an explanation of the project's architecture and key decisions.

## Project Structure

- **index.html**: This is the main entry point of the application. It includes all the basic HTML elements like meta tags, favicon, and links to external stylesheets and JavaScript files. The content is structured in two primary sections: `component1` and `component2`.
- **styles/style.scss**: The stylesheet is written in SCSS for easier management of styles with variables and nested rules. It includes styles for various components, responsiveness (media queries), and animations.
- **main.js**: This file contains all the interactive logic, such as modal handling, image click events, and keydown events for closing the modal.
- **package.json**: Defines the project dependencies and scripts for development and production builds.

## Design Decisions

### 1. Vite for Build Tooling

Vite was chosen because it is lightweight, fast, and modern. It provides an efficient development experience with hot-module replacement (HMR) and is easy to configure. The project does not require complex configurations, making Vite an excellent choice for quick setup and performance.

### 2. Sass for Styling

Sass provides additional features such as nesting, variables, and mixins that make writing CSS more maintainable. This is especially useful when dealing with more complex styling needs, such as responsive layouts and animations. For example, nested selectors make it easy to manage component-specific styles like `component1` and `component2`.

### 3. Normalize.css

Normalize.css is used to ensure consistent rendering of elements across different browsers. It’s a simple way to reset styles and create a uniform base for further customizations.

### 4. Responsive Design

Media queries are used to adjust the layout for different screen sizes. The grid system for the `component1` section switches from three columns on larger screens to two or one column on smaller screens. This allows the content to adapt gracefully across devices, ensuring a smooth user experience.

- **Max-width 1024px**: The layout switches from three columns to two.
- **Max-width 768px**: The layout becomes a single column for easier readability on small devices.

### 5. Animations

Animations are applied using `@keyframes` for smooth transitions when elements are loaded. The `fadeIn` and `slideIn` animations help improve user experience by making the content feel more dynamic.

- **fadeIn**: Used for elements that should gradually appear on the screen.
- **slideIn**: Adds a sliding effect when sections come into view, improving visual engagement.

### 6. Modal Implementation

The modal is a core part of the interactive experience. Users can click on an image, and it will open in a modal for better viewing. The modal can be closed in multiple ways, enhancing usability:

- Clicking outside the modal content.
- Clicking the close button (`&times;`).
- Pressing the Escape key.

The modal also prevents page scrolling when open, improving the overall experience.

### 7. Keyboard Accessibility

Keyboard navigation is supported. The modal can be closed using the Escape key. This is important for accessibility and makes the app more user-friendly.

### 8. Semantic HTML

Semantic elements such as `<section>`, `<article>`, `<h1>`, `<h2>`, and `<h3>` are used to improve readability and accessibility. This helps screen readers interpret the content properly and boosts SEO performance.

## Further Improvements

1. **Accessibility Enhancements**: Further enhance accessibility by adding ARIA roles and properties to the modal and other interactive elements. This will help assistive technologies better understand the structure of the application.

2. **Enhanced Animations**: Implement animations that trigger only when elements enter the viewport, using Intersection Observer API. This approach can optimize performance and improve the user experience.

3. **Performance Optimization**: Consider code-splitting and lazy loading for components that are not immediately required. This can significantly reduce initial load times.

## Installation and Setup

### Prerequisites

- Node.js and npm must be installed on your machine.

### Steps to Run the Project

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run in Development Mode**:

   ```bash
   npm run dev
   ```

3. **Build for Production**:

   ```bash
   npm run build
   ```

4. **Preview the Build**:
   ```bash
   npm run preview
   ```

## Conclusion

This project demonstrates the use of modern frontend tools to create a responsive, accessible, and user-friendly web app. By leveraging Vite, Sass, and a modular approach to JavaScript, the code remains clean, maintainable, and performant.

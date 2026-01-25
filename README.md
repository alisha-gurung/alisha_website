# Alisha Gurung - Personal Portfolio (Astro Edition)

This is a high-performance static website built with **Astro** and **Tailwind CSS**.

## 🚀 Getting Started

Since this is a modern Node.js project, you need to install dependencies first.

### Prerequisites
- Node.js installed on your computer.

### Installation
1.  Open your terminal in this folder.
2.  Run the installation command:
    ```bash
    npm install
    ```

### Running Locally
To start the development server:
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### Building for Production
To create the static HTML files for hosting:
```bash
npm run build
```
The files will be created in the `dist/` folder. You can upload this folder to GitHub Pages or Netlify.

## 📂 Project Structure

- `src/layouts/Layout.astro`: The main page wrapper (Head, Fonts, Global Styles).
- `src/components/`: Reusable unique UI parts.
    - `ProjectCard.astro`: For the portfolio grid.
    - `Navigation.astro`: Top menu.
    - `Footer.astro`: Bottom footer.
- `src/pages/`: The actual pages of your site.
    - `index.astro`: Home
    - `portfolio.astro`: Managed Properties
    - `leadership.astro`: Skills & Philosophy
    - `contact.astro`: Contact Info

## 🎨 Customizing
- **Colors**: Edit `tailwind.config.mjs` (if present) or `src/layouts/Layout.astro` styles.
- **Content**: Edit the files in `src/pages/`.

## 🖼️ How to Replace Images
Currently, the website uses images from the internet (hotlinks). To use your own photos:

1.  **Place your photos** in the `src/assets/` folder (e.g., `src/assets/my-photo.jpg`).
2.  **Open the page file** where the image is used (e.g., `src/pages/index.astro`).
3.  **Import the image** at the top of the file:
    ```astro
    ---
    import myPhoto from '../assets/my-photo.jpg';
    ---
    ```
4.  **Use it in the ProjectCard**:
    ```astro
    <ProjectCard 
        title="My Project"
        image={myPhoto} 
        ...
    />
    ```
    *(Note: When using a local import, use `image={myPhoto}` with curly braces, instead of `image="..."` with quotes.)*

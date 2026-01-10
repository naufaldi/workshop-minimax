import { serve } from "bun";

// Serve static files from the current directory
const server = serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    let filePath = url.pathname;

    // Default to index.html
    if (filePath === "/") {
      filePath = "/src/index.html";
    }

    // Map URL path to file system path
    const fullPath = "." + filePath;

    try {
      const file = Bun.file(fullPath);
      if (file.exists()) {
        return new Response(file);
      }
    } catch (e) {
      // File doesn't exist
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log("🚀 Server running at http://localhost:3000");
console.log("📊 Presentation: http://localhost:3000/src/index.html");

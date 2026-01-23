const fs = require("fs");
const path = require("path");

// Configuration
const LEGACY_BASE = path.join(
  __dirname,
  "../legacy/content_source/facilities/rooms",
);
const PUBLIC_BASE = path.join(__dirname, "../public/images/rooms");
const DATA_FILE = path.join(__dirname, "../src/data/rooms.json");

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_BASE)) {
  fs.mkdirSync(PUBLIC_BASE, { recursive: true });
}

// Read current data
const roomsData = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
let updatedCount = 0;

// Helper to copy file
function copyFile(src, dest) {
  fs.copyFileSync(src, dest);
}

// Main logic
console.log("🚀 Starting Content Rescue Operation...");

roomsData.forEach((room) => {
  const roomId = room.id; // e.g., "01"
  const legacyDir = path.join(LEGACY_BASE, roomId, "images");
  const publicDir = path.join(PUBLIC_BASE, roomId);

  // Create room specific folder in public
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Check if legacy directory exists
  if (fs.existsSync(legacyDir)) {
    const files = fs
      .readdirSync(legacyDir)
      .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    if (files.length > 0) {
      const imagePaths = [];
      console.log(`✅ Found ${files.length} images for Room ${roomId}`);

      files.forEach((file) => {
        const srcPath = path.join(legacyDir, file);
        // Sanitize filename: replace spaces with underscores, remove special chars
        const safeName = file.replace(/[^a-zA-Z0-9.-]/g, "_");
        const destPath = path.join(publicDir, safeName);

        copyFile(srcPath, destPath);

        // Add relative path to array (for JSON)
        imagePaths.push(`/images/rooms/${roomId}/${safeName}`);
      });

      // Update room object
      room.images = imagePaths;
      updatedCount++;
    } else {
      console.warn(`⚠️  No images found in legacy folder for Room ${roomId}`);
    }
  } else {
    console.warn(
      `❌ Legacy directory not found for Room ${roomId}: ${legacyDir}`,
    );
  }
});

// Write back to JSON
fs.writeFileSync(DATA_FILE, JSON.stringify(roomsData, null, 2));
console.log(`\n🎉 Operation Complete. Updated ${updatedCount} rooms.`);

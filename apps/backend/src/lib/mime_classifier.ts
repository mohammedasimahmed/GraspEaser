// Define the MIME type to category mapping
type MediaCategory = "video" | "image" | "document";

const mimeTypeMap: Record<string, MediaCategory> = {
  // Video MIME types
  "video/mp4": "video",
  "video/webm": "video",
  "video/avi": "video",
  "video/mpeg": "video",
  "video/quicktime": "video",
  "video/x-msvideo": "video",

  // Image MIME types
  "image/jpeg": "image",
  "image/png": "image",
  "image/gif": "image",
  "image/svg+xml": "image",
  "image/webp": "image",
  "image/bmp": "image",
  "image/tiff": "image",

  // Document MIME types
  "application/pdf": "document",
  "application/msword": "document", // .doc
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "document", // .docx
  "application/vnd.ms-excel": "document", // .xls
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
    "document", // .xlsx
  "application/vnd.ms-powerpoint": "document", // .ppt
  "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    "document", // .pptx
  "application/rtf": "document", // Rich Text Format
  "text/plain": "document", // .txt
  "text/csv": "document", // CSV
};

export const getMediaTypeFromMimeType = (mimeType: string) => {
  return mimeTypeMap[mimeType];
};

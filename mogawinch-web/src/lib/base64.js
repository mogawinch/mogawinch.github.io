// Isomorphic Base64 slug encode/decode, byte-for-byte compatible with the
// old Blazor site's `Convert.ToBase64String(Encoding.UTF8.GetBytes(path))`
// (standard, non-URL-safe Base64 - can contain literal `/` or `+`).
//
// Uses only TextEncoder/TextDecoder + global btoa/atob, which are available
// both in the browser and in Node 22 (used during the vite-react-ssg
// prerender pass) - deliberately not using Node's `Buffer`.

export function encodeSlug(path) {
  const bytes = new TextEncoder().encode(path);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function decodeSlug(slug) {
  const binary = atob(slug);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}


export default function GetCookieValue(cookieName) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Check if the cookie starts with the provided name
      if (cookie.startsWith(cookieName + '=')) {
        // Extract and return the cookie value
        return cookie.substring(cookieName.length + 1);
      }
    }
    // Cookie not found
    return null;
  }


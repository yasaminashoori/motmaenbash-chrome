function isPhishingURL(url) {
  const suspiciousPatterns = ["login", "bank", "verify", "secure"];
  return suspiciousPatterns.some((pattern) => url.includes(pattern));
}

function handleNavigation(url, sendWarning) {
  const suspiciousPatterns = ["login", "bank", "verify", "secure"];
  const isPhishing = suspiciousPatterns.some((pattern) =>
    url.includes(pattern)
  );

  if (isPhishing) {
    sendWarning({ warning: "This site might be dangerous." });
  }
}

function isSecureGateway(url) {
  try {
    const parsed = new URL(url);
    const matches = parsed.hostname.match(/\.shaparak\.ir$/i);
    return Boolean(matches) && parsed.protocol === "https:";
  } catch {
    return false;
  }
}

module.exports = {
  isPhishingURL,
  handleNavigation,
  isSecureGateway,
};

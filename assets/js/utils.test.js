const {
  isPhishingURL,
  handleNavigation,
  isSecureGateway,
} = require("../js/utils");

describe("isPhishingURL()", () => {
  test("should detect login URLs", () => {
    expect(isPhishingURL("https://secure-login.com")).toBe(true);
  });

  test("should return false for normal URLs", () => {
    expect(isPhishingURL("https://example.com")).toBe(false);
  });

  test("should detect bank-related URLs", () => {
    expect(isPhishingURL("https://verify-bank-login.net")).toBe(true);
  });
});

describe("handleNavigation", () => {
  test("should send warning for suspicious URL", () => {
    const mockSendWarning = jest.fn();
    handleNavigation("https://login-bank.ir", mockSendWarning);
    expect(mockSendWarning).toHaveBeenCalledWith({
      warning: "This site might be dangerous.",
    });
  });

  test("should not send warning for normal URL", () => {
    const mockSendWarning = jest.fn();
    handleNavigation("https://example.com", mockSendWarning);
    expect(mockSendWarning).not.toHaveBeenCalled();
  });
});

describe("isSecureGateway()", () => {
  test("returns true for valid shaparak URL", () => {
    expect(isSecureGateway("https://www.shaparak.ir")).toBe(true);
  });

  test("returns false for non-shaparak URL", () => {
    expect(isSecureGateway("https://google.com")).toBe(false);
  });

  test("returns false for http shaparak URL", () => {
    expect(isSecureGateway("http://www.shaparak.ir")).toBe(false);
  });

  test("returns false for invalid URL", () => {
    expect(isSecureGateway("not-a-url")).toBe(false);
  });
});

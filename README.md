# Lavenza
Electron app to connect between text hook program and Quick Translators

## Features
- App comes with two main modes: Chinese & Japanese. User is required to choose the correct mode based on the language of hooked text
- For Chinese mode, app will forward Chinese text to Quick Translators to get translations in Vietnamese
- For Japanese mode, app will first send Japanese text to all chosen dictionaries to translate to Chinese. Then, it will forward the translated text to Quick Translators to get translations in Vietnamese
- List of supported dictionaries for translating from Japanese to Chinese:
  - Baidu
  - JBeijing
  - FastAIT
  - Dr.eye

## OS Supports
- macOS 10.9+ (Only 64-bit is supported)
- Windows 7+ (ARM is not supported)

However, application will be more optimized for Windows OS since this will be mainly used by Windows users.

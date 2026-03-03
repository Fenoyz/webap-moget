function applyTheme(themeName) {
    const root = document.documentElement;
    if (themeName === "light") {
        // Светлая тема с оранжевыми акцентами
        root.style.setProperty("--bg", "#f0f4ff");
        root.style.setProperty("--panel", "#ffffff");
        root.style.setProperty("--card", "#ffffff");
        root.style.setProperty("--muted", "#666666");
        // Оранжевая палитра для светлой темы
        root.style.setProperty("--accent", "#ff8800");
        root.style.setProperty("--accent2", "#ffcc00");
        root.style.setProperty("--accent-light", "#ff9d33");
        root.style.setProperty("--success", "#00aa55");
        root.style.setProperty("--danger", "#cc3333");
        root.style.setProperty("--warning", "#ff9900");
        root.style.setProperty("--glass", "rgba(255, 255, 255, 0.8)");
        root.style.setProperty("--text-primary", "#1a1a1a");
        root.style.setProperty("--text-secondary", "#4d4d4d");
        root.style.setProperty("--regular-bg", "rgba(0, 170, 85, 0.15)");
        root.style.setProperty("--regular-color", "#00aa55");
        // OTC теперь оранжевый вместо синего
        root.style.setProperty("--otc-bg", "rgba(255, 136, 0, 0.15)");
        root.style.setProperty("--otc-color", "#ff8800");
        root.style.setProperty(
            "--shadow-dark",
            "0 8px 30px rgba(0, 0, 0, 0.1)",
        );
        root.style.setProperty(
            "--shadow-inset-dark",
            "inset 0 1px 0 rgba(0, 0, 0, 0.02)",
        );
        root.style.setProperty(
            "--shadow-light",
            "0 8px 30px rgba(0, 0, 0, 0.1)",
        );
    } else {
        // Тёмная тема с оранжевыми акцентами
        root.style.setProperty("--bg", "#050814");
        root.style.setProperty("--panel", "#0b1630");
        root.style.setProperty("--card", "#0d1b36");
        root.style.setProperty("--muted", "#8a94b3");
        // Оранжевая палитра для тёмной темы
        root.style.setProperty("--accent", "#ff8800");
        root.style.setProperty("--accent2", "#ffcc00");
        root.style.setProperty("--accent-light", "#ff9d33");
        root.style.setProperty("--success", "#00ff88");
        root.style.setProperty("--danger", "#ff5555");
        root.style.setProperty("--warning", "#ffcc00");
        root.style.setProperty("--glass", "rgba(255, 255, 255, 0.05)");
        root.style.setProperty("--text-primary", "#ffffff");
        root.style.setProperty("--text-secondary", "#b8c1e0");
        root.style.setProperty("--regular-bg", "rgba(0, 255, 136, 0.15)");
        root.style.setProperty("--regular-color", "#00ff88");
        // OTC теперь оранжевый вместо синего
        root.style.setProperty("--otc-bg", "rgba(255, 136, 0, 0.15)");
        root.style.setProperty("--otc-color", "#ff8800");
        root.style.setProperty(
            "--shadow-dark",
            "0 8px 30px rgba(2, 6, 23, 0.7)",
        );
        root.style.setProperty(
            "--shadow-inset-dark",
            "inset 0 1px 0 rgba(255, 255, 255, 0.02)",
        );
        root.style.setProperty(
            "--shadow-light",
            "0 8px 30px rgba(255, 255, 255, 0.05)",
        );
    }
    updateSignalFlags(getCurrentPairObject());
    updateHistoryDisplay();
}

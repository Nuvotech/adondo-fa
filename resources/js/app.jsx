import "./bootstrap";
import "../css/app.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import HouseContextProvider from "@/Components/HouseContext";
import NotificationBanner from "@/Components/NotificationBanner";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Adondo-fa";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <HouseContextProvider>
                <NotificationBanner />
                <App {...props} />
            </HouseContextProvider>
        );
    },
});

InertiaProgress.init({ color: "#4B5563" });

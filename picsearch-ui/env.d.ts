/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly MODE: "DEV" | "PROD"
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
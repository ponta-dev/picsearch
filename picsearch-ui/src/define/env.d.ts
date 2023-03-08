/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MODE: "DEV" | "PROD"
    readonly VITE_LOG_LEVEL: "TRACE" | "WARN" | "ERROR" | "DEBUG" | "INFO" | "SILENT"
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
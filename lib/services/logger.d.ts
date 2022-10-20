export interface LoggerProps {
    output: 'console' | 'txt' | 'json' | 'html' | 'xml' | 'csv' | 'pdf' | 'issue-tracker' | 'all' | null;
    type?: 'error' | 'warning' | 'info' | 'debug' | null;
}
declare class Logger {
    output: "all" | "html" | "json" | "console" | "txt" | "xml" | "csv" | "pdf" | "issue-tracker" | null;
    type: "error" | "warning" | "info" | "debug" | null | undefined;
    constructor(props: LoggerProps);
    handleConsoleOutput(message: string): void;
    handleTxtOutput(message: string): void;
    handleJsonOutput(message: string): void;
    handleHtmlOutput(message: string): void;
    handleXmlOutput(message: string): void;
    handleCsvOutput(message: string): void;
    handlePdfOutput(message: string): void;
}
export default Logger;

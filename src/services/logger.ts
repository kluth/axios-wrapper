export interface LoggerProps {
    output: 'console' | 'txt' | 'json' | 'html' | 'xml' | 'csv' | 'pdf' | 'issue-tracker' | 'all' | null;
    type?: 'error' | 'warning' | 'info' | 'debug' | null;
}
class Logger {
    output;
    type;
    constructor(props: LoggerProps) {
        this.output = props.output;
        this.type = props.type;
    }

    handleConsoleOutput(message: string) {
        // print message to console

    }

    handleTxtOutput(message: string) {
        // save message to log.txt file

    }

    handleJsonOutput(message: string) {
        // save message to log.json file

    }

    handleHtmlOutput(message: string) {
        // save message to log.html file

    }

    handleXmlOutput(message: string) {
        // save message to log.xml file

    }

    handleCsvOutput(message: string) {
        // save message to log.csv file

    }

    handlePdfOutput(message: string) {
        // save message to log.pdf file

    }

}

export default Logger;
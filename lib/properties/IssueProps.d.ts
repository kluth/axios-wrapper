import { LabelProps } from "./LabelProps";
import { RequestProps } from "./RequestProps";
import { ResponseProps } from "./ResponseProps";
export interface IssueProps {
    title: string;
    body: string;
    labels: LabelProps[];
    Request?: RequestProps;
    Response?: ResponseProps;
}

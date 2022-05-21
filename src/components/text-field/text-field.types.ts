import { InputType } from "zlib";

export type TTextField = {
  name: string;
  label?: string;
  type?: InputType;
  autocomplete?: "true" | "false";
  autofocus?: "true" | "false";
  maxlength?: number;
  minlength?: number;
  placeholder?: string;
  value?: unknown;
  inputclass?: string;
  labelclass?: string;
};

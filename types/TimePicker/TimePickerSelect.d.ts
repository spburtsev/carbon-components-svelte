/// <reference types="svelte" />

export interface TimePickerSelectProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * Specify the select value
   * @default ""
   */
  value?: number | string;

  /**
   * Set to `true` to disable the select
   * @default false
   */
  disabled?: boolean;

  /**
   * Specify the ARIA label for the chevron icon
   * @default "Open list of options"
   */
  iconDescription?: string;

  /**
   * Specify the label text
   * @default ""
   */
  labelText?: string;

  /**
   * @default true
   */
  hideLabel?: boolean;

  /**
   * Set an id for the select element
   * @default "ccs-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * Specify a name attribute for the select element
   */
  name?: string;

  /**
   * Obtain a reference to the select HTML element
   * @default null
   */
  ref?: null | HTMLSelectElement;
}

export default class TimePickerSelect {
  $$prop_def: TimePickerSelectProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: "mouseover", cb: (event: WindowEventMap["mouseover"]) => void): () => void;
  $on(eventname: "mouseenter", cb: (event: WindowEventMap["mouseenter"]) => void): () => void;
  $on(eventname: "mouseleave", cb: (event: WindowEventMap["mouseleave"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}

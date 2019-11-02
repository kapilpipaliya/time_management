import {writable, get} from "svelte/store";

export class Tab {
  constructor() {
    this.tabIndex = writable(1);
    this.title = writable('');
    //this.fetch = this.fetch.bind(this);
  }
}
export const t = new Tab();

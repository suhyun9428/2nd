import { atom } from "jotai";

export const activeTabIndex = atom(0);
export const activeLayer = atom([{ layerKey: "box__layer", isActive: false }]);

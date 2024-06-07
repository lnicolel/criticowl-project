import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FIVE_W, PESTLE, WHEEL_OF_REASONING } from "../const/templates.mjs";

export const useTemplatesStore = create(
  persist(
    (set, get) => ({
      templates: [FIVE_W, WHEEL_OF_REASONING, PESTLE],
      addTemplate: (template) =>
        set((state) => ({ templates: [...state.templates, template] })),
      removeTemplate: (template) =>
        set((state) => ({
          templates: state.templates.filter((t) => t !== template),
        })),
      changeTemplate: (template) =>
        set((state) => ({
          templates: state.templates.map((t) =>
            t.name === template.name ? template : t
          ),
        })),
    }),
    { name: "templates" }
  )
);

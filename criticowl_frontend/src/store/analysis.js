import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAnalysisStore = create(
  persist(
    (set, get) => ({
      data: [],
      addTemplate: (template) =>
        set((state) => ({ data: [...state.data, template] })),
      removeTemplate: (template) =>
        set((state) => ({
          data: state.data.filter((t) => t !== template),
        })),
      changeTemplate: (template) =>
        set((state) => ({
          data: state.data.map((t, index) =>
            t.index === template.index ? template : t
          ),
        })),
    }),
    { name: "data" }
  )
);

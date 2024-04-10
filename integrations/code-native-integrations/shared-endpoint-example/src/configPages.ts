import { configPage } from "@prismatic-io/spectral";

export const configPages = {
  Connections: configPage({
    elements: {
      "My String": {
        stableKey: "myString",
        dataType: "string",
        defaultValue: "My Value",
      },
    },
  }),
};

export type ConfigPages = typeof configPages;

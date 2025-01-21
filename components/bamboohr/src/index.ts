import { component } from "@prismatic-io/spectral";
import actions from "./actions";
import connections from "./connections";
import triggers from "./triggers";
import { handleErrors } from "@prismatic-io/spectral/dist/clients/http";

export default component({
  key: "bamboohr",
  public: true,
  documentationUrl: "https://prismatic.io/docs/components/bamboohr/",
  display: {
    label: "BambooHR",
    description: "Manage Employees in BambooHR",
    iconPath: "icon.png",
    category: "Application Connectors",
  },
  actions,
  connections,
  triggers,
  hooks: {
    error: handleErrors,
  },
});

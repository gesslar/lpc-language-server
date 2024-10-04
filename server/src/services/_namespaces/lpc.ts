export * from "../../compiler/_namespaces/lpc.js";
export { Symbol } from "../../compiler/_namespaces/lpc.js"; // why do I have to do this?
export * from "../types.js";
export * from "../utilities.js";
export * from "../exportInfoMap.js";
export * from "../documentRegistry.js";
export * from "../sourcemaps.js";
export * from "../services.js";

import * as Completions from "./lpc.Completions.js";
export { Completions };
import * as FindAllReferences from "./lpc.FindAllReferences.js";
export { FindAllReferences };
import * as GoToDefinition from "./lpc.GoToDefinition.js";
export { GoToDefinition };
import * as Rename from "./lpc.Rename.js";
export { Rename }
import * as SymbolDisplay from "./lpc.SymbolDisplay.js";
export { SymbolDisplay };
import * as formatting from "./lpc.formatting.js";
export { formatting };
import * as JsDoc from "./lpc.JsDoc.js";
export { JsDoc };
import * as textChanges from "./lpc.textChanges.js";
export { textChanges };
import * as codefix from "./lpc.codefix.js";
export { codefix };
import * as SignatureHelp from "./lpc.SignatureHelp.js";
export { SignatureHelp };

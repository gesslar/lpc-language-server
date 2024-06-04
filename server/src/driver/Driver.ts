import { DriverLDMud } from "./DriverLdMud";
import { ensureLpcConfig } from "../backend/LpcConfig";
import { DriverFluffOS } from "./DriverFluffOS";

const supportedDriverLdMud = new DriverLDMud();
const supportedDriverFluffOS = new DriverFluffOS();

export function getDriverInfo() {
    const config = ensureLpcConfig();
    switch (config.driver.type) {
        case "ldmud":
            return supportedDriverLdMud;
        case "fluffos":
            return supportedDriverFluffOS;
        default:
            throw new Error(`Unsupported driver type: ${config.driver.type}`);
    }
}

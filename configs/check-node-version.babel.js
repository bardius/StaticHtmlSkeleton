import semver from "semver";
import chalk from "chalk";

import { engines } from "../package";

chalk.enabled = true;
chalk.level = 3;

const checkNodeVersion = function() {
    const requiredVersion = engines.node;
    const currentVersion = process.version;
    const isValidVersion = semver.satisfies(currentVersion, requiredVersion);

    if (!isValidVersion) {
        console.log(
            chalk.red(
                `Required minimum node version ${requiredVersion} not satisfied by current version ${currentVersion}.`
            )
        );
        process.exit(1);
    } else {
        console.log(
            chalk.green(
                `Required minimum node version ${requiredVersion} satisfied by current version ${currentVersion}.`
            )
        );
    }
};

checkNodeVersion();

export default checkNodeVersion;

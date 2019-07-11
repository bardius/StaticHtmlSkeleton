import endpoints from "../endpoints";

const definesConfig = {
    spaConfig: {
        react: {
            sampleApp: JSON.stringify({
                basepath: "/",
                endpoints
            })
        }
    }
};

export default definesConfig;

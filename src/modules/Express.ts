/**
 * Created by Frederic Nieto on 30/06/2016.
 */
import * as express from "express";
import ModuleGroup from "../utils/ModuleGroup";
import Module from "../utils/Module";

class ExpressModule extends Module {
    app: express.Application;
    port: number;
    constructor(moduleGroup: ModuleGroup) {
        super(moduleGroup);
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.app.listen(this.port);
    }
}
export default ExpressModule;

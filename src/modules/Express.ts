/**
 * Created by Frederic Nieto on 30/06/2016.
 */
import * as express from "express";
import ModuleGroup from "../utils/ModuleGroup";
import Module from "../utils/Module";
import {Server} from "http";
import {Router} from "express";

class ExpressModule extends Module {
    app: express.Application;
    server: Server;
    private routers: {[s: string]: express.Router};
    constructor(moduleGroup: ModuleGroup) {
        super(moduleGroup);
        this.app = express();
        let port = process.env.PORT || 8080;
        this.server = this.app.listen(port, function () {
            var host:string = this.server.address().address;
            var port:number = this.server.address().port;
            console.log('Server listening at http://%s:%s', host, port);
        });
    }

    getRouter(name: string): Router {
        let router = this.routers[name];
        if (router != null) {
            return router;
        }
        router = this.routers[name] = express.Router();
        this.app.use(name, router);
        return router;
    }
}
export default ExpressModule;

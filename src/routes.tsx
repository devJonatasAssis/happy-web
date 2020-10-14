import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import OrphanagesMap from "./screens/OrphanagesMap";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/orphanage" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

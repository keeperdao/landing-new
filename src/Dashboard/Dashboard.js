import React, { useState, lazy } from "react";
import { Grid } from "@material-ui/core";
import { SWRConfig } from "swr";
import { DashboardNavigationBar } from './NavBar'
import { DashboardPanel } from "./Panel";
import theme from "../theme";

async function fetcher(...args) {
    const res = await fetch(...args);
    return res.json()
}

function Dashboard(props) {

    const [activePanelIndex, setActivePanelIndex] = useState(() => 0);

    return (
        <Grid
            variant="dashboard-component-container"
            container
        >
            <Grid
                variant="navigation-bar-container"
                columns={{ sm: 5, min: 2, xs: 1 }}
                py={theme.spacing(1)}
                container
                item
            >
                <DashboardNavigationBar
                    buttons={props.buttons}
                    activePanelIndex={activePanelIndex}
                    changeActivePanelIndex={event => setActivePanelIndex(event?.target?.value)}
                />
            </Grid>
            <Grid
                variant="panel-component-container"
                columns={{ sm: 2, min: 2, xs: 1 }}
                py={theme.spacing(5)}
                container
                item
            >
                <SWRConfig value={{ fetcher: fetcher }}>
                    <DashboardPanel
                        buttons={props.buttons}
                        properties={props.properties}
                        activePanelIndex={activePanelIndex}
                    />
                </SWRConfig>
            </Grid>
        </Grid>
    );
}

export { Dashboard };

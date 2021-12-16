import React, { useState } from "react";
import { Grid, Typography, SvgIcon } from "@material-ui/core";
import { TileNavigationBar } from "./NavBar";
import useSWR from 'swr'
import Chart from "./Charts";
import Logo from "../../public/icon.svg";
import theme from "../theme";

function Tile(props) {

    const [activeOption, setActiveOption] = useState(() => props.optionsFilter ? props.optionsFilter[0] : "week")
    const [activeSelection, setActiveSelection] = useState(() => props.selectionsFilter ? props.selectionsFilter[0] : "")
    const { response: chartData, error } = dataRequest({ route: props.route2, identifier: props.identifier2, arguments: { range: activeOption } })

    console.log(chartData)

    return (
        <Grid
            variant="tile-inner-container"
        >
            <TileNavigationBar
                activeOption={activeOption}
                activeSelection={activeSelection}
                changeActiveOption={event => setActiveOption(event?.target?.innerHTML)}
                changeActiveSelection={event => setActiveSelection(event?.target?.value)}
                {...props}
            />
            {props.type == "Area" &&
                <>
                    <DataBlock
                        variant="headingDisplay"
                        color={theme.palette.text.primary_dark}
                        {...props}
                    />
                    <Chart
                        data={chartData}
                        {...props}
                    />
                </>
            }
            {props.type == "Bar" &&
                <Chart
                    data={chartData}
                    {...props}
                />
            }
            {props.type == "Info"
                && <Typography
                    variant="headingDisplay"
                    color={theme.palette.text.primary_darks}
                    paragraph
                >
                    {"To date, "}
                    <DataBlock
                        variant="headingDisplay"
                        color={theme.palette.accent}
                        {...props}
                    />
                    {" users have saved "}
                    <DataBlock
                        variant="headingDisplay"
                        color={theme.palette.accent}
                        prefix="Ξ "
                        {...props}
                    />
                    {" in gas and earned "}
                    <DataBlock
                        variant="headingDisplay"
                        color={theme.palette.accent}
                        {...props}
                    />
                    {" ROOK by using the Hiding Game for limit orders."}
                </Typography>
            }
            {!props.type &&
                <DataBlock
                    variant="headingTitle"
                    color={theme.palette.text.primary_dark}
                    my={theme.spacing(2)}
                    {...props}
                />
            }
        </Grid>
    );
}

function DataBlock(props) {

    let { response, error } = dataRequest({ route: props.route, identifier: props.identifier })
    //basic error logging
    error && console.log(props.title + " " + error.toString())
    response = response !== "" ? response : Math.random() * 10000;

    return (
        <Typography
            variant={props.variant}
            color={props.color}
            noWrap
        >
            {props.prefix == "R"
                ? <SvgIcon
                    color="inherit"
                    component={Logo}
                    viewBox={"0 0 400 400"}
                />
                : props.prefix
            }
            {" " + response?.toLocaleString(undefined, { 'maximumFractionDigits': 2 })}
            {" " && props.suffix}
        </Typography>
    );
}

function dataRequest(props) {
    const { data: response, error } = useSWR(props?.route + new URLSearchParams(props.arguments)?.toString())
    return ({
        response: response != null ? response[props?.identifier] : "",
        error: error
    })
}

export { Tile };

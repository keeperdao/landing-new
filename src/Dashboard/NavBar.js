import React, { useMemo } from "react";
import { Grid, Button, Typography, MenuItem, Select } from "@material-ui/core";
import theme from "../theme";

function DashboardNavigationBar(props) {
  const buttonArray = useMemo(() => React.Children.map(props.buttons, (buttonText, index) =>
    <Grid
      sm={1} min={1} xs={1}
      px={theme.spacing(1)}
      item
    >
      <Button
        variant="navigation-bar-button"
        active={index == props.activePanelIndex ? 1 : 0}
        onClick={props.changeActivePanelIndex}
        value={index}
      >
        {buttonText}
      </Button>
    </Grid>
    ), [props.activePanelIndex])
    return buttonArray;
}

function TileNavigationBar(props) {
  const optionsArray = React.Children.map(props.optionsFilter, (optionText, index) =>
    <Grid item>
      <Typography
        variant="paragraphBoldLabelLink"
        active={props.activeOption == optionText ? 1 : 0}
        onClick={props.changeActiveOption}
        value={index}
        noWrap
      >
        {optionText}
      </Typography>
    </Grid>
  )
    const selectionArray = React.Children.map(props.selectionsFilter, (selectionText, index) =>
      <MenuItem value={selectionText}>
        <Typography
          variant="paragraphBoldLabelLink"
          color={theme.palette.text.primary_dark}
          noWrap
        >
          {selectionText}
        </Typography>
      </MenuItem>
    )
    return (
      <Grid
        variant="header-container"
        container
        directiom="row"
        rows={{ xs: 1 }}
      >
        <Grid item>
          <Typography
            variant="paragraphBoldLabel"
            color={theme.palette.accent}
            noWrap
          >
            {props.title}
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            variant="filter-container"
            container
            item
            spacing={1}
          >
            {
              props.optionsFilter
              && optionsArray
            }
            {
              props.selectionsFilter
              && <Grid item>
                    <Select
                      value={props.activeSelection}
                      onChange={props.changeActiveSelection}
                    >
                      {selectionArray}
                    </Select>
                  </Grid>
            }
          </Grid>
        </Grid>
      </Grid>
    )
}

export { DashboardNavigationBar, TileNavigationBar };
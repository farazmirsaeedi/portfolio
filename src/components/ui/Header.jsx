import { cloneElement } from "react";
import { AppBar, Toolbar, Button, useScrollTrigger } from "@mui/material";

const Header = () => {
  function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <p>وب سایت شخصی یونس قربانی</p>
            <Button variant="text" color="secondary">
              کلیک کن
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;

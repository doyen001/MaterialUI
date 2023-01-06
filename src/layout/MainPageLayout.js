import { Box } from "@material-ui/core";

import FirstHeader from "./FirstHeader";
const MainPageLayout = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <FirstHeader />
    </Box>
  );
};
export default MainPageLayout;

import { useEffect } from "react";
import NProgress from "nprogress";

const SuspenseLoader = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    // <Box
    //   sx={{
    //     position: "fixed",
    //     left: 0,
    //     top: 0,
    //     width: "100%",
    //     height: "100%",
    //   }}
    //   display="flex"
    //   alignItems="center"
    //   justifyContent="center"
    // >
    <div>
      <p>Processing..</p>
    </div>
    // </Box>
  );
};

export default SuspenseLoader;

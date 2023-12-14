import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import { Helmet } from "react-helmet-async";

const HomePageWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
    `
);

const HomePage = () => {
    return (
        <HomePageWrapper>
            <Helmet>
                <title>Overview this Project</title>
            </Helmet>
            <Container maxWidth='lg'>
                <Box display='flex' justifyContent='center' py={5} alignItems='center'>
                    <p>Hello world from home</p>
                </Box>
            </Container>
        </HomePageWrapper>
    );
};

export default HomePage;

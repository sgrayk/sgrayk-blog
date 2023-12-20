import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";

const HomePageWrapper = styled('div')(
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
            <div>
                <div>
                    <p>Hello world from home</p>
                </div>
            </div>
        </HomePageWrapper>
    );
};

export default HomePage;

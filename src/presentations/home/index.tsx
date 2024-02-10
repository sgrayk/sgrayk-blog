import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

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
                    <Link to={"/specialgift/tet-2024"}>Tết cho em Dzịte iu dấu (nhấn vô nhé)</Link>
                    <span>Tết này hơi bận nên anh hăm làm choa chu đáo đuộc nghoen</span>
                    <span>Hẹn pé sự kiện sau nè</span>
                </div>
            </div>
        </HomePageWrapper>
    );
};

export default HomePage;

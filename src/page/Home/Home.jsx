import { Helmet } from "react-helmet";
import Banner from "../../components/HomeCompo/Banner/Banner";
import OurUsers from "../../components/HomeCompo/OurUsers/OurUsers";
import Container from "../../components/ui/Container";


const Home = () => {
    return (
        <Container>
          <Helmet>
        <title>SCC Tech | Home</title>
      </Helmet>
      <Banner/>
      <OurUsers/>
        </Container>
    );
};

export default Home;
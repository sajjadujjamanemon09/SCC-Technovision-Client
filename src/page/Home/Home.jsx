import Banner from "../../components/HomeCompo/Banner/Banner";
import OurUsers from "../../components/HomeCompo/OurUsers/OurUsers";
import Container from "../../components/ui/Container";


const Home = () => {
    return (
        <Container>
      <Banner/>
      <OurUsers/>
        </Container>
    );
};

export default Home;
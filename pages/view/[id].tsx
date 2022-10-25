import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { Wrapper } from "../../components/Wrapper";

const View = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
};

export default View;

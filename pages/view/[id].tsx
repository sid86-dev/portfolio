import { useRouter } from "next/router";

const View = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return;
};

export default View;

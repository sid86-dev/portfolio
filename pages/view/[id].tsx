import { useRouter } from "next/router";
import React from "react";

const View = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return;
};

export default View;

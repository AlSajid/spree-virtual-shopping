import getServer from "@/utils/getServer";
import { useEffect, useState } from "react";


const useFeatured = () => {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    fetch(`${getServer()}featured`, {
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_JWT_SECRET,
      },
    })
      .then((res) => res.json())
      .then((data) => setFeatured(data))
      .catch((err) => console.log(err));
  }, []);

  return { featured };
};

export default useFeatured;

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import useUser from "./useUser";
import getServer from "@/utils/getServer";

const useCart = () => {
  const { user } = useUser();
  const [cart, setCart] = useState([]);

  const updateCart = () => {
    if (!user) return;

    fetch(`${getServer()}cart`, {
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_JWT_SECRET,
        uid: user?.uid,
      },
    })
      .then((res) => res.json())
      .then((data) => setCart(data));
  };

  const handleAddToCart = (productID:string) => {
    if (!user) {
      toast.error("You must signed in to add to cart");
      return;
    }

    if (cart.find((item) => item.product._id === productID)) {
      toast("Already added", { icon: "👏", duration: 1000 });
      return;
    }

    const addToCart = fetch(`${getServer()}cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_JWT_SECRET,
      },
      body: JSON.stringify({ product: productID, uid: user.uid }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => toast.error(err));

    toast.promise(addToCart, {
      loading: "Adding to cart...",
      success: (response: any) => {
        if (response.success === "added") {
          updateCart();
          return "Successfully added to cart";
        } else throw new Error();
      },
      error: "Something went wrong!",
    });
  };

  useEffect(() => {
    updateCart();
  }, [user]);

  return { cart, updateCart, handleAddToCart, setCart };
};

export default useCart;

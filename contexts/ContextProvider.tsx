"use client";

import useCart from "@/hooks/useCart";
import useFeatured from "@/hooks/useFeatured";
import useUser from "@/hooks/useUser";
import React, { createContext } from "react";

export const AllContexts = createContext({});

const ContextProvider = ({ children }: any) => {
  const featuredContexts = useFeatured();
  const UserContexts = useUser();
  const CartContexts = useCart();

  const allContexts = {
    ...featuredContexts,
    ...UserContexts,
    ...CartContexts,
  };

  return (
    <AllContexts.Provider value={allContexts}>{children}</AllContexts.Provider>
  );
};

export default ContextProvider;

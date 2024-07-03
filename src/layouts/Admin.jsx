import React from "react";
import { Outlet } from "react-router-dom";
import { BlogFormProvider } from "@/context/CreateBlogFromContext";

const Admin = () => {
  return (
    <div className="">
      <BlogFormProvider>
        <Outlet />
      </BlogFormProvider>
    </div>
  );
};

export default Admin;

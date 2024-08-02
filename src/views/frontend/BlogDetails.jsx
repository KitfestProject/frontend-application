import {
  DynamicHelmet,
  Navigation,
  Footer,
  ClientBlogsDetailsComponent,
} from "@/components";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { useContext, useEffect } from "react";
import { StateContext } from "@/context/ContextProvider";
import { useLocation } from "react-router-dom";

const BlogDetails = () => {
  const { getSingleBlog } = useServerSideQueries();
  const { blogDetails, setBlogDetails, setStateLoading } = useContext(StateContext);
  const location = useLocation();

  const blogId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchSingleBlog = async () => {
      setStateLoading(true);
      const { success, message, data } = await getSingleBlog(blogId);

      if (!success) {
        setStateLoading(false);
        return toast.error(message);
      }

      setBlogDetails(data);
      setStateLoading(false);
    };

    fetchSingleBlog();
  }, []);

  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title={`KITFT - Blog Details: ${blogDetails?.name}`}
        description={blogDetails?.description}
        keywords={blogDetails?.tags.map((tag) => tag).join(", ")}
        seoImage={blogDetails?.cover_image}
        seoTitle={blogDetails?.name}
        seoDescription={blogDetails?.description}
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Blogs Section */}
      <ClientBlogsDetailsComponent />

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default BlogDetails;

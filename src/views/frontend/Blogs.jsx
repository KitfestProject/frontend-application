import {
  DynamicHelmet,
  Navigation,
  Footer,
  ClientBlogsComponent,
} from "@/components";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { useContext, useEffect } from "react";
import { StateContext } from "@/context/ContextProvider";

const Blogs = () => {
  const { start, limit, setBlogData, setStateLoading } =
    useContext(StateContext);
  const { getClientBlogs } = useServerSideQueries();

  useEffect(() => {
    const fetchClientBlogs = async () => {
      setStateLoading(true);
      const { success, message, data } = await getClientBlogs(start, limit);

      if (!success) {
        setStateLoading(false);
        return toast.error(message);
      }

      setBlogData(data);
      setStateLoading(false);
    };

    fetchClientBlogs();
  }, [start, limit]);

  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Blogs Page"
        description="Read our latest blogs and get informed."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Blogs Section */}
      <ClientBlogsComponent />

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default Blogs;

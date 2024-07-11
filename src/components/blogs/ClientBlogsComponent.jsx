import {
  AllSiteBlogs,
  BlogsTitleArea,
  EditorSelectionBlogs,
} from "@/components";

const ClientBlogsComponent = () => {
  return (
    <div className="dark:text-white">
      <div className="container py-10">
        {/* Blogs Title Area */}
        <BlogsTitleArea />

        {/* All Blogs */}
        <AllSiteBlogs />

        {/* Editors Selected Blogs */}
        <EditorSelectionBlogs />
      </div>
    </div>
  );
};

export default ClientBlogsComponent;

import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const CreateBlogFromContext = createContext();

export const BlogFormProvider = ({ children }) => {
  const initialBlogForm = {
    name: "",
    description: "",
    category: "",
    tags: [],
    cover_image: null,
    content: "",
    active: true,
  };
  const [blogFormData, setBlogFormData] = useState(initialBlogForm);

  const isTitleFilled = blogFormData.name !== "";

  const isDescriptionFilled = blogFormData.description !== "";

  const isCategoryFilled = blogFormData.category !== "";

  const isTagsFilled = blogFormData.tags.length && blogFormData.tags.length > 0;

  const isContentFilled = blogFormData.content !== "";

  const isCoverImageFilled = blogFormData.cover_image !== null;

  const isAllInformationFilled =
    isTitleFilled &&
    isDescriptionFilled &&
    isCategoryFilled &&
    isTagsFilled &&
    isContentFilled &&
    isCoverImageFilled;

  // Get blog by id or slug
  const getBlogByIdSlug = async (id) => {
    return initialBlogForm;
  };

  return (
    <CreateBlogFromContext.Provider
      value={{
        blogFormData,
        isTagsFilled,
        isTitleFilled,
        setBlogFormData,
        initialBlogForm,
        getBlogByIdSlug,
        isContentFilled,
        isCategoryFilled,
        isCoverImageFilled,
        isDescriptionFilled,
        isAllInformationFilled,
      }}
    >
      {children}
    </CreateBlogFromContext.Provider>
  );
};

BlogFormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

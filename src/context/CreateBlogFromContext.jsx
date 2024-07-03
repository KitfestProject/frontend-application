import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const CreateBlogFromContext = createContext();

const initialBlogForm = {
  title: "",
  description: "",
  category: "",
  tags: [],
  coverImage: null,
  content: "",
};

export const BlogFormProvider = ({ children }) => {
  const [blogFormData, setBlogFormData] = useState(initialBlogForm);

  const isTitleFilled = blogFormData.title !== "";

  const isDescriptionFilled = blogFormData.description !== "";

  const isCategoryFilled = blogFormData.category !== "";

  const isTagsFilled = blogFormData.tags.length && blogFormData.tags.length > 0;

  const isContentFilled = blogFormData.content !== "";

  const isCoverImageFilled = blogFormData.coverImage !== null;

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

const useTruncate = () => {
  function truncateDescription(description, count = 200) {
    const maxLength = count;
    const fullDescription = Array.isArray(description)
      ? description.join(" ")
      : description;

    if (fullDescription.length > maxLength) {
      return fullDescription.slice(0, maxLength) + "...";
    }
    return fullDescription;
  }

  return { truncateDescription };
};

export default useTruncate;

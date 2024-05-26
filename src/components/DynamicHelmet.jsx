import { Helmet, HelmetProvider } from "react-helmet-async";

const DynamicHelmet = ({
  title,
  description,
  keywords,
  seoImage = null,
  seoTitle = null,
  seoDescription = null,
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        {seoImage && <meta property="og:image" content={seoImage} />}
        {seoTitle && <meta property="og:title" content={seoTitle} />}
        {seoDescription && (
          <meta property="og:description" content={seoDescription} />
        )}
      </Helmet>
    </HelmetProvider>
  );
};

export default DynamicHelmet;

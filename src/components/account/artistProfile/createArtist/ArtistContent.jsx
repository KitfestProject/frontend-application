import { FaMessage } from "react-icons/fa6";
import { Editor } from "@tinymce/tinymce-react";
import { CreateArtistContext } from "@/context/CreateArtistFormContext";
import { useContext } from "react";

const apiKey = import.meta.env.VITE_TINY_MCE_API_KEY;

const ArtistContent = () => {
  const { artistFormData, setArtistFormData } = useContext(CreateArtistContext);

  const handleContentChange = (content) => {
    setArtistFormData((prev) => ({
      ...prev,
      description: content,
    }));
  };

  return (
    <div className="mt-5 pb-5">
      <h1 className="text-xl font-bold flex gap-2 items-center mb-5">
        <FaMessage className="text-xl text-primary dark:text-gray" /> Artist
        Content
      </h1>

      <div className="">
        <label
          htmlFor="event-description"
          className="text-dark dark:text-slate-100 font-bold text-sm"
        >
          Artist Content
        </label>
        <small className="block text-gray mb-1">
          Enter the content of the artist to be displayed on the artist page.
        </small>
        <Editor
          apiKey={apiKey}
          initialValue="<p>Type your artist content here...</p>"
          init={{
            height: 300,
            menubar: false,
            plugins:
              "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onEditorChange={handleContentChange}
        />
      </div>
    </div>
  );
};

export default ArtistContent;

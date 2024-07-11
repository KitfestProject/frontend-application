import { useEffect, useState } from "react";
import { EditorPicks, EditorPicksSkeleton } from "@/components";

const EditorSelectionBlogs = () => {
  const [loading, setLoading] = useState(true);

  const generateEditorPicksSkeleton = () => {
    const editors = [];
    for (let i = 0; i < 2; i++) {
      editors.push(<EditorPicksSkeleton key={i} />);
    }

    return editors;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="border-t border-gray/30 pt-10">
      <h1 className="text-3xl font-bold tracking-tighter text-dark mb-5">
        Editor picks
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {loading && generateEditorPicksSkeleton()}

        {!loading && (
          <>
            <EditorPicks
              title="Exploring Kenyan Theater: A Journey Through History"
              image="/images/Editor-pick-2.svg"
              summary="Discover the influential plays, renowned playwrights, and iconic
          performances that have shaped the theatrical landscape in Kenya."
              timestamp="Apr 15, 2024 | Jane Wangui"
            />
            <EditorPicks
              title="Exploring Kenyan Theater: A Journey Through History"
              image="/images/Editor-pick-1.svg"
              summary="Discover the influential plays, renowned playwrights, and iconic
          performances that have shaped the theatrical landscape in Kenya."
              timestamp="Apr 15, 2024 | Jane Wangui"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default EditorSelectionBlogs;

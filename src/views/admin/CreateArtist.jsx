import {
  DynamicHelmet,
  UserNavigation,
  CreateArtistComponent,
} from "@/components";
import { useContext, useEffect } from "react";
import { CreateArtistContext } from "@/context/CreateArtistFormContext";

const CreateArtist = () => {
  const { clearArtistForm } = useContext(CreateArtistContext);

  useEffect(() => {
    clearArtistForm();
  }, []);

  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Create Artists"
        description="Create New Artists"
      />
      <UserNavigation />

      <CreateArtistComponent />
    </div>
  );
};

export default CreateArtist;

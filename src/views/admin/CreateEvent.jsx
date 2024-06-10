import {
  ThemeChanger,
  DynamicHelmet,
  UserNavigation,
  CreateEventComponent,
} from "@/components";
import { EventFormProvider } from "@/context/CreateEventFormContext";

const CreateEvent = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Create Event"
        description="Create an event and manage them."
      />
      <UserNavigation />

      <EventFormProvider>
        <CreateEventComponent />
      </EventFormProvider>

      <ThemeChanger />
    </div>
  );
};

export default CreateEvent;

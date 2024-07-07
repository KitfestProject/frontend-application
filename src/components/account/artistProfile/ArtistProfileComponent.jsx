import { DashboardSidebar, ArtistProfileOverview } from "@/components";

const ArtistProfileComponent = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-10">
        <DashboardSidebar />

        <ArtistProfileOverview />
      </div>
    </section>
  );
};

export default ArtistProfileComponent;

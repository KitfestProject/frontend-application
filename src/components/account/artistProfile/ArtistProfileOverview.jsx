import {
  ArtistPerformance,
  ArtistTable,
  ArtistOverviewTitle,
  ArtistStartsComponent,
} from "@/components";

const ArtistProfileOverview = () => {
  return (
    <div className="w-full md:w-[75%]">
      {/* Artist Overview Title */}
      <ArtistOverviewTitle />

      {/* Artists Stats */}
      {/* <ArtistStartsComponent /> */}

      {/* Artist Performance */}
      {/* <ArtistPerformance /> */}

      {/* Artists Table */}
      <ArtistTable />
    </div>
  );
};

export default ArtistProfileOverview;

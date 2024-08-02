const TheaterContentComponent = ({ venueDetails }) => {
  return (
    <div className="w-full md:w-[70%]">
      <div
        className="py-5 md:py-10"
        dangerouslySetInnerHTML={{
          __html: venueDetails?.description,
        }}
      />
    </div>
  );
};

export default TheaterContentComponent;

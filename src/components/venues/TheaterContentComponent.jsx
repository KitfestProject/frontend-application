const TheaterContentComponent = () => {
  return (
    <div className="w-full md:w-[70%]">
      <div className="py-5 md:py-10">
        <p>
          The Kenya National Theatre, located in the heart of Nairobi, is a
          premier venue for performing arts in Kenya. Established in 1952, this
          iconic theatre has been the stage for countless memorable
          performances, from gripping dramas and vibrant musicals to
          thought-provoking plays and captivating dance shows.
        </p>

        <h5 className="text-dark text-xl font-semibold mt-5">
          Venue Features:
        </h5>

        <ul className="list-disc px-5">
          <li>
            Seating Capacity: 345 seats, offering an intimate yet grand
            experience.
          </li>
          <li>
            Facilities: Modern lighting and sound systems, spacious dressing
            rooms, and a comfortable lounge area.
          </li>
          <li>
            Location: Conveniently situated along Harry Thuku Road, near key
            landmarks and public transport.
          </li>
          <li>
            In-built excellent facilities comprise a 345-seater modern
            auditorium (Stalls 278; Balcony 67 seats), a 9 by 10 meters’
            proscenium performance Stage, 4 fully equipped performers' backstage
            Changing Rooms with a Wardrobe Room, a Modern Kitted Dance Studio, 3
            Rehearsal Spaces, 2 Seminar/Discussion Rooms, Double Freshen-Up
            Shower Rooms and 2 Kitchenettes.
          </li>
        </ul>

        <h5 className="text-dark text-xl font-semibold mt-5">Highlights:</h5>
        <ul className="list-disc px-5">
          <li>
            History: A cornerstone of Kenya’s cultural heritage, the theatre has
            hosted both local and international artists.
          </li>
          <li>
            Mission: Dedicated to promoting Kenyan arts and culture, providing a
            platform for emerging and established talents.
          </li>
        </ul>

        <p className="mt-5">
          <b className="text-dark font-semibold dark:text-primary">Events:</b>{" "}
          Regularly features a diverse array of performances, workshops, and
          festivals.
        </p>

        {/* Article Image */}
        <div className="mt-5 md:mt-10">
          <img
            src="/images/article-image.svg"
            alt="Theater Banner"
            className="w-full h-[352px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TheaterContentComponent;

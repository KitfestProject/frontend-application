const UserProfileSection = () => {
  return (
    <div className="w-full mb-10">
      <div className="flex items-center gap-5">
        <div className="w-[180px] h-[180px] bg-gray-300 dark:bg-darkGray rounded-lg shadow-md">
          <img
            src={"/images/profile-1.jpg"}
            alt="Artist Profile"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        <div className="">
          <h2 className="text-2xl font-sans font-bold text-gray-800 mb-2 dark:text-gray-100 text-primary tracking-tighter dark:text-gray">
            Artist Name
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-300 text-gray leading-tight uppercase">
            scriptwriter, Thespian
          </p>
        </div>
      </div>

      {/* Artist Description */}
      <div className="mt-5 md:pr-5">
        <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
          About Jane
        </h5>
        <p className="text-gray-600 dark:text-gray-300 leading-tight mb-5">
          Jane is a renowned thespian based in Nairobi, Kenya. With a background
          in theatre arts from the University of Nairobi, Jane has spent over a
          decade honing her craft and captivating audiences with her unique
          style. Her work spans a variety of mediums, including painting,
          sculpture, and digital art, often blending traditional techniques with
          contemporary themes.
        </p>
        <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
          Artistic Journey
        </h5>
        <p className="text-gray-600 dark:text-gray-300 leading-tight mb-5">
          Jane's journey as an artist began at a young age, inspired by the
          vibrant culture and natural beauty of her homeland. Her early works
          reflected the landscapes and daily life of Kenya, capturing the
          essence of her surroundings with vivid colors and intricate details.
          Over the years, Jane has evolved her style, experimenting with
          abstract forms and bold expressions that challenge conventional
          perspectives.
        </p>
        <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
          Notable Works and Exhibitions
        </h5>
        <p className="text-gray-600 dark:text-gray-300 leading-tight mb-5">
          Jane's portfolio boasts a wide array of notable works, including the
          acclaimed series "Urban Rhythms," which explores the dynamic energy of
          city life, and "Echoes of Heritage," a collection that delves into the
          rich history and traditions of Kenyan communities. Her pieces have
          been featured in prestigious galleries and exhibitions both locally
          and internationally, such as the Nairobi National Museum, the African
          Contemporary Art Fair in London, and the New York Art Expo.
        </p>
        <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
          Awards and Recognition
        </h5>
        <p className="text-gray-600 dark:text-gray-300 leading-tight mb-5">
          Jane has received numerous accolades for her contributions to the art
          world. She was honored with the Young African Artist Award in 2015 and
          the Global Art Innovation Prize in 2018. Her work continues to be
          celebrated for its originality, depth, and ability to connect with a
          diverse audience.
        </p>
        <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
          Artistic Philosophy
        </h5>
        <p className="text-gray-600 dark:text-gray-300 leading-tight mb-5">
          At the heart of Jane's art is a desire to tell stories that resonate
          with people from all walks of life. She believes that art is a
          powerful tool for communication and change, capable of inspiring
          reflection and fostering a deeper understanding of our shared human
          experience. Through her art, Jane seeks to bridge cultural divides and
          encourage a dialogue that transcends borders.
        </p>
        <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
          Get in Touch
        </h5>
        <p className="text-gray-600 dark:text-gray-300 leading-tight mb-5">
          For inquiries about commissions, upcoming exhibitions, or
          collaborations, please contact Jane Doe via email at
          janedoeart@example.com. Follow her on social media to stay updated on
          her latest projects and creative endeavors:
        </p>
        <ul>
          <li>Instagram: @janedoeart</li>
          <li>Twitter: @janedoeart</li>
          <li>Facebook: Jane Doe Art</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfileSection;

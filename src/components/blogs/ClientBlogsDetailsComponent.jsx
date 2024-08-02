import { useContext } from "react";
import ProfileAvatar from "/images/profile-avatar.svg";
import { StateContext } from "@/context/ContextProvider";
import useTimeAgo from "@/hooks/useTimeAgo";

const ClientBlogsDetailsComponent = () => {
  const { blogDetails } = useContext(StateContext);
  const { formatBlogDate } = useTimeAgo();

  return (
    <div className="dark:bg-darkGray">
      <div className="container pb-20">
        {/* Blog Image */}
        <div className="w-full md:h-[480px] bg-cover bg-center bg-no-repeat my-10 bg-primary">
          <img
            className="w-full h-[200px] md:h-full object-cover rounded-md"
            src={blogDetails?.cover_image}
            alt={blogDetails?.name}
          />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[70%]">
            {/* Blog Title */}
            <div className="max-w-[500px]">
              <h1 className="text-4xl font-bold tracking-tighter mt-5">
                {blogDetails?.name}
              </h1>
            </div>

            {/* Blog Author */}
            <p className="text-sm text-gray mt-3 dark:text-gray">
              Posted on {formatBlogDate(blogDetails?.created_at)}
            </p>

            {/* Blog Content Area */}
            <div
              dangerouslySetInnerHTML={{
                __html: blogDetails?.content,
              }}
              className="pr-5 border-b border-gray/30 py-10"
            />
            {/* <p className="mt-3">
                Kenya, known for its stunning landscapes and rich cultural
                tapestry, also boasts a vibrant and dynamic theater scene that
                has evolved over the decades. From traditional performances to
                contemporary plays, Kenyan theater offers a fascinating journey
                through history, reflecting the country's social, political, and
                cultural transformations. Let's dive into the world of Kenyan
                theater and explore its captivating history!
              </p>

              <h5 className="font-bold mt-3 text-lg">
                The Roots: Traditional Performances
              </h5>

              <p className="">
                Kenyan theater has deep roots in traditional African
                performances. Long before the advent of modern theater,
                communities across Kenya used storytelling, dance, music, and
                rituals to pass down history, teach morals, and entertain. These
                performances were often held in open spaces, where villagers
                gathered to witness the tales of their ancestors brought to life
                through energetic dances and captivating narratives.
              </p>

              <h5 className="font-bold mt-3 text-lg">
                Colonial Influence and the Birth of Modern Theater
              </h5>

              <p className="">
                The arrival of British colonialists in the late 19th and early
                20th centuries brought significant changes to Kenya's cultural
                landscape. The colonial period saw the introduction of
                Western-style theater, primarily through mission schools and
                colonial administrators. These early performances often featured
                adaptations of European plays, aimed at educating and
                “civilizing” the local population.
              </p>

              <div className="mt-3">
                <img
                  src="/images/blog-article-image.svg"
                  class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                  alt=""
                />
              </div>

              <h5 className="font-bold mt-3 text-lg">
                Contemporary Kenyan Theater: A Fusion of Tradition and Modernity
              </h5>

              <p className="">
                Today, Kenyan theater is a vibrant mix of traditional and modern
                influences. The National Theatre in Nairobi remains a central
                hub for theatrical performances, hosting a variety of shows
                ranging from classic plays to contemporary works. Meanwhile,
                smaller, independent theater groups continue to push the
                boundaries of storytelling and performance.
              </p>

              <p className="mt-3">
                Contemporary Kenyan playwrights and directors are exploring a
                wide range of themes, from urban life and identity to gender
                issues and global politics. Productions are increasingly
                incorporating multimedia elements, blending live performance
                with digital art, music, and dance to create immersive
                experiences.
              </p>

              <h5 className="font-bold mt-3 text-lg">
                The Impact of Festivals and International Collaborations
              </h5>

              <p className="">
                The growth of theater festivals in Kenya, such as the Kenya
                International Theatre Festival (KITF) and the Sigana
                International Storytelling Festival, has played a significant
                role in promoting and celebrating Kenyan theater. These
                festivals provide platforms for local and international artists
                to showcase their work, exchange ideas, and collaborate on new
                projects.
              </p>

              <h5 className="font-bold mt-3 text-lg">
                Conclusion: A Bright Future Ahead
              </h5>
              <p className="">
                Kenyan theater has come a long way from its traditional roots to
                become a powerful and dynamic force in the cultural landscape.
                Its ability to adapt and evolve while staying true to its core
                identity is a testament to the creativity and resilience of
                Kenyan artists. As we look to the future, Kenyan theater
                promises to continue captivating audiences, sparking
                conversations, and reflecting the ever-changing society from
                which it springs.
              </p>

              <p className="mt-3">
                So, next time you find yourself in Kenya, make sure to catch a
                play or attend a theater festival. You'll be embarking on a
                journey through history, culture, and the human spirit— one
                performance at a time.
              </p> */}
            {/* </div> */}

            {/* Author */}
            <div className="">
              <div className="flex items-center mt-5">
                <div className="w-[80px] md:w-12 h-12 bg-cover bg-center rounded-full">
                  <img
                    src={ProfileAvatar}
                    alt="Author Image"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="ml-3">
                  <h5 className="font-bold">John Doe</h5>
                  <p className="text-sm text-gray">
                    By Jane Wangui Wangui particularly enjoys musicals and has a
                    passion for writing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[30%]">
            {/* Stay Updated */}
            <div className="">
              <div className="bg-white shadow-md dark:bg-darkGray rounded-md p-5 mt-5 dark:border dark:border-gray/30">
                <h5 className="font-bold text-lg">Stay Updated</h5>
                <p className="text-gray mt-3">
                  Be the first to know all the latest theater news with the
                  Theater KE newsletter. Subscribe to our newsletter to get our
                  latest news.
                </p>

                <form action="" className="my-5">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray/50 p-2 rounded outline-none focus:outline-none dark:bg-darkGray dark:text-white placeholder:italic font-thin"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white mt-3 rounded-md p-2"
                  >
                    Subscribe
                  </button>
                </form>

                <small className="text-gray leading-tight">
                  Sign in now to receive updates on news, shows, exclusive
                  discounts and more. We respect your privacy and you can
                  unsubscribe any time, though we hope you will stick around.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBlogsDetailsComponent;

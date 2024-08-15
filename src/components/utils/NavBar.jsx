import React, { useState } from "react";
import { FaArrowRightLong, FaAngleRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const andelaNavLinkData = [
  {
    item: "Why Andela",
    content: [
      {
        subMenuTitle: "Why Andela",
        subMenuDescription:
          "Our vast network of technologies and AI-driven matching helps you hire the world's best.",
        subMenuLink: "https://www.andela.com/why-andela",
        subMenuImageUrl:
          "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/665a686cac4ba590aeda2c34_ForCompanies_AdaptiveHiring_5-steps-to-building-a-successful-global-team_InteriorPage-dd.png",
      },
      {
        subMenuList: [
          {
            title: "Our Talent Community",
            description:
              "We don’t just find the best talent — we cultivate it.",
          },
          {
            title: "Untapped Talent Markets",
            description: "The talent you need is in untapped emerging markets.",
          },
          {
            title: "Mission Focussed!",
            description:
              "Andela talent improves their career trajectories and quality of life.",
          },
        ],
        subMenuMoreLinks: {
          title: "Impact",
          links: [
            {
              title: "Customer Stories",
              link: "https://www.andela.com/why-andela",
            },
            {
              title: "Forrester total economic impact (TEI) study",
              link: "https://www.andela.com/why-andela",
            },
          ],
        },
      },
      {
        subMenuLevel3ImageUrl:
          "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6663086372ffc5079a02f9d0_why_submenu.webp",
        subMenuLevel3Category: "insights",
        subMenuLevel3Title: "5 Steps to building a successful global team",
        subMenuLevel3Link: "https://www.andela.com/why-andela",
      },
    ],
  },
  {
    item: "Adaptive Hiring",
    content: [
      {
        subMenuTitle: "Adaptive Hiring Overview",
        subMenuDescription:
          "Take a flexible, scalable, and borderless approach to building tech teams prioritizing quality and skills over location.",
        subMenuLink: "https://www.andela.com/why-andela",
        subMenuImageUrl:
          "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/665ea7049463de26c21a21ed_adaptive_hiring_sub_menu.webp",
        subMenuSectionTitle: "How andela Works",
        subMenuSectionDescription:
          "​​An AI-powered platform finds your perfect matches quickly, getting your projects started fast.",
      },
      {
        subMenuLevel2ImageUrl:
          "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/665ea7049463de26c21a21ed_adaptive_hiring_sub_menu.webp",
        subMenuLevel2Category: "Adaptive Hiring",
        subMenuLevel2Title: "Successfully Manage Remote Teams",
        subMenuLevel2Link: "https://www.andela.com/why-andela",
      },
    ],
  },
  {
    item: "Solutions",
    content: [
      {
        subMenuTitle: "Flexible Management Models",
        subMenuDescription:
          "Build, manage, and pay teams in whatever configuration helps you deliver projects faster.",
        subMenuLink: "https://www.andela.com/why-andela",
        subMenuImageUrl: null,
        subMenuSectionTitle: "Browse Talent",
        subMenuSectionLink: "https://www.andela.com/why-andela",
        subMenuSectionDescription: null,
      },
      {
        sectionTitle: "Functions",
        sectionLinks: [
          {
            title: "Application Development",
            link: "https://www.andela.com/why-andela",
          },
          {
            title: "Data Science & Ai",
            link: "https://www.andela.com/why-andela",
          },
          {
            title: "Data Engineering & Analytics",
            link: "https://www.andela.com/why-andela",
          },
          {
            title: "Cloud & DevOps",
            link: "https://www.andela.com/why-andela",
          },
        ],
      },
      {
        sectionTitle: "Use Cases",
        sectionLinks: [
          {
            title: "Custom Software Development",
            link: "https://www.andela.com/why-andela",
          },
          {
            title: "Legacy System Modernization",
            link: "https://www.andela.com/why-andela",
          },
          {
            title: "Web App Development",
            link: "https://www.andela.com/why-andela",
          },
          {
            title: "GenAI Engagement Models",
            link: "https://www.andela.com/why-andela",
          },
          {
            title: "Cloud Migration",
            link: "https://www.andela.com/why-andela",
          },
        ],
      },
    ],
  },
  {
    item: "Platform",
    content: [
      {
        subMenuTitle: "Andela Talent Cloud",
        subMenuDescription:
          "The only AI-powered platform you need for simplified global tech hiring.",
        subMenuLink: "https://www.andela.com/why-andela",
        subMenuImageUrl: null,
      },
      {
        subMenuList: [
          {
            title: "Products",
            subSubMenuList: [
              {
                title: "Qualified By Andela",
                description: "",
              },
              {
                title: "Andela Play",
                description: "",
              },
            ],
          },
          {
            title: "integrations",
            subSubMenuList: [
              {
                title: "Qualified By Andela",
                description: "",
              },
            ],
          },
          {
            title: "Andela Connect",
            description: "",
          },
        ],
      },
      {
        subMenuLevel3ImageUrl:
          "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/665a68d0fb4baf76b83a5923_AI-tools-IT-services-InteriorHero-tiny.png",
        subMenuLevel3Category: "Blog",
        subMenuLevel3Title:
          "AI Tools & managed IT Services for business success",
        subMenuLevel3Link: "https://www.andela.com/why-andela",
      },
    ],
  },
  {
    item: "Resources",
    content: [
      {
        subMenuTitle: "Resources Center",
        subMenuDescription:
          "Discover how to put Adaptive Hiring to work for your business.",
        subMenuLink: "https://www.andela.com/why-andela",
        subMenuImageUrl: null,
      },
      {
        subMenuList: [
          {
            title: "Blogs",
            link: "https://www.andela.com/why-andela",
          },
          {
            title: "InfoGraphics",
            link: "https://www.andela.com/why-andela",
          },
          {
            title: "Webinars",
            link: "https://www.andela.com/why-andela",
          },
          {
            title: "eBooks",
            link: "https://www.andela.com/why-andela",
          },
          {
            title: "White Paper",
            link: "https://www.andela.com/why-andela",
          },
          {
            title: "Case Study",
            link: "https://www.andela.com/why-andela",
          },
          {
            title: "Videos",
            link: "https://www.andela.com/why-andela",
          },
          {
            title: "Humans Of Andela",
            link: "https://www.andela.com/why-andela",
          },
          {
            title: "Profile In Brilliance",
            link: "https://www.andela.com/why-andela",
          },
        ],
      },
      {
        subMenuLevel3ImageUrl:
          "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/665ea81c86ec74549663d33d_resources_sub_menu.webp",
        subMenuLevel3Category: "Webinar",
        subMenuLevel3Title:
          "Navigating Remote Work Challenges With Expert Insights",
        subMenuLevel3Link: "https://www.andela.com/why-andela",
      },
    ],
  },
  {
    item: "Talent",
    content: [
      {
        subMenuTitle: "Why Join Andela",
        subMenuDescription:
          "You can live anywhere in the world and work for the world’s best brands.",
        subMenuLink: "https://www.andela.com/why-andela",
        subMenuImageUrl: null,
      },
      {
        subMenuList: [
          {
            title: "Our Processes",
            description:
              "Andela technologists are expected to meet the highest standards of professional excellence.",
          },
          {
            title: "Find Opportunities",
            description:
              "Partner with Andela and take your career to new heights.",
          },
          {
            title: "Talent Experience",
            description:
              "We’ll support you with the right mix of people, technology, and training.",
          },
        ],
      },
      {
        subMenuLevel3ImageUrl:
          "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/665ea92d165c16d063d5bfde_talent_submenu.webp",
        subMenuLevel3Category: "eBook",
        subMenuLevel3Title: "The Shifting Paradigm of the CIO",
        subMenuLevel3Link: "https://www.andela.com/why-andela",
      },
    ],
  },
  {
    item: "About",
    content: [
      {
        subMenuTitle: "About Andela",
        subMenuDescription:
          "We believe brilliance is evenly distributed, opportunity is not.",
        subMenuLink: "https://www.andela.com/why-andela",
        subMenuImageUrl: null,
      },
      {
        subMenuList: [
          {
            title: "Leadership",
            description: "Meet the team that's leading Andela.",
          },
          {
            title: "Contact Us",
            description: "Let us know how we can help.",
          },
          {
            title: "Career",
            description: "Join a growing team with solid roots.",
          },
          {
            title: "Press & Media",
            description: "Press releases, news, and media needs.",
          },
        ],
      },
      {
        subMenuLevel3ImageUrl:
          "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/665eaa216b75cf713bdd165a_about_submenu.webp",
        subMenuLevel3Category: "White Paper",
        subMenuLevel3Title: "The Future of Hiring is Borderless",
        subMenuLevel3Link: "https://www.andela.com/why-andela",
      },
    ],
  },
];

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav className="bg-white text-dark z-10 sticky top-0 w-screen">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <img
            src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/66267ca5100e5bf7643aa0d6_andela_logo.svg"
            alt="Andela Logo"
          />
        </div>

        {/* Menu Links */}
        <ul className="flex relative justify-center space-x-4">
          {andelaNavLinkData?.map((nav, index) => (
            <li
              key={index}
              className=""
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href="#"
                className="hover:text-pink-800 text-slate-600 text-sm"
              >
                {nav.item}
              </a>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute left-1/2 transform -translate-x-1/2 top-8 p-3 mt-2 shadow-md bg-white rounded-xl border-t border-slate-100 ${
                      nav.content.length === 2
                        ? "w-[calc(100vw-850px)]"
                        : "w-[calc(100vw-600px)]"
                    } h-auto`}
                  >
                    <ThreeColumnSubMenuComponent subMenuData={nav.content} />
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Account & Donate Button */}
        <div className="flex space-x-4">
          <button className="px-8 py-2 bg-pink-800 text-white rounded-full text-sm">
            Donate
          </button>
          <button className="px-8 py-2 border-2 border-pink-800 rounded-full text-pink-800 text-sm">
            PLP Academy
          </button>
        </div>
      </div>
    </nav>
  );
};

const ThreeColumnSubMenuComponent = ({ subMenuData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {subMenuData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-start bg-white"
          >
            {data.subMenuTitle && (
              <div className="p-3">
                {data.subMenuImageUrl ? (
                  <img
                    src={data.subMenuImageUrl}
                    alt={data.subMenuTitle}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                ) : null}

                <h2 className="text-xl font-bold mt-4 text-left text-[#03999f]">
                  {data.subMenuTitle}
                </h2>
                <p className="text-left text-sm text-slate-500 mt-2">
                  {data.subMenuDescription}
                </p>
                <a
                  href={data.subMenuLink}
                  className="text-pink-800 mt-4 font-bold flex items-center gap-2"
                >
                  Learn more <FaArrowRightLong />
                </a>
              </div>
            )}

            {data.subMenuList && (
              <div className="p-3">
                <ul className="mt-4 space-y-2">
                  {data.subMenuList.map((item, idx) => (
                    <li key={idx} className="text-left">
                      <h3 className="text-lg font-semibold text-slate-700">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
                {data.subMenuMoreLinks && (
                  <>
                    <h3 className="text-xl text-[#03999f] font-bold my-4">
                      {data.subMenuMoreLinks.title}
                    </h3>
                    <ul className="space-y-2">
                      {data.subMenuMoreLinks.links.map((linkItem, idx) => (
                        <li
                          key={idx}
                          className="text-left flex gap-1 items-center"
                          onMouseEnter={() => setHoveredIndex(idx)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          {hoveredIndex === idx ? (
                            <FaAngleRight className="inline mr-2 text-pink-800" />
                          ) : (
                            <FaAngleRight className="inline mr-2 text-pink-800" />
                          )}

                          <a
                            href={linkItem.link}
                            className="text-pink-800 font-bold"
                          >
                            {linkItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}

            {data.subMenuLevel3Title && (
              <div className="p-3">
                <div className="bg-pink-800 rounded-md">
                  <img
                    src={data.subMenuLevel3ImageUrl}
                    alt={data.subMenuLevel3Title}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <div className="px-5 pb-5">
                    <a
                      href={data.subMenuLevel3Link}
                      className="text-white font-normal text-lg mt-4 tracking-wider"
                    >
                      {data.subMenuLevel3Category}
                    </a>
                    <h2 className="text-xl font-bold mt-4 text-white">
                      {data.subMenuLevel3Title}
                    </h2>
                    {/* Learn More */}
                    <a
                      href={data.subMenuLevel3Link}
                      className="text-white mt-4 font-bold flex items-center gap-2"
                    >
                      Learn more <FaArrowRightLong />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

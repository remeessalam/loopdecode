import imageOne from "../assets/images/chooseus1.jpg";
import imageTwo from "../assets/images/chooseus2.jpg";
import imageThree from "../assets/images/chooseus3.jpg";
import ecommerce from "../assets/images/png/landingecommerce.png";
import socila from "../assets/images/png/landingsocial.png";
import landing from "../assets/images/png/landing.png";
import custom from "../assets/images/png/landingcustome.png";
import ios from "../assets/images/png/landingios.png";
import android from "../assets/images/png/landingandroin.png";
import flutter from "../assets/images/png/landingflutter.png";
import hybrid from "../assets/images/png/landingcloud.png";
import portfoliwebone from "../assets/images/portfolio/1-min.webp";
import portfoliwebtwo from "../assets/images/portfolio/2-min.webp";
import portfoliwebthree from "../assets/images/portfolio/3-min.webp";
import portfoliwebfour from "../assets/images/portfolio/4-min.webp";
import portfoliwebfive from "../assets/images/portfolio/5-min.webp";
import portfoliwebseven from "../assets/images/portfolio/6-min.webp";
import portfoliappone from "../assets/images/portfolio/1-appmin.webp";
import portfoliapptwo from "../assets/images/portfolio/2-appmin.webp";
import portfoliappthree from "../assets/images/portfolio/3-appmin.webp";
import portfoliappfour from "../assets/images/portfolio/4-appmin.webp";
import portfolisppsfive from "../assets/images/portfolio/5-appmin.webp";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";

//services icons
import blockchain from "../assets/images/png/blockchain.png";
import gamedevelopment from "../assets/images/png/gamedevelopment.png";
import appdevelopment from "../assets/images/png/appdevelopment.png";
import rpa from "../assets/images/png/rpa.png";
import aidevelopment from "../assets/images/png/ai.png";
import mlservices from "../assets/images/png/mlservices.png";
import cloudcomputing from "../assets/images/png/cloudcomputing.png";
import webdevelopment from "../assets/images/png/webdevelopment.png";
import datascience from "../assets/images/png/datascience.png";
import nlp from "../assets/images/png/nlp.png";
import cloudmigration from "../assets/images/png/cloudmigration.png";
import uxdesign from "../assets/images/png/uxdesign.png";

const baseUrl = process.env.PUBLIC_URL;

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export function publicUrlFor(path) {
  return baseUrl + "/assets/" + path;
}

export const companyDetails = {
  name: "LOOP DECODE",
  number: "+91 7987900695",
  address:
    "STPI Bhilai, Mangal Bhavan, East, Nehru Nagar Main Rd, Vidya Vihar Colony, Bhilai, Chhattisgarh 490020",
  website: "LOOP DECODE.com",
  email: "abc@xyz.com",
  facebook: "https://www.facebook.com/profile.php?id=61572682662762",
  instagram: "https://www.instagram.com/loopdecode.ai/",
  linkedIn: " https://www.linkedin.com/company/106578985/",
  youtube: "https://www.youtube.com/@LoopDecodeai",
  x: "https://x.com/LoopDecode",
  blog: "https://loopdecode.blogspot.com/",
};

export function loadScript(src, fromPublic) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");

    script.src =
      fromPublic === undefined || fromPublic == null || fromPublic
        ? publicUrlFor(src)
        : src;

    script.addEventListener("load", function () {
      resolve();
    });
    script.addEventListener("error", function (e) {
      reject(e);
    });
    document.body.appendChild(script);
    document.body.removeChild(script);
  });
}

export const ourServices = [
  {
    image: blockchain,
    heading: "Blockchain Development",
    shortDescription:
      "Blockchain technology has the power to transform industries by enhancing transparency, security, and efficiency. Our services allow businesses to harness the full potential of decentralized systems.",
    description:
      "At LOOP DECODE, we offer Blockchain Development services that enable businesses to develop secure smart contracts, create decentralized applications (DApps), and build private blockchain networks. Our solutions drive innovation, reduce operational costs, and improve data security, making them ideal for industries like finance, healthcare, and logistics.",
  },
  {
    image: gamedevelopment,
    heading: "Game Development",
    shortDescription:
      "The gaming world is constantly evolving, and creating engaging, high-quality games requires expertise and creativity. Our team specializes in designing and building interactive, visually stunning games across multiple platforms.",
    description:
      "Using industry-leading game engines such as Unity and Unreal Engine, we build 2D and 3D games that captivate players with immersive gameplay, captivating graphics, and fluid mechanics. Whether it's a mobile game or a blockchain gaming project, our team brings your vision to life.",
  },
  {
    image: appdevelopment,
    heading: "App Development",
    shortDescription:
      "In today’s mobile-first world, having a powerful app is essential to connecting with customers and growing your business. We build native and cross-platform apps for iOS and Android with a user-centered approach.",
    description:
      "We work closely with you to develop high-performance, scalable applications for various business needs—whether it's an e-commerce platform, productivity tool, or social networking app. Our focus on intuitive design, speed, and seamless integration ensures your app is ready for success in a competitive marketplace.",
  },
  {
    image: rpa,
    heading: "Robotic Process Automation (RPA)",
    shortDescription:
      "Increase efficiency and reduce operational costs with RPA. Automate repetitive, time-consuming tasks and allow your team to focus on high-value work.",
    description:
      "We specialize in automating business processes such as data entry, customer service, and compliance tasks. Our RPA solutions enhance productivity, eliminate errors, and ensure faster decision-making across various industries.",
  },
  {
    image: aidevelopment,
    heading: "Artificial Intelligence Development",
    shortDescription:
      "AI is transforming how businesses make decisions, interact with customers, and optimize operations. Our solutions cover machine learning, NLP, predictive analytics, and computer vision.",
    description:
      "We create custom AI solutions that help businesses gain deeper insights, automate tasks, and enhance customer experiences. By integrating AI into your workflows, we enable smarter decision-making and more personalized interactions.",
  },
  {
    image: mlservices,
    heading: "Machine Learning Services",
    shortDescription:
      "Machine learning enables businesses to derive actionable insights from data and make accurate predictions. Our ML services offer tailored models for various business needs.",
    description:
      "Our expertise includes predictive modeling, recommendation systems, anomaly detection, and more. With data-driven insights, businesses can improve efficiencies, deliver better customer experiences, and drive innovation.",
  },
  {
    image: cloudcomputing,
    heading: "Cloud Computing Services",
    shortDescription:
      "Embrace the flexibility and scalability of the cloud. We offer cloud infrastructure management, migration, and cloud-native application development.",
    description:
      "Our cloud solutions improve scalability, reduce costs, and enhance agility. Whether migrating to AWS, Google Cloud, or Microsoft Azure, we ensure a smooth transition that aligns with your business needs.",
  },
  {
    image: webdevelopment,
    heading: "Web Development",
    shortDescription:
      "Your website is often the first point of contact with customers. We build custom websites optimized for performance, security, and user engagement.",
    description:
      "Using the latest technologies like React, Angular, and Laravel, we create secure and responsive websites, e-commerce platforms, and CMS solutions that drive business success.",
  },
  {
    image: datascience,
    heading: "Data Science Services",
    shortDescription:
      "Turn raw data into actionable insights. Our data science solutions help businesses analyze patterns, predict trends, and make data-driven decisions.",
    description:
      "We provide predictive analytics, data visualization, big data analysis, and AI-powered insights. Our solutions empower businesses to unlock new opportunities and optimize operations.",
  },
  {
    image: nlp,
    heading: "Natural Language Processing (NLP)",
    shortDescription:
      "Leverage NLP to automate communication and enhance customer interactions. From chatbots to sentiment analysis, our solutions drive efficiency.",
    description:
      "We build intelligent systems that understand and process human language, enabling businesses to improve customer service and automate document processing. Our NLP solutions create more personalized user experiences.",
  },
  {
    image: cloudmigration,
    heading: "Cloud Migration Services",
    shortDescription:
      "Seamlessly transition to the cloud with minimal disruption. Our services include strategy, planning, and execution for cloud migration.",
    description:
      "We ensure a smooth migration process that optimizes performance, security, and scalability. Whether migrating data, applications, or full infrastructure, we guide you through every step.",
  },
  {
    image: uxdesign,
    heading: "UI and UX Design Services",
    shortDescription:
      "A great user experience starts with intuitive UI design. We craft visually appealing, user-friendly designs that enhance engagement.",
    description:
      "Our UI/UX design services focus on usability and aesthetics. By conducting user research and testing, we ensure seamless interactions with your brand across web and mobile applications.",
  },
];

export const whyChooseUs = {
  mainHeading:
    "At LOOP DECODE, we take pride in being a trusted technology partner, dedicated to delivering innovative, high-quality solutions tailored to your business needs. Here’s why clients choose us:",
  details: [
    {
      image: imageOne,
      heading: "Broad Expertise Across Technologies",
      description:
        "Our team possesses deep expertise across various cutting-edge technologies, including blockchain, AI, machine learning, and app development. No matter your business challenge, we have the skills and experience to create tailored solutions that drive success and keep you ahead of the competition.",
    },
    {
      image: imageTwo,
      heading: "Tailored Solutions",
      description:
        "We don’t believe in one-size-fits-all solutions. We take the time to understand your business goals, challenges, and industry requirements to create customized technology solutions that align with your vision and objectives, ensuring maximum impact and efficiency.",
    },
    {
      image: imageThree,
      heading: "Commitment to Innovation",
      description:
        "We stay ahead of the curve by continuously exploring emerging technologies and industry trends. Our commitment to innovation ensures that we deliver future-ready solutions that not only meet your current needs but also help you adapt and thrive in an evolving digital landscape.",
    },
  ],
};

export const ourlandingServices = {
  webServices: [
    {
      image: ecommerce,
      heading: "E-commerce Websites",
      shortDescription:
        "Empowering your online business with custom e-commerce websites. Our solutions enhance user experience, optimize conversions, and support scalable growth.",
      description:
        "At LOOP DECODE Technologies, we specialize in building custom e-commerce websites that not only meet your business needs but also create seamless shopping experiences. Our solutions are designed to enhance customer engagement, streamline operations, and drive revenue growth. Whether you're launching a new online store or looking to upgrade an existing platform, our team crafts e-commerce websites tailored to your specific goals. We ensure that your site is user-friendly, mobile-responsive, and optimized for performance to help your business thrive in the digital marketplace.",
    },
    {
      image: socila,
      heading: "Social Media Websites",
      shortDescription:
        "Empowering your brand with custom social media websites. Our solutions enhance user interaction, foster community engagement, and drive growth.",
      description:
        "At LOOP DECODE Technologies, we specialize in creating custom social media websites that foster meaningful connections and vibrant communities. Our solutions are designed to enhance user experience, promote content sharing, and optimize interactions. Whether you're building a platform for social networking, content creation, or community engagement, our team crafts social media websites tailored to your unique needs. We ensure that your site is scalable, user-friendly, and optimized for performance, helping you build a strong online presence and create lasting connections.",
    },
    {
      image: landing,
      heading: "Landing Websites",
      shortDescription:
        "Empowering your brand with custom social media websites. Our solutions enhance user interaction, foster community engagement, and drive growth.",
      description:
        "At LOOP DECODE Technologies, we specialize in creating custom social media websites that foster meaningful connections and vibrant communities. Our solutions are designed to enhance user experience, promote content sharing, and optimize interactions. Whether you're building a platform for social networking, content creation, or community engagement, our team crafts social media websites tailored to your unique needs. We ensure that your site is scalable, user-friendly, and optimized for performance, helping you build a strong online presence and create lasting connections.",
    },
    {
      image: custom,
      heading: "Custom Websites",
      shortDescription:
        "Empowering your brand with custom websites. Our solutions are designed to reflect your unique identity, boost engagement, and drive long-term success.",
      description:
        "At LOOP DECODE Technologies, we specialize in creating custom websites that are tailored to meet the specific needs of your business. Whether you need a simple informational site or a complex platform with advanced functionality, our team designs solutions that align perfectly with your goals. We focus on delivering an intuitive user experience, seamless navigation, and mobile optimization, ensuring that your website stands out and performs exceptionally across all devices. Partner with us to build a website that not only enhances your online presence but also drives measurable results.",
    },
  ],
  appServices: [
    {
      image: ios,
      heading: "iOS Development",
      shortDescription:
        "Build and optimize custom iOS apps to deliver seamless user experiences, enhance performance, and drive engagement on Apple devices.",
      description:
        "At LOOP DECODE Technologies, we specialize in creating custom iOS apps tailored to your business needs. Whether you're developing a new app or optimizing an existing one, our solutions are designed to provide exceptional performance, intuitive interfaces, and seamless integration with Apple’s ecosystem. We focus on crafting apps that engage users, streamline processes, and deliver measurable results. Our team ensures that your app is user-friendly, scalable, and optimized for performance across all iOS devices, helping you achieve success in the competitive mobile market.",
    },
    {
      image: android,
      heading: "Android App Development",
      shortDescription:
        "Create powerful and intuitive Android applications that offer smooth performance, engaging user experiences, and drive business growth.",
      description:
        "At LOOP DECODE Technologies, we specialize in developing custom Android apps tailored to meet your business goals. Our apps are designed to provide a seamless user experience, intuitive interfaces, and high-performance functionality. Whether you need a consumer-facing app or an enterprise solution, our team focuses on delivering mobile apps that offer value to your users and align with your business objectives. We ensure that your app is scalable, secure, and optimized for the best performance on Android devices.",
    },
    {
      image: flutter,
      heading: "Flutter App Development",
      shortDescription:
        "Develop cross-platform mobile apps using Flutter, ensuring consistent performance, rich user experiences, and rapid deployment.",
      description:
        "At LOOP DECODE Technologies, we specialize in Flutter app development to create high-quality, cross-platform mobile applications that work seamlessly on both iOS and Android devices. Our team leverages Flutter's powerful features to build fast, responsive, and visually appealing apps that provide an exceptional user experience. Whether you're launching a new app or need to enhance an existing one, we ensure your app is scalable, easy to maintain, and optimized for performance across platforms.",
    },
    {
      image: hybrid,
      heading: "Hybrid App Development",
      shortDescription:
        "Build cost-effective hybrid mobile apps that deliver native-like performance on both iOS and Android, with quicker time-to-market.",
      description:
        "At LOOP DECODE Technologies, we offer hybrid app development services that combine the best of both web and native apps to provide high-quality, cost-effective solutions. Our hybrid apps are designed to run seamlessly across iOS and Android devices, offering native-like performance and user experience. Whether you need a simple informational app or a feature-rich application, our team ensures fast development, seamless integration, and optimized performance, all while keeping costs down and reducing time-to-market.",
    },
  ],
};

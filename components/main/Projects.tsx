import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          url="https://uat.8081.io/login"
          src="/8081.png"
          title="8081.inc"
          description="8081 is a Web3. 0 Fintech company that simplifies and automates the trading of digital assets. Our platform is designed for retail users and licensed brokers certified to trade digital assets. There are two roles in this project first is Broker and second is Retailer both user can register their accounts. we provide here some modules like question to answer, realtime chat, Add review, send invite request, create droids fot investmentm, analysis our portfoliom handle clients and more..."
        />
        <ProjectCard
          url="https://recruitment.ai/"
          src="/recai.png"
          title="Recruitment AI"
          description="
Recruitment.AI is an innovative platform designed to streamline the hiring process using advanced artificial intelligence. As a front-end developer, I contributed to the creation of an intuitive and user-friendly interface, ensuring seamless interaction for both recruiters and candidates. 
The platform leverages AI to match candidates with job openings, predict job success, and automate repetitive tasks, making the recruitment process faster, more efficient, and highly accurate. more..."
        />
        <ProjectCard
          url="https://app.managemyhealth.co.nz/er/register"
          src="/managehealth.png"
          title="Manage my health"
          description="Software for the hospital administration system is constructed using Mongo DB and
React Js. This programme makes it simple for administrators to administer their
hospitals.
It features several different modules for managing patients, hospital internal objects
like medications, blood pouches, bed quotas, appointments reports, operation reports,
birth reports, and death reports, as well as managing payments and managing
hospital employees..."
        />
      </div>
      <div className="secondProject">
        <ProjectCard
          url="https://www.emag.ro/"
          src="/emag.png"
          title=" Emag.ro"
          description="Emag.ro is a major e-commerce platform based in Romania. It is one of the largest online retailers in the country, offering a wide range of products, including electronics, appliances, clothing, beauty products, and more. Customers can browse through various categories and purchase items online."
        />
        <ProjectCard
          url="https://www.raywhite.com/"
          src="/ray.png"
          title="Ray white"
          description="Ray White New Zealand is a real estate company that operates in the real estate industry, providing services related to buying, selling, and renting properties in New Zealand. this project offer details about available properties, agent profiles, and information about the real estate services. Since many people post their properties for sale on these apps, the buyer benefits from having a wide range of choices to choose from."
        />
      </div>
    </div>
  );
};

export default Projects;

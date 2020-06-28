import React, {useState} from "react";
import {BlockTitle, GridRow, PageTitle, WhiteSpace} from "./components";
import {Timeline} from "./timeline/timeline";
import {Skills} from "./skills/skills";
import {Knowledges} from "./knowledges/knowledges";
import {Certificates} from "./certificates/certificates";

export const Resume = ({animClass}) => {
    const [educationData] = useState([
        {
            period: 2008,
            company: "University of Studies",
            title: "Frontend Development",
            text: `Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                    Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.`
        },
        {
            period: 2007,
            company: "University of Studies",
            title: "Graphic Design",
            text: `Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus
            quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.`
        },
    ])

    const [experienceData] = useState([
        {
            period: "2016 - Current",
            company: "Google",
            title: "Lead Ui/Ux Designer",
            text: `Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.`
        },
        {
            period: "2013 - 2016",
            company: "Adobe",
            title: "Senior Ui/Ux Designer",
            text: `Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.`
        },
        {
            period: "2011 - 2013",
            company: "Google",
            title: "Junior Ui/Ux Designer",
            text: `Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet.`
        },
    ]);

    const [designData] = useState([
        {title: "Web Design", level: "95%", style: "skill-1"},
        {title: "Print Design", level: "65%", style: "skill-2"},
        {title: "Logo Design", level: "80%", style: "skill-3"},
        {title: "Graphic Design", level: "90%", style: "skill-4"},
    ]);
    const [codingData] = useState([
        {title: "JavaScript", level: "95%", style: "skill-5"},
        {title: "PHP", level: "85%", style: "skill-6"},
        {title: "HTML/CSS", level: "100%", style: "skill-7"},
        {title: "Smarty/Twig", level: "75%", style: "skill-8"},
        {title: "Perl", level: "90%", style: "skill-9"},

    ])



    return <section data-id="resume"
                    className={`animated-section ${animClass}`}>
        <PageTitle title={"Resume"}/>

        <div className="section-content">

            <GridRow gridTemplateColumns={"58% 37%"} gridColumnGap={"5%"}>
                <div className="col-xs-12 col-sm-7">
                    <BlockTitle title={"Education"}/>
                    <Timeline timelineData={educationData}/>
                    <WhiteSpace size={"50px"}/>
                    <BlockTitle title={"Experience"}/>
                    <Timeline timelineData={experienceData}/>
                </div>


                <div className="col-xs-12 col-sm-5">

                    <BlockTitle title={"Design"} span={"Skills"}/>

                    <Skills skillsData={designData}/>


                    <WhiteSpace size={"10px"}/>


                    <BlockTitle title={"Coding"} span={"Skills"}/>

                    <Skills skillsData={codingData}/>

                    <WhiteSpace size={"10px"}/>


                    <BlockTitle title={"Knowledges"}/>

                    <Knowledges/>

                </div>

            </GridRow>

            <WhiteSpace size={"50px"}/>


            <GridRow>
                <div className="col-xs-12 col-sm-12">
                    <BlockTitle title={"Certificates"}/>
                </div>
            </GridRow>

            <Certificates/>

        </div>
    </section>
}
import React from "react";
import UserLayout from "./user-layout";
let data = {
  title: "Dengue virus : nature.com subject feeds",
  link: "https://www.nature.com/subjects/dengue-virus",
  description:
    "Latest news and research from Nature.com on the topic of Dengue virus",
  ttl: "60",
  pubDate: "Fri, 29 Nov 2019 04:23:24 +0000",
  lastBuildDate: "Fri, 29 Nov 2019 04:23:24 +0000",
  item: [
    {
      title:
        "Estimating the risk of arbovirus transmission in Southern Europe using vector competence data",
      pubDate: "Thu, 28 Nov 2019 ",
      link: "https://www.nature.com/articles/s41598-019-54395-5",
      description: "",
      guid: "https://www.nature.com/articles/s41598-019-54395-5"
    },
    {
      title:
        "Tracking the polyclonal neutralizing antibody response to a dengue virus serotype 1 type-specific epitope across two populations in Asia and the Americas",
      pubDate: "Thu, 7 Nov 2019 ",
      link: "https://www.nature.com/articles/s41598-019-52511-z",
      description: "",
      guid: "https://www.nature.com/articles/s41598-019-52511-z"
    },
    {
      title:
        "ER-shaping atlastin proteins act as central hubs to promote flavivirus replication and virion assembly",
      pubDate: "Mon, 21 Oct 2019 ",
      link: "https://www.nature.com/articles/s41564-019-0586-3",
      description: "",
      guid: "https://www.nature.com/articles/s41564-019-0586-3"
    },
    {
      title:
        "Dengue virus infection in people residing in Africa: a systematic review and meta-analysis of prevalence studies",
      pubDate: "Fri, 20 Sep 2019 ",
      link: "https://www.nature.com/articles/s41598-019-50135-x",
      description: "",
      guid: "https://www.nature.com/articles/s41598-019-50135-x"
    },
    {
      title:
        "Time elapsed between Zika and dengue virus infections affects antibody and T cell responses",
      pubDate: "Fri, 20 Sep 2019 ",
      link: "https://www.nature.com/articles/s41467-019-12295-2",
      description: "",
      guid: "https://www.nature.com/articles/s41467-019-12295-2"
    },
    {
      title: "Host serum iron modulates dengue virus acquisition by mosquitoes",
      pubDate: "Mon, 16 Sep 2019 ",
      link: "https://www.nature.com/articles/s41564-019-0555-x",
      description: "",
      guid: "https://www.nature.com/articles/s41564-019-0555-x"
    },
    {
      title:
        "Dissecting the heterogeneity of DENV vaccine-elicited cellular immunity using single-cell RNA sequencing and metabolic profiling",
      pubDate: "Wed, 14 Aug 2019 ",
      link: "https://www.nature.com/articles/s41467-019-11634-7",
      description: "",
      guid: "https://www.nature.com/articles/s41467-019-11634-7"
    },
    {
      title:
        "An RNA-centric dissection of host complexes controlling flavivirus infection",
      pubDate: "Mon, 5 Aug 2019 ",
      link: "https://www.nature.com/articles/s41564-019-0518-2",
      description: "",
      guid: "https://www.nature.com/articles/s41564-019-0518-2"
    },
    {
      title:
        "Human Schwann cells are susceptible to infection with Zika and yellow fever viruses, but not dengue virus",
      pubDate: "Tue, 9 Jul 2019 ",
      link: "https://www.nature.com/articles/s41598-019-46389-0",
      description: "",
      guid: "https://www.nature.com/articles/s41598-019-46389-0"
    },
    {
      title:
        "Dual roles for the ER membrane protein complex in flavivirus infection: viral entry and protein biogenesis",
      pubDate: "Thu, 4 Jul 2019 ",
      link: "https://www.nature.com/articles/s41598-019-45910-9",
      description: "",
      guid: "https://www.nature.com/articles/s41598-019-45910-9"
    },
    {
      title:
        "Simultaneous Coinfection of Macaques with Zika and Dengue Viruses Does not Enhance Acute Plasma Viremia but Leads to Activation of Monocyte Subsets and Biphasic Release of Pro-inflammatory Cytokines",
      pubDate: "Mon, 27 May 2019 ",
      link: "https://www.nature.com/articles/s41598-019-44323-y",
      description: "",
      guid: "https://www.nature.com/articles/s41598-019-44323-y"
    },
    {
      title:
        "Multiple Lineages of Dengue Virus Serotype 2 Cosmopolitan Genotype Caused a Local Dengue Outbreak in Hangzhou, Zhejiang Province, China, in 2017",
      pubDate: "Tue, 14 May 2019 ",
      link: "https://www.nature.com/articles/s41598-019-43560-5",
      description: "",
      guid: "https://www.nature.com/articles/s41598-019-43560-5"
    },
    {
      title:
        "Dengue virus reduces expression of low-density lipoprotein receptor-related protein 1 to facilitate replication in Aedes aegypti",
      pubDate: "Tue, 23 Apr 2019 ",
      link: "https://www.nature.com/articles/s41598-019-42803-9",
      description: "",
      guid: "https://www.nature.com/articles/s41598-019-42803-9"
    },
    {
      title:
        "Structure mapping of dengue and Zika viruses reveals functional long-range interactions",
      pubDate: "Fri, 29 Mar 2019 ",
      link: "https://www.nature.com/articles/s41467-019-09391-8",
      description: "",
      guid: "https://www.nature.com/articles/s41467-019-09391-8"
    },
    {
      title:
        "Inter-annual variation in seasonal dengue epidemics driven by multiple interacting factors in Guangzhou, China",
      pubDate: "Fri, 8 Mar 2019 ",
      link: "https://www.nature.com/articles/s41467-019-09035-x",
      description: "",
      guid: "https://www.nature.com/articles/s41467-019-09035-x"
    },
    {
      title:
        "Impact of pre-existing dengue immunity on human antibody and memory B cell responses to Zika",
      pubDate: "Tue, 26 Feb 2019 ",
      link: "https://www.nature.com/articles/s41467-019-08845-3",
      description: "",
      guid: "https://www.nature.com/articles/s41467-019-08845-3"
    },
    {
      title:
        "Mutations in the dimer interfaces of the dengue virus capsid protein affect structural stability and impair RNA-capsid interaction",
      pubDate: "Tue, 26 Feb 2019 ",
      link: "https://www.nature.com/articles/s41598-019-39185-3",
      description: "",
      guid: "https://www.nature.com/articles/s41598-019-39185-3"
    },
    {
      title: "A ghost from the past",
      pubDate: "Fri, 22 Feb 2019 ",
      link: "https://www.nature.com/articles/s41579-019-0170-0",
      description: "",
      guid: "https://www.nature.com/articles/s41579-019-0170-0"
    },
    {
      title:
        "Adaptive immune responses to primary and secondary dengue virus infections",
      pubDate: "Thu, 24 Jan 2019 ",
      link: "https://www.nature.com/articles/s41577-019-0123-x",
      description: "",
      guid: "https://www.nature.com/articles/s41577-019-0123-x"
    },
    {
      title:
        "The circadian clock components BMAL1 and REV-ERBα regulate flavivirus replication",
      pubDate: "Tue, 22 Jan 2019 ",
      link: "https://www.nature.com/articles/s41467-019-08299-7",
      description: "",
      guid: "https://www.nature.com/articles/s41467-019-08299-7"
    },
    {
      title: "Hyperlipidemia, statin use and dengue severity",
      pubDate: "Wed, 21 Nov 2018 ",
      link: "https://www.nature.com/articles/s41598-018-35334-2",
      description: "",
      guid: "https://www.nature.com/articles/s41598-018-35334-2"
    },
    {
      title:
        "Control of dengue virus in the midgut of Aedes aegypti by ectopic expression of the dsRNA-binding protein Loqs2",
      pubDate: "Mon, 29 Oct 2018 ",
      link: "https://www.nature.com/articles/s41564-018-0268-6",
      description: "",
      guid: "https://www.nature.com/articles/s41564-018-0268-6"
    },
    {
      title:
        "Refined efficacy estimates of the Sanofi Pasteur dengue vaccine CYD-TDV using machine learning",
      pubDate: "Fri, 7 Sep 2018 ",
      link: "https://www.nature.com/articles/s41467-018-06006-6",
      description: "",
      guid: "https://www.nature.com/articles/s41467-018-06006-6"
    },
    {
      title:
        "Dengue virus infection changes Aedes aegypti oviposition olfactory preferences",
      pubDate: "Tue, 4 Sep 2018 ",
      link: "https://www.nature.com/articles/s41598-018-31608-x",
      description: "",
      guid: "https://www.nature.com/articles/s41598-018-31608-x"
    },
    {
      title:
        "BALB/c mice infected with DENV-2 strain 66985 by the intravenous route display injury in the central nervous system",
      pubDate: "Wed, 27 Jun 2018 ",
      link: "https://www.nature.com/articles/s41598-018-28137-y",
      description: "",
      guid: "https://www.nature.com/articles/s41598-018-28137-y"
    },
    {
      title: "Oiling the Flavivirus replication machinery",
      pubDate: "Sat, 23 Jun 2018 ",
      link: "https://www.nature.com/articles/s41579-018-0050-z",
      description: "",
      guid: "https://www.nature.com/articles/s41579-018-0050-z"
    },
    {
      title:
        "Reconstruction of antibody dynamics and infection histories to evaluate dengue risk",
      pubDate: "Wed, 23 May 2018 ",
      link: "https://www.nature.com/articles/s41586-018-0157-4",
      description: "",
      guid: "https://www.nature.com/articles/s41586-018-0157-4"
    },
    {
      title:
        "Controlling vector-borne diseases by releasing modified mosquitoes",
      pubDate: "Fri, 18 May 2018 ",
      link: "https://www.nature.com/articles/s41579-018-0025-0",
      description: "",
      guid: "https://www.nature.com/articles/s41579-018-0025-0"
    },
    {
      title: "The STING behind dengue virus infection",
      pubDate: "Tue, 17 Apr 2018 ",
      link: "https://www.nature.com/articles/s41579-018-0010-7",
      description: "",
      guid: "https://www.nature.com/articles/s41579-018-0010-7"
    },
    {
      title:
        "Characterization of a murine model of non-lethal, symptomatic dengue virus infection",
      pubDate: "Tue, 20 Mar 2018 ",
      link: "https://www.nature.com/articles/s41598-018-22618-w",
      description: "",
      guid: "https://www.nature.com/articles/s41598-018-22618-w"
    }
  ]
};

export default class ArticleData extends React.Component {
  render() {
    return (
      <UserLayout>
        <div className="rows">
          {data.item.map(item => (
            <div className="panel">
              <a href={item.link}>{item.title}</a>
              <div> {item.pubDate}</div>
            </div>
          ))}
        </div>
      </UserLayout>
    );
  }
}
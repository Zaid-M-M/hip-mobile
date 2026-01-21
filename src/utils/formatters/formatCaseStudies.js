import { decodeHTML } from "../decodeHTML";
import { formatDate } from "./formatDate";

export function formatCaseStudies(caseStudies) {
  return caseStudies.slice(0, 5).map((study) => ({
    id: study.id,
    title: decodeHTML(study.title?.rendered || ""),
    image: study.acf?.client_stories_image || "",
    description: decodeHTML(study.acf?.meta_description || ""),
    slug: study.slug ? `/case-studies/${study.slug}` : "#",
    date: formatDate(study.date),
  }));
}

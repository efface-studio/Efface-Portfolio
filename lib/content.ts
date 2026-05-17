/**
 * Language selector — returns the full content bundle (data + UI strings)
 * for a given language. Both layouts render from the object this returns.
 */
import * as ko from "./portfolio";
import * as en from "./portfolio.en";
import { ui } from "./ui";
import type { Lang } from "./ui";

export type { Lang } from "./ui";

export function getContent(lang: Lang) {
  const d = lang === "en" ? en : ko;
  return {
    lang,
    profile: d.profile,
    career: d.career,
    skillGroups: d.skillGroups,
    skillFocus: d.skillFocus,
    featuredProjects: d.featuredProjects,
    gomsCases: d.gomsCases,
    hinestCases: d.hinestCases,
    hinestFeatures: d.hinestFeatures,
    awards: d.awards,
    activities: d.activities,
    showcases: d.showcases,
    studio: d.studio,
    aboutHighlights: d.aboutHighlights,
    aboutMe: d.aboutMe,
    ui: ui[lang],
  };
}

export type Content = ReturnType<typeof getContent>;

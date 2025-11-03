import HeroSection from "./HeroSection";
import LabOverview from "./LabOverview";
import ResearchHighlights from "./ResearchHighlights";
import DirectorSpotlight from "./DirectorSpotlight";
import Sponsors from "./Sponsors";
import CTASection from "./CTASection";
import {
  mockLabInfo,
  mockDirectorBio,
  mockResearchHighlights,
  mockLabStatistics,
  mockCTASection,
} from "./mockData";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection labInfo={mockLabInfo} statistics={mockLabStatistics} />
      <LabOverview labInfo={mockLabInfo} />
      <ResearchHighlights highlights={mockResearchHighlights} />
      <DirectorSpotlight director={mockDirectorBio} />
      <Sponsors />
      <CTASection cta={mockCTASection} />
    </div>
  );
}

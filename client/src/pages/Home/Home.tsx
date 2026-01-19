import HeroSection from "./HeroSection";
import LabOverview from "./LabOverview";
import ResearchHighlights from "./ResearchHighlights";
import DirectorSpotlight from "./DirectorSpotlight";
import Sponsors from "./Sponsors";
import CTASection from "./CTASection";
import { useContentful } from "../../context/ContentfulContext";

export default function Home() {
  const { labStatistics, labDirector, labInfo, researchFocusAreas } = useContentful()
  return (
    <div className="bg-white">
      <HeroSection labInfo={labInfo} statistics={labStatistics} />
      <LabOverview labInfo={labInfo} />
      <ResearchHighlights highlights={researchFocusAreas} />
      <DirectorSpotlight director={labDirector} />
      <Sponsors />
      <CTASection />
    </div>
  );
}

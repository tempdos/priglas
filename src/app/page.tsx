import HeroSection from "@/components/HeroSection";
import InvitationSection from "@/components/InvitationSection";
import EventDetails from "@/components/EventDetails";
import PhotoGallery from "@/components/PhotoGallery";
import ProgramSection from "@/components/ProgramSection";
import CountdownTimer from "@/components/CountdownTimer";
import MapSection from "@/components/MapSection";
import RSVPForm from "@/components/RSVPForm";
import FooterSection from "@/components/FooterSection";
import WelcomeScreen from "@/components/WelcomeScreen";
import BackgroundFlowers from "@/components/BackgroundFlowers";

export default function Home() {
  return (
    <WelcomeScreen>
      <main className="bg-white min-h-screen relative">
        <BackgroundFlowers />
        <HeroSection />
        <InvitationSection />
        <EventDetails />
        <PhotoGallery />
        <ProgramSection />
        <CountdownTimer />
        <MapSection />
        <RSVPForm />
        <FooterSection />
      </main>
    </WelcomeScreen>
  );
}

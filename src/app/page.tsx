import HeroSection from "@/components/HeroSection";
import InvitationSection from "@/components/InvitationSection";
import EventDetails from "@/components/EventDetails";
import PhotoGallery from "@/components/PhotoGallery";
import ProgramSection from "@/components/ProgramSection";
import CountdownTimer from "@/components/CountdownTimer";
import RSVPForm from "@/components/RSVPForm";
import FooterSection from "@/components/FooterSection";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function Home() {
  return (
    <WelcomeScreen>
      <main className="bg-white min-h-screen">
        <HeroSection />
        <InvitationSection />
        <EventDetails />
        <PhotoGallery />
        <ProgramSection />
        <CountdownTimer />
        <RSVPForm />
        <FooterSection />
      </main>
    </WelcomeScreen>
  );
}

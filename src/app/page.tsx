import HeroSection from "@/components/HeroSection";
import InvitationSection from "@/components/InvitationSection";
import EventDetails from "@/components/EventDetails";
import PhotoGallery from "@/components/PhotoGallery";
import ProgramSection from "@/components/ProgramSection";
import CountdownTimer from "@/components/CountdownTimer";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <InvitationSection />
      <EventDetails />
      <PhotoGallery />
      <ProgramSection />
      <CountdownTimer />
      <FooterSection />
    </main>
  );
}

import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl">Dashboard</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic=" Neural Network of the Brain"
          subject="Science"
          duration="45 mins duration"
          color="linear-gradient(45deg, #ffbebe, #ffffff)"
        />
        <CompanionCard
          id="456"
          name="The Growth Expert"
          topic="Scaling Your Business Successfully"
          subject="Business"
          duration="20 mins duration"
          color="linear-gradient(45deg, #ffd4d1, #d399ff)"
        />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="English Literature "
          subject="Language"
          duration="30 mins duration"
          color="linear-gradient(45deg, #ff9797, #a6ffe2)"
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;

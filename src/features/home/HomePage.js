'use client'
import React from 'react'
import HeroSection from './components/heroSection/HeroSection'
import Clients from './components/clients/Clients'
import TeamMomentumSection from './components/teamMomentumSection/TeamMomentumSection'
import LeaderTestimonialsSection from './components/leaderTestimonialsSection/LeaderTestimonialsSection'
import LeadershipBreakdownSection from './components/leadershipBreakdownSection/LeadershipBreakdownSection'
import SalesLeadershipHarmonySection from './components/salesLeadershipHarmonySection/SalesLeadershipHarmonySection'
import CoreModulesSection from './components/coreModulesSection/CoreModulesSection'
import WhatMakesUsUniqueSection from './components/whatMakesUsUniqueSection/WhatMakesUsUniqueSection'
import SystemChangeSection from './components/systemChangeSection/SystemChangeSection'
import UserCentricSection from './components/userCentricSection/UserCentricSection'
import CallToActionSection from './components/callToActionSection/CallToActionSection'
import StrategyCallCTA from './components/strategyCallCTA/StrategyCallCTA'
import QuestionsPromptSection from './components/questionsPromptSection/QuestionsPromptSection'
import LeadershipQuoteSection from './components/leadershipQuoteSection/LeadershipQuoteSection'
import LeadershipPhilosophySection from './components/leadershipPhilosophySection/LeadershipPhilosophySection'
import FaqSection from './components/faqSection/FaqSection'
import "./HomePage.scss"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Clients />
      <TeamMomentumSection />
      <LeaderTestimonialsSection />
      <LeadershipBreakdownSection />
      <SalesLeadershipHarmonySection />
      <CoreModulesSection />
      <WhatMakesUsUniqueSection />
      <LeadershipPhilosophySection />
      <SystemChangeSection />
      <UserCentricSection />
      <CallToActionSection />
      <FaqSection />
      <StrategyCallCTA />
      <QuestionsPromptSection />
      <LeadershipQuoteSection />
    </div>
  )
}

export default HomePage
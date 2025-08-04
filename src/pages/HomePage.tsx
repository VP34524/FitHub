import React from 'react';
import { ThemeConfig } from '../types';
import { Hero } from '../components/Hero';
import { UserForm } from '../components/UserForm';
import { PlanDisplay } from '../components/PlanDisplay';

interface HomePageProps {
  theme: ThemeConfig;
}

export function HomePage({ theme }: HomePageProps) {
  const [generatedPlan, setGeneratedPlan] = React.useState<string | null>(null);

  return (
    <div>
      <Hero theme={theme} />
      
      <div className="container mx-auto px-4 py-16" id='start'>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-8 ${theme.text}`}>
            Get Your Personalized Plan
          </h2>
          <UserForm theme={theme} onPlanGenerated={setGeneratedPlan} />
          
          {generatedPlan && (
            <div className="mt-12">
              <PlanDisplay plan={generatedPlan} theme={theme} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
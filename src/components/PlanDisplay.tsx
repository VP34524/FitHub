import React from 'react';
import { Download } from 'lucide-react';

interface PlanDisplayProps {
  plan: string;
  theme: {
    primary: string;
    text: string;
  };
}

export function PlanDisplay({ plan, theme }: PlanDisplayProps) {
  const handleDownload = () => {
    const blob = new Blob([plan], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fitness-plan.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-2xl font-bold ${theme.text}`}>Your Personalized Plan</h2>
        <button
          onClick={handleDownload}
          className={`${theme.primary} text-white p-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2`}
        >
          <Download size={20} />
          Download Plan
        </button>
      </div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: plan }} />
    </div>
  );
}
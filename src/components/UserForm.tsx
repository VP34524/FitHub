import React, { useState } from 'react';
import { UserData } from '../types';
import { generateFitnessContent } from '../lib/gemini';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface UserFormProps {
  theme: {
    primary: string;
    text: string;
  };
  onPlanGenerated: (plan: string) => void;
}

export function UserForm({ theme, onPlanGenerated }: UserFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<UserData>({
    age: 25,
    weight: 70,
    height: 170,
    diet: 'non-veg',
    weightGoal: 'maintain',
    workoutTime: 60
  });
  const [generatedPlan, setGeneratedPlan] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const plan = await generateFitnessContent(formData);
      setGeneratedPlan(plan);
      onPlanGenerated(plan);
    } catch (error) {
      console.error('Error generating plan:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' || name === 'weight' || name === 'height' || name === 'workoutTime'
        ? Number(value)
        : value
    }));
  };

  const downloadPdf = () => {
    const input = document.getElementById('plan-content');
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10, 180, 0);
        pdf.save('Fitness_Plan.pdf');
      });
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              min="15"
              max="100"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              min="30"
              max="200"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              min="100"
              max="250"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Diet Preference</label>
            <select
              name="diet"
              value={formData.diet}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            >
              <option value="veg">Vegetarian</option>
              <option value="non-veg">Non-Vegetarian</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Weight Goal</label>
            <select
              name="weightGoal"
              value={formData.weightGoal}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            >
              <option value="lose">Lose Weight</option>
              <option value="maintain">Maintain Weight</option>
              <option value="gain">Gain Weight</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Daily Workout Time (minutes)</label>
            <input
              type="number"
              name="workoutTime"
              value={formData.workoutTime}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              min="15"
              max="180"
              step="15"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`${theme.primary} text-white w-full py-2 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50`}
          >
            {isLoading ? 'Generating Plan...' : 'Generate Personalized Plan'}
          </button>
        </div>
      </form>

      {generatedPlan && (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg mt-6">
          <div id="plan-content" dangerouslySetInnerHTML={{ __html: generatedPlan }} className="prose max-w-full" />
          <button onClick={downloadPdf} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}
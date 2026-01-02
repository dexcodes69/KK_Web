import React, { useState } from 'react';
import { ColorTherapyIntro } from './ColorTherapyIntro';
import { ZodiacSelection } from './ZodiacSelection';
import { QuizForm } from './QuizForm';

export function ColorTherapySection() {
  const [step, setStep] = useState<'intro' | 'selection' | 'form'>('intro');
  const [selectedSign, setSelectedSign] = useState<string>('');

  const handleStartQuiz = () => {
    setStep('selection');
  };

  const handleSignSelect = (sign: string) => {
    setSelectedSign(sign);
    setStep('form');
  };

  const handleSubmitForm = (data: any) => {
    // Handle form submission
    console.log('Form submitted:', { sign: selectedSign, ...data });
    setStep('intro'); // Reset to beginning
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {step === 'intro' && <ColorTherapyIntro onStart={handleStartQuiz} />}
        {step === 'selection' && <ZodiacSelection onSelect={handleSignSelect} />}
        {step === 'form' && (
          <QuizForm sign={selectedSign} onSubmit={handleSubmitForm} />
        )}
      </div>
    </section>
  );
}
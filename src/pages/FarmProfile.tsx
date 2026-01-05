import FarmForm from '@/components/features/farm-profile/FarmForm';

export default function FarmProfile() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-civora-blue mb-2">
          Setup Your Farm Profile
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Provide your farm details to enable personalized AI analysis and context-aware disease detection
        </p>
      </div>
      <FarmForm />
    </div>
  );
}

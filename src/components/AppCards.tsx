import { ArrowRight } from 'lucide-react';

type AppCardProps = {
  headerTag: string;
  mainTitle: string;
  cardDescription: string;
  ctaUrl: string;
};

const AppCard = ({ headerTag, mainTitle, cardDescription, ctaUrl }: AppCardProps) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="text-sm font-medium text-purple-600 mb-2">{headerTag}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{mainTitle}</h3>
        <p className="text-gray-600 mb-4">{cardDescription}</p>
        <a 
          href={ctaUrl} 
          className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {mainTitle === "Ai Leadership Coach" ? "Coming Soon!" : <>Try Now <ArrowRight size={16} className="ml-1" /></>}
        </a>
      </div>
    </div>
  );
};

const AppCards = () => {
  const apps = [
    {
      headerTag: "HR",
      mainTitle: "Job Description Hub",
      cardDescription: "Job Description Hub - Build, add, edit, search, and analyze. All in one single hub.",
      ctaUrl: "https://job-description-hub-clarityops01.replit.app/dashboard"
    },
    {
      headerTag: "HR",
      mainTitle: "Retention 360™",
      cardDescription: "Losing an employee is costly. Calculate the true cost of employee churn.",
      ctaUrl: "https://clarityapps-employee-churn-calculator.netlify.app/"
    },
    {
      headerTag: "HR",
      mainTitle: "ePulse™",
      cardDescription: "Measure employee sentiment for actionable workplace insights.",
      ctaUrl: "https://pulse-check-culture-survey.netlify.app/"
    },
    {
      headerTag: "HR",
      mainTitle: "Onboard 360™",
      cardDescription: "An Employees guide to success from day one of their journey with you company",
      ctaUrl: "https://retention360-e-onboarding-checklist.netlify.app"
    },
    {
      headerTag: "HR",
      mainTitle: "Relay™",
      cardDescription: "Designed to safeguard your company's most valuable asset: its institutional knowledge and IP.",
      ctaUrl: "#"
    },
    {
      headerTag: "Leadership",
      mainTitle: "Ai Leadership Coach",
      cardDescription: "Tailored strategies from history's top leaders for your specific challenges.",
      ctaUrl: "#"
    },
  ];

  return (
    <section id="apps" className="py-4 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app, index) => (
          <AppCard
            key={index}
            headerTag={app.headerTag}
            mainTitle={app.mainTitle}
            cardDescription={app.cardDescription}
            ctaUrl={app.ctaUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default AppCards;

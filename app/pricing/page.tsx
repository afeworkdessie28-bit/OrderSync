import { PricingCard } from '@/components/pricing-card';
import { SectionHeading } from '@/components/section-heading';

const pricingPlans = [
  {
    plan: 'Starter',
    price: '$0',
    description: 'For individuals and small businesses getting started with order tracking.',
    features: [
      'Up to 50 orders/month',
      'Basic order management',
      'Customer details tracking',
      'Simple dashboard',
      'Email support',
    ],
    highlight: false,
  },
  {
    plan: 'Pro',
    price: '$19/month',
    description: 'For growing businesses that need better organization and automation.',
    features: [
      'Up to 1,000 orders/month',
      'Advanced order tracking',
      'Customer management system',
      'Analytics dashboard',
      'Priority email support',
    ],
    highlight: true,
  },
  {
    plan: 'Business',
    price: '$49/month',
    description: 'For teams and businesses managing high-volume orders.',
    features: [
      'Unlimited orders',
      'Full order & customer management',
      'Advanced analytics & insights',
      'Team collaboration',
      'Priority support',
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Manage your orders efficiently with plans designed for every stage of your business"
        />
        
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.plan}
              plan={plan.plan}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              highlight={plan.highlight}
            />
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-500">
          All plans are billed monthly. You can cancel anytime. No hidden fees.
        </p>
      </div>
    </div>
  );
}
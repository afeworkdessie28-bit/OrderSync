export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6">
        Refund Policy
      </h1>

      <p className="text-gray-600 leading-relaxed mb-5">
        At OrderSync, we aim to provide a reliable and transparent service for all users.
        Due to the digital nature of our product, the following refund policy applies.
      </p>

      <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
        Digital Products
      </h2>

      <p className="text-gray-600 leading-relaxed mb-5">
        All purchases made through OrderSync are for digital software access.
        Once a purchase is completed, access to the system is granted immediately,
        which means the service is considered delivered at that point.
      </p>

      <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
        Refund Eligibility
      </h2>

      <p className="text-gray-600 leading-relaxed mb-5">
        Refunds may be issued within 7 days of purchase only if there is a verified
        technical issue that prevents use of the product and our support team is
        unable to resolve it.
      </p>

      <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
        Non-Refundable Cases
      </h2>

      <p className="text-gray-600 leading-relaxed mb-5">
        Refunds will not be issued for:
      </p>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Change of mind after purchase</li>
        <li>Failure to use the product</li>
        <li>User misunderstanding of features</li>
        <li>Issues caused by third-party tools or integrations</li>
      </ul>

      <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
        Contact
      </h2>

      <p className="text-gray-600 leading-relaxed">
        If you believe you are eligible for a refund, please contact us at
        <span className="font-medium text-gray-900"> support@ordersync.com</span>.
        We aim to respond within 24–48 hours.
      </p>
    </div>
  );
}
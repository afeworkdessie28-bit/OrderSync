export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">
        About OrderSync
      </h1>

      <p className="text-gray-600 leading-relaxed mb-5">
        OrderSync is a modern order management tool built for small businesses,
        independent sellers, and growing teams who need a simple way to stay
        organized.
      </p>

      <p className="text-gray-600 leading-relaxed mb-5">
        Many businesses still rely on spreadsheets, notebooks, or scattered
        messages to track customer orders. This often leads to missed details,
        confusion, and wasted time. OrderSync solves this by providing a
        centralized system where all orders and customer information are stored
        and easily accessible.
      </p>

      <p className="text-gray-600 leading-relaxed mb-5">
        With OrderSync, you can manage orders efficiently, keep track of
        customers, and maintain a clear overview of your business operations —
        all in one place.
      </p>

      <div className="mt-10 border-t pt-6">
        <h2 className="text-lg font-medium text-gray-900 mb-2">
          Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to simplify order management by providing reliable,
          easy-to-use tools that help businesses save time, reduce errors, and
          operate more efficiently without unnecessary complexity.
        </p>
      </div>
    </div>
  );
}
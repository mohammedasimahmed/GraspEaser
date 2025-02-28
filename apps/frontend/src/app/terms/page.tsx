import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6 my-10 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 text-center">
          By using this service, you agree to the following terms and conditions.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              User Responsibility for Compliance
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              You are responsible for ensuring that any content you provide complies with all applicable laws,
              regulations, and third-party terms of service. You must have the right to access and use any
              content before submitting it to be scraped.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Data Usage and Scraping Limitations
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Some websites may restrict or prohibit scraping. It is your sole responsibility to ensure compliance
              with terms of service of a website. We is not responsible for any legal issues
              arising from scraping.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Indemnification
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              You agree to indemnify, defend, and hold harmless We from any claims,
              damages, or legal fees arising from your use of this service.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We is not liable for any losses, legal consequences, or damages resulting
              from the use of this service.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Prohibited Uses
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              You must not scrape data from websites that explicitly prohibit scraping. Any violations are your
              responsibility, and We is not accountable.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              No Responsibility for Legal Consequences
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We disclaims liability for legal, financial, or other consequences arising
              from your use of this service.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Changes to Terms
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We may modify these terms at any time. You are responsible for staying
              informed of updates.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;

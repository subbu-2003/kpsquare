"use client";

const Services = () => {
  return (
  <section className="py-20 px-6 md:px-20 bg-dark mt-16 dark:bg-darkmode">
  <div className="max-w-7xl mx-auto">

    {/* PAGE HEADING */}
    <h1 className="text-4xl md:text-5xl font-bold text-center text-secondary dark:text-white mb-8">
      Our Services
    </h1>

    <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 dark:text-darktext mb-14">
      Your One-Stop Destination for <span className="font-semibold">Printing, Xerox, Scanning & Binding</span> Services in Chennai.
      We deliver high precision, premium quality, fast turnaround time & competitive pricing for all volumes.
    </p>

    {/* SERVICES GRID */}
    <div className="grid md:grid-cols-2 gap-12">

      {/* 1. PRINTING SERVICES */}
      <div className="bg-dark dark:bg-dark shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
        <img
          src="/images/services/printing_service.webp"
          alt="Printing Services"
          className="rounded-xl mb-5 w-full h-56 object-cover"
        />
        <h2 className="text-2xl font-bold text-secondary dark:text-white mb-3">
          1. Printing Services in Chennai
        </h2>
        <p className="text-gray-700 dark:text-darktext mb-4">
          We provide high-quality color & B/W printing for academic, office & commercial needs.
        </p>

        <h3 className="font-semibold text-secondary dark:text-white">Our Printing Capabilities:</h3>
        <ul className="list-disc ml-6 text-gray-700 dark:text-darktext mt-2">
          <li>Color & B/W printing (A4, A3 & custom sizes)</li>
          <li>Project & assignment printing</li>
          <li>Office documents, proposals & presentations</li>
          <li>Flyers, brochures & marketing materials</li>
          <li>Photo printing & high-resolution images</li>
          <li>Bulk printing for institutions & corporates</li>
        </ul>

        <h3 className="font-semibold mt-4 text-secondary dark:text-white">Why Our Printing Stands Out:</h3>
        <ul className="list-disc ml-6 text-gray-700 dark:text-darktext mt-2">
          <li>Premium quality output</li>
          <li>Multiple paper types (80gsm, 100gsm, glossy, matte)</li>
          <li>Affordable pricing</li>
          <li>Fast same-day delivery</li>
        </ul>
      </div>

      {/* 2. XEROX SERVICES */}
      <div className="bg-dark dark:bg-dark shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
        <img
          src="/images/services/xerox.webp"
          alt="Xerox Services"
          className="rounded-xl mb-5 w-full h-56 object-cover"
        />
        <h2 className="text-2xl font-bold text-secondary dark:text-white mb-3">
          2. Xerox / Photocopy Services
        </h2>
        <p className="text-gray-700 dark:text-darktext mb-4">
          Fast, clear & affordable photocopy solutions for students & businesses.
        </p>

        <h3 className="font-semibold text-secondary dark:text-white">Our Xerox Services Include:</h3>
        <ul className="list-disc ml-6 text-gray-700 dark:text-darktext mt-2">
          <li>Single-side & double-side photocopy</li>
          <li>High-speed bulk Xerox</li>
          <li>Multi-page duplication</li>
          <li>Enlargement & reduction copies</li>
          <li>Document sets ready for submission</li>
        </ul>

        <h3 className="font-semibold mt-4 text-secondary dark:text-white">Why Choose Us:</h3>
        <ul className="list-disc ml-6 text-gray-700 dark:text-darktext mt-2">
          <li>Crystal-clear copies</li>
          <li>Fast & reliable machines</li>
          <li>Best pricing for bulk photocopy</li>
        </ul>
      </div>

      {/* 3. SCANNING SERVICES */}
      <div className="bg-dark dark:bg-dark shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
        <img
          src="/images/services/scanning.webp"
          alt="Scanning Services"
          className="rounded-xl mb-5 w-full h-56 object-cover"
        />
        <h2 className="text-2xl font-bold text-secondary dark:text-white mb-3">
          3. Scanning Services
        </h2>
        <p className="text-gray-700 dark:text-darktext mb-4">
          High-resolution scanning & digital conversion for safe storage.
        </p>

        <h3 className="font-semibold text-secondary dark:text-white">Features:</h3>
        <ul className="list-disc ml-6 text-gray-700 dark:text-darktext mt-2">
          <li>High-DPI scanning (up to 1200 DPI)</li>
          <li>PDF, JPEG, PNG outputs</li>
          <li>Multi-page document merging</li>
          <li>Color, grayscale & B/W scanning</li>
          <li>Quick delivery via Email / WhatsApp</li>
        </ul>

        <h3 className="font-semibold mt-4 text-secondary dark:text-white">Benefits:</h3>
        <ul className="list-disc ml-6 text-gray-700 dark:text-darktext mt-2">
          <li>Perfect for archiving documents</li>
          <li>Secure digital conversion</li>
          <li>Great for legal, medical & academic files</li>
        </ul>
      </div>
      {/* 4. BINDING SERVICES */}
      <div className="bg-dark dark:bg-dark shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
        <img
          src="/images/services/binding.webp"
          alt="Binding Services"
          className="rounded-xl mb-5 w-full h-56 object-cover"
        />
        <h2 className="text-2xl font-bold text-secondary dark:text-white mb-3">
          4. Binding Services
        </h2>
        <p className="text-gray-700 dark:text-darktext mb-4">
          Professional binding for projects, reports & business documents.
        </p>

        <h3 className="font-semibold text-secondary dark:text-white">Available Binding Types:</h3>
        <ul className="list-disc ml-6 text-gray-700 dark:text-darktext mt-2">
          <li>Spiral binding</li>
          <li>Wiro binding</li>
          <li>Thermal binding</li>
          <li>Soft-cover binding</li>
          <li>Project & thesis binding</li>
        </ul>

        <h3 className="font-semibold mt-4 text-secondary dark:text-white">Why Our Binding Stands Out:</h3>
        <ul className="list-disc ml-6 text-gray-700 dark:text-darktext mt-2">
          <li>Strong & long-lasting</li>
          <li>Professional appearance</li>
          <li>Multiple cover options</li>
        </ul>
      </div>
    </div>

    {/* CALL TO ACTION */}
    <div className="text-center mt-16">
      <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">
        Get Your Documents Done Today!
      </h2>
      <p className="text-lg text-gray-700 dark:text-darktext mb-4">
        Printing, Xerox, Scanning or Binding — we deliver excellence in every page.
      </p>

      <p className="text-xl font-semibold text-secondary dark:text-white">📍 Anna Nagar, Chennai</p>
      <p className="text-xl font-semibold text-secondary dark:text-white">📞 7502802800</p>
      <p className="text-xl font-semibold text-secondary dark:text-white">🌐 chennaixerox.com</p>
    </div>

  </div>
</section>

  );
};

export default Services;

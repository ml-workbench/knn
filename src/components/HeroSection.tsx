export default function HeroSection() {
  return (
    <div className="text-center py-24 border border-black bg-white text-black">
      <h1 className="text-5xl font-semibold mb-6 tracking-tight">
        K-Nearest Neighbors (KNN) Machine Learning
      </h1>
      <p className="text-lg max-w-xl mx-auto mb-8 leading-relaxed">
        A simple tool to perform classification or regression using the
        K-Nearest Neighbors algorithm. Upload your CSV data, configure
        parameters, and get predictions instantly.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#"
          className="px-6 py-3 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors duration-200"
        >
          Get Started
        </a>
        <a
          href="#"
          className="px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-200"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

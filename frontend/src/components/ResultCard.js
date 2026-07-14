function ResultCard({ result }) {

  return (

    <div className="bg-gray-900 p-10 rounded-2xl shadow-xl w-full h-full flex flex-col justify-center">

      <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">

        Prediction Result

      </h2>

      <div className="space-y-8 text-2xl">

        <p>

          <span className="font-bold text-white">
            Accident Severity:
          </span>

          <span className="text-red-400 ml-3">
            {result.severity}
          </span>

        </p>

        <p>

          <span className="font-bold text-white">
            Risk Percentage:
          </span>

          <span className="text-yellow-400 ml-3">
            {result.risk}
          </span>

        </p>

        <p>

          <span className="font-bold text-white">
            Recommendation:
          </span>

          <span className="text-green-400 ml-3">
            {result.recommendation}
          </span>

        </p>

      </div>

    </div>
  );
}

export default ResultCard;
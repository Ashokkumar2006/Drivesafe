function PredictionPanel() {

  return (

    <section className="py-28">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold">

            Risk Prediction Engine

          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">

            Simulate route risk assessments using AI-powered analysis.

          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT FORM */}

          <div className="bg-[#0d1721] border border-white/5 rounded-3xl p-10">

            <h3 className="text-3xl font-bold mb-8">

              Trip Input Parameters

            </h3>

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Origin"
                className="w-full bg-[#111d29] border border-white/5 rounded-xl p-4 outline-none focus:border-cyan-500"
              />

              <input
                type="text"
                placeholder="Destination"
                className="w-full bg-[#111d29] border border-white/5 rounded-xl p-4 outline-none focus:border-cyan-500"
              />

              <select className="w-full bg-[#111d29] border border-white/5 rounded-xl p-4 outline-none focus:border-cyan-500">

                <option>Night</option>
                <option>Morning</option>
                <option>Afternoon</option>

              </select>

              <select className="w-full bg-[#111d29] border border-white/5 rounded-xl p-4 outline-none focus:border-cyan-500">

                <option>Rainy</option>
                <option>Foggy</option>
                <option>Clear</option>

              </select>

              <button className="w-full bg-cyan-600 hover:bg-cyan-500 transition py-4 rounded-xl font-semibold">

                Predict Risk

              </button>

            </div>

          </div>

          {/* RIGHT RESULT */}

          <div className="bg-[#0d1721] border border-white/5 rounded-3xl p-10 flex flex-col justify-center">

            <div className="bg-cyan-500/10 text-cyan-400 px-5 py-2 rounded-full text-sm w-fit">

              HIGH RISK DETECTED

            </div>

            <h1 className="text-7xl font-bold mt-8">

              82%

            </h1>

            <p className="text-slate-400 mt-6 text-lg leading-relaxed">

              Elevated collision probability detected due to
              adverse weather conditions and nighttime travel patterns.

            </p>

            <div className="mt-10 space-y-5">

              <div className="flex justify-between border-b border-white/5 pb-4">

                <span className="text-slate-400">
                  Predicted Severity
                </span>

                <span>
                  HIGH
                </span>

              </div>

              <div className="flex justify-between border-b border-white/5 pb-4">

                <span className="text-slate-400">
                  Weather Impact
                </span>

                <span>
                  CRITICAL
                </span>

              </div>

              <div className="flex justify-between border-b border-white/5 pb-4">

                <span className="text-slate-400">
                  Traffic Density
                </span>

                <span>
                  MODERATE
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PredictionPanel;
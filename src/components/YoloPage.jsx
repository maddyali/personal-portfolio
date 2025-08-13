export default function YoloPage() {
  const handleClick = () => {
    window.open("https://maddyali.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Wait... you actually scanned it?!
          </h1>

          <p className="text-2xl text-gray-700 font-semibold">Respect.</p>

          <p className="text-xl text-gray-600 leading-relaxed max-w-md mx-auto">
            Maybe you're ready to ignore conventional hiring too?
          </p>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mx-4">
            <p className="text-gray-800 font-medium text-lg">
              Ex-accountant who traded spreadsheets for JavaScript.
            </p>
          </div>
        </div>

        <button
          onClick={handleClick}
          className="w-full max-w-sm mx-auto bg-gray-900 hover:bg-gray-800 text-white font-semibold text-xl py-4 px-8 rounded-lg transition-all duration-200 hover:shadow-lg active:scale-95 block"
        >
          See what I've built →
        </button>

        <div className="pt-6">
          <div className=" w-12 h-0.5 bg-gray-300 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

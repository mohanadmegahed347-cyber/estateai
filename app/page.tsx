export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Estate<span className="text-green-500">AI</span>
        </h1>
        <p className="text-xl text-gray-500 mb-8">
          Your AI-powered real estate assistant
        </p>
        <a href="/dashboard" className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-600 transition">
          Go to Dashboard
        </a>
      </div>
    </main>
  )
}
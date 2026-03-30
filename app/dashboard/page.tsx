export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Estate<span className="text-green-500">AI</span></h1>
        <p className="text-sm text-gray-500">Good morning, Agent</p>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500 mb-1">Leads contacted</p>
            <p className="text-3xl font-bold text-gray-900">14</p>
            <p className="text-xs text-green-500 mt-1">+3 responses</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500 mb-1">Deals flagged</p>
            <p className="text-3xl font-bold text-gray-900">3</p>
            <p className="text-xs text-green-500 mt-1">New this morning</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500 mb-1">Showings booked</p>
            <p className="text-3xl font-bold text-gray-900">2</p>
            <p className="text-xs text-green-500 mt-1">Auto-scheduled</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500 mb-1">Photos enhanced</p>
            <p className="text-3xl font-bold text-gray-900">6</p>
            <p className="text-xs text-green-500 mt-1">Ready to publish</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <a href="/leads" className="bg-white rounded-xl border border-gray-200 p-6 hover:border-green-300 hover:shadow-sm transition cursor-pointer">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-green-600 font-bold text-sm">👥</span>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Leads</h3>
            <p className="text-sm text-gray-500">View and manage all your contacts</p>
          </a>
          <a href="/listings" className="bg-white rounded-xl border border-gray-200 p-6 hover:border-green-300 hover:shadow-sm transition cursor-pointer">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-blue-600 font-bold text-sm">✍️</span>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Listing Generator</h3>
            <p className="text-sm text-gray-500">AI writes your listing descriptions</p>
          </a>
          <a href="/photos" className="bg-white rounded-xl border border-gray-200 p-6 hover:border-green-300 hover:shadow-sm transition cursor-pointer">
  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
    <span className="text-purple-600 font-bold text-sm">📸</span>
  </div>
  <h3 className="font-medium text-gray-900 mb-1">Photo Enhancer</h3>
  <p className="text-sm text-gray-500">Make listing photos professional</p>
</a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Active Leads</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">James Thornton</p>
                  <p className="text-sm text-gray-500">4bed — Lake Nona</p>
                </div>
                <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">Hot</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">Priya Mehta</p>
                  <p className="text-sm text-gray-500">Condo — Downtown</p>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">Warm</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">Carlos Rivera</p>
                  <p className="text-sm text-gray-500">3bed — Windermere</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">New</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">AI Activity Feed</h2>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-xs text-green-700 font-medium shrink-0">SMS</div>
                <div>
                  <p className="text-sm text-gray-900">Follow-up sent to James Thornton</p>
                  <p className="text-xs text-gray-400">2 min ago</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-xs text-yellow-700 font-medium shrink-0">$</div>
                <div>
                  <p className="text-sm text-gray-900">New deal flagged — 182 Cypress Rd</p>
                  <p className="text-xs text-gray-400">14 min ago</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs text-blue-700 font-medium shrink-0">IMG</div>
                <div>
                  <p className="text-sm text-gray-900">6 listing photos enhanced</p>
                  <p className="text-xs text-gray-400">1 hr ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

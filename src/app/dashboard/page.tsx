"use client"

export default function DashboardPage() {
  return (
    <div className="h-[calc(100vh-10rem)]">
      <iframe
        src="https://stevenchen16-ai-lawyer.hf.space/"
        className="w-full h-full border-0 rounded-lg"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </div>
  )
}
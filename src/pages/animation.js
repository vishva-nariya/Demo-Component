function Animation() {
  return (
    <div className="p-6 space-y-6">
      {/* Simple Bounce */}
      <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded-lg animate-bounce">
        Bounce
      </div>

      {/* Pulse Effect */}
      <div className="w-24 h-24 bg-green-500 text-white flex items-center justify-center rounded-lg animate-pulse">
        Pulse
      </div>

      {/* Spin Effect */}
      <div className="w-24 h-24 bg-purple-500 text-white flex items-center justify-center rounded-lg animate-spin">
        Spin
      </div>
    </div>
  );
}

export default Animation;

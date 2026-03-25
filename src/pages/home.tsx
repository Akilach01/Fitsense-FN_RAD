import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";


export default function Home() {
  const { user, loading } = useAuth();

  // Wait for auth to load
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  // Redirect logged-in users to their dashboards
  if (user) {
    if (user.role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    }
    return <Navigate to="/user/dashboard" replace />;
  }

  // Always show guest landing page if no user
  return (
    <div className="space-y-10">
        {/* HERO SECTION */}
       <section className="relative overflow-hidden rounded-3xl">
  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://as1.ftcdn.net/jpg/03/29/60/84/1000_F_329608479_vP9nFK795X8lWmoTa8DPhMgoewQ7U1lG.jpg')"
    }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

  {/* CONTENT */}
  <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center p-10 md:p-16">
    
    {/* LEFT – TEXT */}
    <div className="max-w-xl">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
        Plan Smarter. <br />
        Train Better. <br />
        <span className="text-blue-600">Live Healthier.</span>
      </h1>

      <p className="mt-6 text-gray-600 text-lg">
        FitSense helps you create personalized fitness plans, track
        progress, and stay consistent — all in one place.
      </p>

      <div className="mt-8 flex gap-5">
        <Link
          to="/register"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="px-6 py-3 border border-black-300 rounded-lg hover:bg-gray-100 transition"
        >
          Login
        </Link>
      </div>
    </div>

    {/* RIGHT – IMAGE CARD */}
    <div className="flex justify-center">
      <img
        src="https://img.freepik.com/premium-photo/sport-bodybuilding-lifestyle-people-concept-young-man-woman-with-barbell-flexing-muscles-gym-trainer-fitness-girl-are-having-workout-gym_116317-18693.jpg"
        alt="Fitness"
        className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
      />
    </div>
  </div>
</section>



        {/* ABOUT SECTION */}
        <section className="bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose FitSense?
          </h2>
          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">
            A professional, mobile-first fitness platform with intelligent plan building,
            deeper personalization, and built-in quality checks.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <article className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transform transition duration-500 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 mb-4 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 motion-safe:animate-pulse">
                  <path d="M12 2a9 9 0 0 0-9 9c0 4.730 3.566 8.633 8.142 8.978l.858.022c4.97 0 9-4.03 9-9a9 9 0 0 0-9-9Zm-.75 4.5a1.5 1.5 0 1 1 3 0v4.25h1.5a1.5 1.5 0 1 1 0 3h-4.5a1.5 1.5 0 1 1 0-3h1.5V6.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Plans</h3>
              <p className="text-gray-600">
                Smart routines adapt to your fitness level, goals, and lifestyle reviews.
              </p>
            </article>

            <article className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transform transition duration-500 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 mb-4 transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 motion-safe:animate-pulse">
                  <path d="M11.25 2.75a.75.75 0 0 1 1.5 0v2.7a.75.75 0 0 1-1.5 0V2.75Zm6.404 2.022a.75.75 0 1 1 1.06 1.06l-1.91 1.91a.75.75 0 1 1-1.06-1.06l1.91-1.91ZM19.25 11.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-2.586 6.78a.75.75 0 0 1 1.06 1.06l-1.91 1.91a.75.75 0 1 1-1.06-1.06l1.91-1.91ZM12 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 1.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Assisted Guidance</h3>
              <p className="text-gray-600">
                Generate concise exercise descriptions and technique notes automatically.
              </p>
            </article>

            <article className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transform transition duration-500 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-indigo-100 text-indigo-600 mb-4 transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 motion-safe:animate-pulse">
                  <path d="M12 2a7 7 0 0 0-4.95 11.95l-2.5 2.5a1 1 0 1 0 1.42 1.42l2.5-2.5A7 7 0 1 0 12 2Zm0 2a5 5 0 0 1 3.536 8.536l-1.768-1.768a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.768 1.768A5 5 0 1 1 12 4Zm.75 2.75a.75.75 0 0 0-1.5 0v3.5c0 .414.336.75.75.75h2a.75.75 0 0 0 0-1.5h-1.25V6.75Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Admin Approval System</h3>
              <p className="text-gray-600">
                Trusted workout plans are verified so you can execute with confidence.
              </p>
            </article>
          </div>
        </section>

        {/* IMAGE GALLERY */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">
            Train Anywhere
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://media.istockphoto.com/id/1265599567/photo/muscular-young-man-training-at-gym-with-smart-phone.jpg?s=612x612&w=0&k=20&c=D4JH0kO7dKEUX_PktjhEp60ctjFNMDJGfc5vfYpgyTs="
              className="rounded-xl shadow"
            />
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
              className="rounded-xl shadow"
            />
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
              className="rounded-xl shadow"
            />
          </div>
        </section>
      </div>
    );
}

import { useAuth } from "../context/authContext"

export default function Home() {
  const { user } = useAuth()

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back !
        </h1>

        <p className="text-gray-500 mb-6">
          Your fitness journey starts here
        </p>

        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">Email</span>
            <span>{user?.email}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium">Role</span>
            <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
              {user?.role}
            </span>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-xl bg-indigo-50 text-indigo-700 text-sm">
          💡 Tip: Stay consistent — small workouts every day beat big ones once a week.
        </div>
      </div>
    </div>
  )
}

export default function GetInvolved() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-serif text-5xl font-bold mb-8">
        Get Involved
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border rounded-2xl p-6">
          <h2 className="font-bold text-xl mb-3">
            Volunteer
          </h2>

          <p>
            Join local projects and make a direct impact.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="font-bold text-xl mb-3">
            Fundraise
          </h2>

          <p>
            Start a fundraiser and support our mission.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="font-bold text-xl mb-3">
            Corporate Partner
          </h2>

          <p>
            Collaborate with us through sponsorships.
          </p>
        </div>

      </div>
    </div>
  );
}
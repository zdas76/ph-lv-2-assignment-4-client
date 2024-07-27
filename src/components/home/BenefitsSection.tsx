export default function BenefitsSection() {
  return (
    <div>
      <p className="text-center text-3xl mb-10 font-bold uppercase">
        Benefit Products
      </p>
      <div className="my-20 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="border p-4 bg-white shadow-md rounded-md">
          <p className="text-xl font-bold text-center mb-5">
            Advantages to Using a Elliptical
          </p>
          <div className="grid grid-row-2 gap-5">
            <img
              src="benefit/Elliptical.jpg"
              sizes="250px"
              className="w-full"
            />
            <ul className="list-disc space-y-3 font-semibold px-5">
              <li>Boosts your stamina and cardio capacity</li>
              <li>Burns a lot of calories</li>
              <li>Puts less stress on your joints</li>
              <li>Serves as both an upper and lower body workout</li>
              <li>Burns body fat</li>
              <li>Targets specific leg muscles</li>
              <li>Improves your balance</li>
              <li>Burns body fat</li>
              <li>Maintains fitness after injury</li>
            </ul>
          </div>
        </div>
        <div className="border p-4 bg-white shadow-md rounded-md">
          <p className="text-xl font-bold text-center mb-5">
            Advantages to Using a Treadmill
          </p>
          <div className="grid grid-row-2 gap-5">
            <img
              src="benefit/BTreatmills.jpg"
              sizes="250px"
              className="w-full"
            />
            <ul className="list-disc space-y-3 font-semibold px-5">
              <li>Reduced Impacte</li>
              <li>You are in Control</li>
              <li>They Simulate Race Courses</li>
              <li>Mental Health and Motivation</li>
              <li>Heart Health</li>
              <li>Weight Loss</li>
              <li>Muscle Building</li>
              <li>They Simulate Race Courses</li>
              <li>Mental Health and Motivation</li>
              <li>You are in Control</li>
            </ul>
          </div>
        </div>
        <div className="border p-4 bg-white shadow-md rounded-md">
          <p className="text-xl font-bold text-center mb-5">
            Advantages to Using a Dumbbells
          </p>
          <div className="grid grid-row-2 gap-5">
            <img src="benefit/dumbell.jpg" sizes="250px" className="w-full" />
            <ul className="list-disc space-y-3 font-semibold px-5">
              <li>They Help You Build Muscle Mass and Strength</li>
              <li>Dumbbells Help Build Muscular Endurance</li>
              <li>They Help Reduce Muscle Imbalances and Asymmetries</li>
              <li>They Challenge Stability</li>
              <li>Dumbbells Allow You to Customize Your Range of Motion</li>
              <li>They Work Different Planes of Motion</li>
              <li>Dumbbells Are Beginner-Friendly</li>
              <li>They Can Be Used Every Day</li>
            </ul>
          </div>
        </div>
        <div className="border p-4 bg-white shadow-md rounded-md">
          <p className="text-xl font-bold text-center mb-5">
            Advantages to Using a Cable Machine
          </p>
          <div className="grid grid-row-2 gap-5">
            <img
              src="benefit/CableMachine.jpg"
              sizes="250px"
              className="w-full"
            />
            <ul className="list-disc space-y-3 font-semibold px-5">
              <li>They Help You Build Muscle Mass and Strength</li>
              <li>Dumbbells Help Build Muscular Endurance</li>
              <li>They Help Reduce Muscle Imbalances and Asymmetries</li>
              <li>They Challenge Stability</li>
              <li>Dumbbells Allow You to Customize Your Range of Motion</li>
              <li>They Work Different Planes of Motion</li>
              <li>Dumbbells Are Beginner-Friendly</li>
              <li>They Can Be Used Every Day</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

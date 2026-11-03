import renovationPlanningIllustration from "../../../public/images/renovation-planning-illustration.png";

export default function EmptyProjectsState() {
  return (
    <div className="nav-offset-height flex flex-col items-center">
      <div className="max-w-80 max-h-60 max-sm:max-w-46 max-sm:max-h-46">
        <img
          src={renovationPlanningIllustration}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <h2 className="heading-md text-center mb-4">No projects uploaded yet</h2>
      <div className="flex flex-col gap-1">
        <p className="text-center text-sm text-gray-dark">
          We haven't added any projects to our portfolio yet.
        </p>
        <p className="text-center text-sm text-gray-dark">
          Check back soon to see our latest work.
        </p>
      </div>
    </div>
  );
}

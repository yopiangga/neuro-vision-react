import {TablePatients} from "./component/table-patients";

export function PatientSection() {
  return (
      <div className="flex-grow p-4 bg-gray-50 overflow-y-auto">
          <p className="font-bold mb-5">
              Hey Operator -{" "}
              <span className="text-gray-500 font-normal">
          here’s what’s happening with your patient today
        </span>
          </p>
        <TablePatients />
      </div>
  );
}

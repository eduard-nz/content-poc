import { useState } from 'react';
import { tinaField } from 'tinacms/dist/react';

function RedFlagComponent({ redFlags }: { redFlags?: { intro?: string | null; flags: string[] } | null }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <>
      {redFlags && (
        <div className="relative mt-4 border-l-2 border-gray-500 bg-gray-300 p-4 text-sm">
          <div className="absolute right-2 top-2">
            <div
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-500 text-gray-200 hover:bg-gray-700"
              onClick={togglePopup}
              title="What are red flags in HealthPathways?"
            >
              <span className="text-xs">?</span>
            </div>
          </div>

          {isPopupOpen && (
            <div className="absolute right-0 top-10 z-50 w-64 rounded-lg bg-white p-4 shadow-lg">
              <h3 className="text-lg font-bold">Red flags</h3>
              <p className="mt-2 text-sm">
                HealthPathways red flags signal the most serious clinical risks that are easily missed. The
                list is not comprehensive.
              </p>
              <p className="mt-2 text-sm">
                Each one meets all of these criteria:
                <ul className="list-disc pl-4">
                  <li>
                    It indicates a serious differential diagnosis, or high risk of deterioration without
                    intervention, or severe treatment risk.
                  </li>
                  <li>It is commonly missed, or not widely known.</li>
                  <li>
                    If missed, it can significantly threaten the patient&apos;s health or have legal
                    consequences for the clinician.
                  </li>
                </ul>
              </p>
              <button className="mt-4 text-blue-700 hover:text-blue-900" onClick={togglePopup}>
                Close
              </button>
            </div>
          )}

          <p className="text-gray-700">Red flags</p>
          <div className="text-red-700" data-tina-field={tinaField(redFlags)}>
            {redFlags.intro && <p className="mt-3">{redFlags.intro}</p>}
            <ul className="list-disc pl-5">
              {redFlags.flags.map((flag, index) => (
                <li key={index} className="mt-1">
                  {flag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default RedFlagComponent;

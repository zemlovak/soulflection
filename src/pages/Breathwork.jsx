import { useState } from "react";
import Modal from "../components/Dashboard/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faLightbulb } from "@fortawesome/free-solid-svg-icons";

import exercisesList from "../assets/content/breathworkExercisesData";

export const BreathworkPage = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showingItem, setShowingItem] = useState(null);

  // Toggle accordion for a single exercise
  const handleToggleAccordion = (exerciseTitle) => {
    setExpandedItems((prev) => ({
      ...prev,
      [exerciseTitle]: !prev[exerciseTitle],
    }));
  };

  // Open the modal for a specific exercise
  const handleOpenModal = (exercise) => {
    setShowingItem(exercise);
    setShowModal(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setShowingItem(null);
    setShowModal(false);
  };

  return (
    <div className="min-w-96 px-8 py-8 mb-8 sm:px-12 bg-cyan-dark bg-opacity-25 rounded-xl">
      {/* Top Navigation (Placeholder) */}
      <div className="w-full h-8 text-sm flex flex-row justify-start items-center">
        {/* Replace or remove if not needed */}
        <div className="min-w-max p-2 font-semibold bg-cyan-light bg-opacity-95 text-white text-sm rounded-t-lg">
          Breathwork Exercises
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full h-auto bg-cyan-dark rounded-lg rounded-tl-none px-6 py-4 relative text-white">
        <p className="text-sm w-3/5 my-6">
          <FontAwesomeIcon icon={faLightbulb} className="mr-2"/>
          Breathing exercises are simple techniques that help you take control
          of your breath.
          <br /> When we're stressed or anxious, our breath usually
          speeds up, which can actually make us feel more anxious. But doing
          some focused breathing can help interrupt the cycle in a way that
          naturally calms your body and mind.
        </p>
        <div className="w-full  min-h-[200px] text-white">
          {exercisesList.map((exercise) => {
            const isExpanded = expandedItems[exercise.title] || false;

            return (
              <>
                <div className={`w-full grid grid-cols-12 grid-rows-1 bg-white bg-opacity-15 rounded-lg p-4 ${!isExpanded && "mb-1"}`}>
                  <p className="font-light col-span-10">{exercise.title}</p>

                  {/* “How To” opens the Modal */}
                  <button
                    className="rounded-full col-span-1 bg-cyan-light px-4 py-1 text-white text-sm"
                    onClick={() => handleOpenModal(exercise)}
                  >
                    How to
                  </button>

                  {/* Accordion toggle button */}
                  <button
                    className="text-white col-span-1"
                    onClick={() => handleToggleAccordion(exercise.title)}
                  >
                    {isExpanded ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </button>
                </div>

                {/* Collapsible Description */}
                <div
                  className={`
                    overflow-hidden 
                    transition-all 
                    duration-300 
                    ease-in-out
                    ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  {isExpanded && (
                    <p className="italic text-sm mb-4 p-4 border border-white border-opacity-15 rounded-lg">
                      {exercise.detail.description}
                    </p>
                  )}
                </div>
                </>
            );
          })}
        </div>

        {/* Modal for Instructions */}
        <Modal show={showModal} onClose={handleCloseModal}>
          {showingItem && (
            <div className="px-4 py-2">
              <h3 className="text-6xl font-sanbrainy mb-8 text-white">
                {showingItem.title}
              </h3>
              <ol className="text-white">
                {showingItem.detail.instructions.map((step, idx) => (
                  <li
                    key={idx}
                    className="mb-4 list-decimal list-inside text-justify font-light"
                  >
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default BreathworkPage;
